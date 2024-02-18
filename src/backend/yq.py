import os
import queue
from concurrent.futures import ThreadPoolExecutor
from multiprocessing import Pool, Process, cpu_count
from yahooquery import Ticker
from helpers.funcs import load_data_from

BACKEND_PATH = os.path.abspath(os.path.dirname(__file__))
DATA_PATH = os.path.join(BACKEND_PATH, 'data')
STOCK_DATA_PATH = os.path.join(DATA_PATH, 'stock-data')
HOLDINGS_DATA_PATH = os.path.join(DATA_PATH, 'holdings.csv')

total_cpu = cpu_count()
parallel_method = 'thread'

yq_selected_modules = [
    'assetProfile',  # Information related to the company's location, operations, and officers.
    'summaryDetail',  # Contains information available via the Summary tab
    'defaultKeyStatistics',  # KPIs for given symbol(s) (PE, enterprise value, EPS, EBITA, and more
    'financialData',  # Financial KPIs
    'price',  # Detailed pricing data for given symbol(s), exchange, quote type, currency, market cap, pre / post market data, etc.
    'calendarEvents',  # Earnings and Revenue expectations for upcoming earnings date, ex-dividend date, dividend date
    'earnings',  # Historical earnings data
    'earningsTrend',  # Historical trend data for earnings and revenue estimations
    'earningsHistory',  # Data related to historical earnings (actual vs. estimate)
    'recommendationTrend',  # Data related to historical recommendations (buy, hold, sell)
    'indexTrend',  # Trend data related given symbol(s) index, specificially PE and PEG ratios
    'cashflowStatementHistory',
    'cashflowStatementHistoryQuarterly',
    'incomeStatementHistory',
    'incomeStatementHistoryQuarterly',
    'balanceSheetHistory',
    'balanceSheetHistoryQuarterly',
    'insiderHolders',  # Data related to stock holdings of a given symbol(s) insiders
    'institutionOwnership',  # Top 10 owners of a given symbol(s)
    'majorHoldersBreakdown',  # Data showing breakdown of owners of given symbol(s), insiders, institutions, etc.
    'insiderTransactions',  # Transactions by insiders
    'fundOwnership',  # Top 10 owners of a given symbol(s)
    'fundPerformance',  # Historical return data for a given symbol(s) and symbol(s) specific category
    'fundProfile',  # Summary level information for a given symbol(s)
    'topHoldings',
]


def parallelize(method):
    def wrapper(func):
        def multiprocess(*args, **kwargs):
            processes = queue.Queue()
            for i in args[0]:
                p = Process(target=func, args=(i,))
                processes.put(p)
                p.start()
            while not processes.empty():
                p = processes.get()
                p.join()

        def multipool(*args, **kwargs):
            with Pool(cpu_count()) as pool:
                return pool.map(func, *args, **kwargs)

        def multithread(*args, **kwargs):
            with ThreadPoolExecutor() as executor:
                return executor.map(func, *args, **kwargs)

        funcs = {
            'thread': multithread,
            'process': multiprocess,
            'pool': multipool
        }
        return funcs[method]
    return wrapper


def parallel_run(func, *args, **kwargs):
    p_func = parallelize(parallel_method)(func)
    p_func(*args, **kwargs)


def round_string_value(value, digit=2):
    return round(float(value), digit)


def clean(data):
    shit_pile = [
        'algorithm',
        'ask',
        'askSize',
        'bid',
        'bidSize',
        'category',
        'coinMarketCapLink',
        'cryptoTradeable',
        'currency',
        'currencySymbol',
        'esgPopulated',
        'exchangeDataDelayedBy',
        'exchangeTimezoneName',
        'exchangeTimezoneShortName',
        'fromCurrency',
        'fundFamily',
        'gmtOffSetMilliseconds',
        'language',
        'lastMarket',
        'lastSplitDate',
        'lastSplitFactor',
        'legalType',
        'market',
        'marketState',
        'maxAge',
        'messageBoardId',
        'postMarketSource',
        'postMarketTime',
        'preMarketSource',
        'priceHint',
        'quoteSourceName',
        'region',
        'regularMarketSource',
        'regularMarketTime',
        'sourceInterval',
        'toCurrency',
        'tradeable',
        'triggerable',
        'underlyingSymbol',
    ]
    for shit in shit_pile:
        try:
            del data[shit]
        except KeyError:
            continue


