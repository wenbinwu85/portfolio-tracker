import os
import pickle
from yahooquery import Ticker
from helpers.funcs import load_data_from, dump_data_to

BACKEND_PATH = os.path.abspath(os.path.dirname(__file__))
DATA_PATH = os.path.join(BACKEND_PATH, 'data')
HOLDINGS_CSV_PATH = os.path.join(DATA_PATH, 'holdings.csv')
HOLDINGS_JSON_PATH = os.path.join(DATA_PATH, 'holdings.json')
PORTFOLIO_DATA_PATH = os.path.join(DATA_PATH, 'portfolio-data.json')
PORTFOLIO_PICKLE_PATH = os.path.join(DATA_PATH, 'portfolio-data.pickle')

yq_modules = [
    'assetProfile',  # Information related to the company's location, operations, and officers.
    'calendarEvents',  # Earnings and Revenue expectations for upcoming earnings date, ex-dividend date, dividend date
    'defaultKeyStatistics',  # KPIs for given symbol(s) (PE, enterprise value, EPS, EBITA, and more
    'earnings',  # Historical earnings data
    'earningsHistory',  # Data related to historical earnings (actual vs. estimate)
    'earningsTrend',  # Historical trend data for earnings and revenue estimations
    'financialData',  # Financial KPIs
    'fundOwnership',  # Top 10 owners of a given symbol(s)
    'fundPerformance',  # Historical return data for a given symbol(s) and symbol(s) specific category
    'fundProfile',  # Summary level information for a given symbol(s)
    'indexTrend',  # Trend data related given symbol(s) index, specificially PE and PEG ratios
    'insiderHolders',  # Data related to stock holdings of a given symbol(s) insiders
    'insiderTransactions',  # Transactions by insiders
    'institutionOwnership',  # Top 10 owners of a given symbol(s)
    'majorHoldersBreakdown',  # Data showing breakdown of owners of given symbol(s), insiders, institutions, etc.
    'price',  # Detailed pricing data for given symbol(s), exchange, quote type, currency, market cap, pre / post market data, etc.
    'recommendationTrend',  # Data related to historical recommendations (buy, hold, sell)
    'summaryDetail',  # Contains information available via the Summary tab
    'topHoldings',
    'upgradeDowngradeHistory'
]


def round_string_value(value, digit=2):
    return round(float(value), digit)


def get_file_path(file_name, ext='json'):
    return os.path.join(DATA_PATH, f'{file_name}.{ext}')


def get_tickers(symbols):
    return Ticker(symbols, asynchronous=True, progress=True)


def dump_tickers_data(tickers_data):
    dump_data_to(tickers_data, PORTFOLIO_DATA_PATH)
    with open(PORTFOLIO_PICKLE_PATH, 'wb') as portfolio_pickle:
        pickle.dump(tickers_data, portfolio_pickle)

    for symbol, data in tickers_data.items():
        path = get_file_path(symbol.lower(), 'json')
        dump_data_to(data, path)


def map_stock_data(yq_modules_data):
    mapped_yq_data = {}
    for symbol, data in yq_modules_data.items():
        mapped_symbol_data = {}
        mapped_symbol_data.update(data['price'])
        mapped_symbol_data.update(data['summaryDetail'])
        mapped_symbol_data.update(data['defaultKeyStatistics'])
        if data['price']['quoteType'] == 'EQUITY':
            mapped_symbol_data.update(data['financialData'])
            mapped_symbol_data['profile'] = data['assetProfile']
            mapped_symbol_data['calendarEvents'] = data['calendarEvents']
            mapped_symbol_data['earnings'] = data['earnings']
            mapped_symbol_data['earnings'].update(data['earningsHistory'])
            mapped_symbol_data['earnings'].update(data['earningsTrend'])
            mapped_symbol_data['indexTrend'] = data['indexTrend']
            mapped_symbol_data['insiderTransactions'] = data.get('insiderTransactions', {}).get('transactions', {})
            mapped_symbol_data['recommendationTrend'] = data['recommendationTrend']['trend']
            mapped_symbol_data['shareholders'] = {}
            mapped_symbol_data['shareholders']['fundOwnership'] = data['fundOwnership']['ownershipList']
            mapped_symbol_data['shareholders']['insiderHolders'] = data['insiderHolders']['holders']
            mapped_symbol_data['shareholders']['institutionOwnership'] = data['institutionOwnership']['ownershipList']
            mapped_symbol_data['shareholders']['majorHolders'] = data.get('majorHoldersBreakdown', {})
            mapped_symbol_data['upgradeDowngradeHistory'] = data['upgradeDowngradeHistory']['history'][:10]
            try:
                mapped_symbol_data['freeCashflowPerShare'] = mapped_symbol_data['freeCashflow'] / mapped_symbol_data['sharesOutstanding']
                mapped_symbol_data['freeCashflowYield'] = mapped_symbol_data['freeCashflow'] / mapped_symbol_data['marketCap']
                if mapped_symbol_data['freeCashflowPerShare'] != 0:
                    mapped_symbol_data['freeCashflowPayoutRatio'] = mapped_symbol_data['dividendRate'] / mapped_symbol_data['freeCashflowPerShare']  
                else:
                    mapped_symbol_data['freeCashflowPayoutRatio'] = 0
            except KeyError:
                mapped_symbol_data['freeCashflowPerShare'] = 0
                mapped_symbol_data['freeCashflowYield'] = 0
                mapped_symbol_data['freeCashflowPayoutRatio'] = 0
        else:
            mapped_symbol_data['profile'] = data['assetProfile']
            mapped_symbol_data['profile'].update(data['fundProfile'])
            mapped_symbol_data['dividendRate'] = data['summaryDetail']['yield'] * data['price']['regularMarketPrice']
            mapped_symbol_data['dividendYield'] = data['summaryDetail']['yield']
            mapped_symbol_data['topHoldings'] = data['topHoldings']
            mapped_symbol_data['fundPerformance'] = data['fundPerformance']
        mapped_yq_data[symbol] = mapped_symbol_data
    return mapped_yq_data