def yq_stock_data(symbols=None):
    if symbols is None:
        symbols = list(generate_holdings_data().keys())
    ticker = Ticker(symbols, asynchronous=True, progress=True)
    ticker_data = ticker.get_modules(yq_selected_modules)
    mapped_data = map_stock_data(ticker_data)
    return mapped_data


def yq_dividend_history(symbol, start_date):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.dividend_history(start=start_date)


# TODO: there is alL_financials module I should use instead of this
# def yq_financials(symbol):
#     try:
#         ticker = Ticker(symbol, asynchronous=True, progress=True)

#         path = os.path.join(STOCK_DATA_PATH, f'{symbol}-balance-sheet.json')
#         balance_sheet = ticker.balance_sheet(frequency='q', trailing=True)
#         balance_sheet.to_json(path, orient='records', indent=2)

#         path = os.path.join(STOCK_DATA_PATH, f'{symbol}-cash-flow.json')
#         cash_flow = ticker.cash_flow(frequency='q', trailing=True)
#         cash_flow.to_json(path, orient='records', indent=2)

#         path = os.path.join(STOCK_DATA_PATH, f'{symbol}-income-statement.json')
#         income_statement = ticker.income_statement(frequency='q', trailing=True)
#         income_statement.to_json(path, orient='records', indent=2)

#         path = os.path.join(STOCK_DATA_PATH, f'{symbol}-valuation-measures.json')
#         valuation_measures = ticker.valuation_measures
#         valuation_measures.to_json(path, orient='records', indent=2)
#     except Exception as e:
#         print(symbol, 'failed to fetch financials:', e)


def yq_corporate_events(symbol):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)
        return ticker.corporate_events
    except Exception as e:
        print(symbol, 'failed to fetch corporate events:', e)


def yq_technical_insights(symbol):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.technical_insights


def yq_recommendations(symbol):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.recommendations


def generate_holdings_data():
    holdings = {}
    for symbol, shares, cost_avg, _ in list(load_data_from(HOLDINGS_DATA_PATH)):
        symbol_data = holdings[symbol]['position'] if holdings.get(symbol) else {}
        shares = float(shares)
        cost_avg = float(cost_avg)
        symbol_data['sharesOwned'] = shares
        symbol_data['costAverage'] = cost_avg
        symbol_data['totalCost'] = round(cost_avg * shares, 4)
        symbol_data['symbol'] = symbol
        holdings[symbol] = symbol_data
    return holdings


def map_stock_data(yqdata):
    holdings = generate_holdings_data()
    symbols = list(holdings.keys())
    mapped_data = {}

    for symbol, data in yqdata.items():
        mapped_data[symbol] = {}
        mapped_data[symbol]['profile'] = data['assetProfile']
        mapped_data[symbol].update(data['price'])
        mapped_data[symbol].update(data['summaryDetail'])
        mapped_data[symbol].update(data['defaultKeyStatistics'])

        is_equity = data['price']['quoteType'] == 'EQUITY'
        if is_equity:
            mapped_data[symbol]['calendarEvents'] = data['calendarEvents']
            mapped_data[symbol]['earnings'] = data['earnings']
            mapped_data[symbol]['earnings'].update(data['earningsHistory'])
            mapped_data[symbol]['earnings'].update(data['earningsTrend'])
            mapped_data[symbol]['cashflowHistory'] = {}
            mapped_data[symbol]['cashflowHistory']['annual'] = data['cashflowStatementHistory']['cashflowStatements'] 
            mapped_data[symbol]['cashflowHistory']['quarterly'] = data['cashflowStatementHistoryQuarterly']['cashflowStatements']
            mapped_data[symbol]['balanceSheetHistory'] = {}
            mapped_data[symbol]['balanceSheetHistory']['annual'] = data['balanceSheetHistory']['balanceSheetStatements']
            mapped_data[symbol]['balanceSheetHistory']['quarterly'] = data['balanceSheetHistoryQuarterly']['balanceSheetStatements']
            mapped_data[symbol]['incomeStatementHistory'] = {}
            mapped_data[symbol]['incomeStatementHistory']['annual'] = data['incomeStatementHistory']['incomeStatementHistory']
            mapped_data[symbol]['incomeStatementHistory']['quarterly'] = data['incomeStatementHistoryQuarterly']['incomeStatementHistory']
            mapped_data[symbol].update(data['financialData'])
            mapped_data[symbol]['recommendationTrend'] = data['recommendationTrend']
            mapped_data[symbol]['indexTrend'] = data['indexTrend']
            mapped_data[symbol]['shareholders'] = {}
            mapped_data[symbol]['shareholders']['institutionOwnership'] = data.get('institutionOwnership', {})
            mapped_data[symbol]['shareholders']['majorHolders'] = data.get('majorHoldersBreakdown', {})
            mapped_data[symbol]['shareholders']['insiderTransactions'] = data.get('insiderTransactions', {})
            mapped_data[symbol]['shareholders']['insiderHolders'] = data.get('insiderHolders', {})
            mapped_data[symbol]['shareholders']['fundOwnership'] = data.get('fundOwnership', {})
            try:
                mapped_data[symbol]['fcfPerShare'] = mapped_data[symbol]['freeCashflow'] / mapped_data[symbol]['sharesOutstanding']
                mapped_data[symbol]['fcfYield'] = mapped_data[symbol]['freeCashflow'] / mapped_data[symbol]['marketCap']
            except KeyError:
                mapped_data[symbol]['fcfPerShare'] = 0
                mapped_data[symbol]['fcfYield'] = 0
        else:
            mapped_data[symbol]['dividendRate'] = data['summaryDetail']['yield'] * data['price']['regularMarketPrice']
            mapped_data[symbol]['dividendYield'] = data['summaryDetail']['yield']
            mapped_data[symbol]['topHoldings'] = data['topHoldings']
            mapped_data[symbol]['profile'].update(data['fundProfile'])
            mapped_data[symbol]['fundPerformance'] = data['fundPerformance']
    for _, v in mapped_data.items():
        clean(v)

    mapped_data.update({'portfolioPositions': len(symbols)})
    mapped_data.update({'portfolioMarketValue': 0})
    mapped_data.update({'portfolioTotalInvestment': 0})
    mapped_data.update({'portfolioDividendIncome': 0})
    for i in symbols:
        position = holdings[i]
        stock_data = mapped_data[i]
        price = stock_data.get('regularMarketPrice', 0)
        total_cost = position['totalCost']
        position['marketValue'] = price * position['sharesOwned']
        position['unrealizedGain'] = position['marketValue'] - total_cost
        position['unrealizedGainPercent'] = position['unrealizedGain'] / total_cost
        position['dividendIncome'] = stock_data.get('dividendRate', 0) * position['sharesOwned']
        position['yieldOnCost'] = position['dividendIncome'] / total_cost
        mapped_data['portfolioMarketValue'] += position['marketValue']
        mapped_data['portfolioTotalInvestment'] += total_cost
        mapped_data['portfolioDividendIncome'] += position['dividendIncome']

    for i in symbols:
        position = holdings[i]
        position['portfolioPercent'] = position['marketValue'] / mapped_data['portfolioMarketValue']

    mapped_data['portfolioUnrealizedGain'] = mapped_data['portfolioMarketValue'] - mapped_data['portfolioTotalInvestment']
    mapped_data['portfolioUnrealizedGainPercent'] = mapped_data['portfolioUnrealizedGain'] / mapped_data['portfolioTotalInvestment']
    mapped_data['portfolioYield'] = mapped_data['portfolioDividendIncome'] / mapped_data['portfolioMarketValue']
    mapped_data['portfolioYieldOnCost'] = mapped_data['portfolioDividendIncome'] / mapped_data['portfolioTotalInvestment']

    return mapped_data