def yq_stock_data(symbols):
    try:
        modules_data = get_tickers(symbols).get_modules(yq_modules)
        return map_stock_data(modules_data)
    except Exception as e:
        print(symbols, 'failed to fetch ticker data:', e)


def yq_dividend_history(symbol, start_date):
    try:
        return get_tickers(symbol).dividend_history(start=start_date)
    except Exception as e:
        print(symbol, 'failed to fetch dividend history:', e)


def yq_technical_insights(symbol):
    try:
        return get_tickers(symbol).technical_insights
    except Exception as e:
        print(symbol, 'failed to fetch technical insights:', e)


def yq_corporate_events(symbol):
    try:
        return get_tickers(symbol).corporate_events
    except Exception as e:
        print(symbol, 'failed to fetch corporate events:', e)


def generate_holdings_data():
    holdings = {}

    holdings.update({'portfolioPositions': 0})
    holdings.update({'portfolioMarketValue': 0})
    holdings.update({'portfolioTotalInvestment': 0})
    holdings.update({'portfolioDividendIncome': 0})
    holdings.update({'portfolioUnrealizedGain': 0})
    holdings.update({'portfolioUnrealizedGainPercent': 0})

    holdings_data = load_data_from(HOLDINGS_CSV_PATH)
    for symbol, shares, cost_avg, _ in list(holdings_data):
        shares = float(shares)
        cost_avg = float(cost_avg)
        stock_holding = {}

        try:
            stock_data_path = get_file_path(symbol.lower())
            stock_data = load_data_from(stock_data_path)
        except FileNotFoundError:
            stock_data = yq_stock_data(symbol)
            path = get_file_path(symbol.lower(), 'json')
            print('saving', symbol, 'to', path)
            dump_data_to(stock_data[symbol.upper()], path)

        stock_holding['symbol'] = symbol
        stock_holding['sharesOwned'] = shares
        stock_holding['costAverage'] = cost_avg
        stock_holding['totalCost'] = cost_avg * shares
        stock_holding['marketPrice'] = stock_data.get('regularMarketPrice', 0)
        stock_holding['marketValue'] = stock_holding.get('marketPrice', 0) * shares
        total_cost = stock_holding.get('totalCost', 0)
        stock_holding['unrealizedGain'] = stock_holding.get('marketValue', 0) - total_cost
        stock_holding['unrealizedGainPercent'] = stock_holding.get('unrealizedGain', 0) / total_cost
        stock_holding['dividendRate'] = stock_data.get('dividendRate', 0)
        stock_holding['dividendIncome'] = stock_data.get('dividendRate', 0) * shares
        stock_holding['yieldOnCost'] = stock_holding.get('dividendIncome', 0) / total_cost

        holdings['portfolioMarketValue'] += stock_holding.get('marketValue')
        holdings['portfolioTotalInvestment'] += stock_holding.get('totalCost')
        holdings['portfolioDividendIncome'] += stock_holding.get('dividendIncome')
        holdings['portfolioUnrealizedGain'] += stock_holding.get('unrealizedGain')

        for k, v in stock_holding.items():
            if not type(v) is str:
                stock_holding[k] = round(float(v), 4)

        holdings[symbol.lower()] = stock_holding

    for position in [v for v in holdings.values() if isinstance(v, dict)]:
        holdings['portfolioPositions'] += 1
        position['portfolioPercent'] = position.get('marketValue') / holdings.get('portfolioMarketValue')
        holdings[position['symbol']] = position

    holdings['portfolioUnrealizedGainPercent'] = holdings.get('portfolioUnrealizedGain') / holdings.get('portfolioTotalInvestment')
    holdings['portfolioYieldOnCost'] = holdings.get('portfolioDividendIncome') / holdings.get('portfolioTotalInvestment')
    holdings['portfolioYield'] = holdings.get('portfolioDividendIncome') / holdings.get('portfolioMarketValue')

    print('saving holdings data to', HOLDINGS_JSON_PATH)
    dump_data_to(holdings, HOLDINGS_JSON_PATH)
    return holdings


def load_portfolio_symbols():
    holdings_data = load_data_from(HOLDINGS_CSV_PATH)
    return [row[0] for row in list(holdings_data)]


if __name__ == '__main__':
    generate_holdings_data()
