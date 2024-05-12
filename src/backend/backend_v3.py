from typing import Dict
from datetime import datetime, timedelta
from yahooquery import Ticker
from quart import Quart, jsonify, request
from quart_cors import cors

import warnings
warnings.filterwarnings("ignore")

app = Quart(__name__)
app = cors(app)


"""
--------- Yahooquery Functions ----------
"""

YQ_MODULES = [
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

BASE_MODULES = {
    "asset_profile": "Asset Profile",
    "calendar_events": "Calendar Events",
    "esg_scores": "ESG Scores",
    "financial_data": "Financial Data",
    "fund_profile": "Fund Profile",
    "key_stats": "Key Statistics",
    "major_holders": "Major Holders",
    "price": "Pricing",
    "quote_type": "Quote Type",
    "share_purchase_activity": "Share Purchase Activity",
    "summary_detail": "Summary Detail",
    "summary_profile": "Summary Profile",
    "balance_sheet": "Balance Sheet",
    "cash_flow": "Cash Flow",
    "company_officers": "Company Officers",
    "earning_history": "Earning History",
    "earnings": "Earnings",
    "earnings_trend": "Earnings Trend",
    "index_trend": "Index Trend",
    "sector_trend": "Sector Trend",
    "industry_trend": "Industry Trend",
    "fund_ownership": "Fund Ownership",
    "grading_history": "Grading History",
    "income_statement": "Income Statement",
    "insider_holders": "Insider Holders",
    "insider_transactions": "Insider Transactions",
    "institution_ownership": "Institution Ownership",
    "recommendation_trend": "Recommendation Trends",
    "sec_filings": "SEC Filings",
    "fund_bond_holdings": "Fund Bond Holdings",
    "fund_bond_ratings": "Fund Bond Ratings",
    "fund_equity_holdings": "Fund Equity Holdings",
    "fund_holding_info": "Fund Holding Information",
    "fund_performance": "Fund Performance",
    "fund_sector_weightings": "Fund Sector Weightings",
    "fund_top_holdings": "Fund Top Holdings",
}


def init_ticker(symbols, **kwargs):
    return Ticker(symbols, **kwargs)


def get_module_data(ticker: Ticker, attribute: str, *args, **kwargs) -> Dict:
    try:
        return getattr(ticker, attribute)(*args, **kwargs)
    except TypeError:
        return getattr(ticker, attribute)


def map_modules_data(yq_modules_data):
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
                mapped_symbol_data['freeCashflowPerShare'] = mapped_symbol_data['freeCashflow']['raw'] / mapped_symbol_data['sharesOutstanding']['raw']
                mapped_symbol_data['freeCashflowYield'] = mapped_symbol_data['freeCashflow']['raw'] / mapped_symbol_data['marketCap']['raw']
                if mapped_symbol_data['freeCashflowPerShare'] != 0:
                    mapped_symbol_data['freeCashflowPayoutRatio'] = mapped_symbol_data['dividendRate']['raw'] / mapped_symbol_data['freeCashflowPerShare']
                else:
                    mapped_symbol_data['freeCashflowPayoutRatio'] = 0
            except KeyError:
                mapped_symbol_data['freeCashflowPerShare'] = 0
                mapped_symbol_data['freeCashflowYield'] = 0
                mapped_symbol_data['freeCashflowPayoutRatio'] = 0
        else:
            mapped_symbol_data['profile'] = data['assetProfile']
            mapped_symbol_data['profile'].update(data['fundProfile'])
            mapped_symbol_data['dividendRate'] = data['summaryDetail']['yield']['raw'] * data['price']['regularMarketPrice']['raw']
            mapped_symbol_data['dividendYield'] = data['summaryDetail']['yield']['raw']
            mapped_symbol_data['topHoldings'] = data['topHoldings']
            mapped_symbol_data['fundPerformance'] = data['fundPerformance']
        
        del mapped_symbol_data['profile']['companyOfficers']
        mapped_yq_data[symbol] = mapped_symbol_data
    return mapped_yq_data


def fetch_stock_data(symbols):
    ticker = init_ticker(symbols, formatted=True, asynchronous=True)
    try:
        modules_data = get_module_data(ticker, 'get_modules', modules=YQ_MODULES)
        return map_modules_data(modules_data)
    except Exception as e:
        print(f'failed to fetch modules data for {symbols}:', e)
        return None


def yq_dividend_history(symbol, start_date):
    ticker = init_ticker(symbol, formatted=True, asynchronous=True)
    try:
        return get_module_data(ticker, 'dividend_history', start=start_date)
    except Exception as e:
        print(symbol, 'failed to fetch dividend history:', e)
        return None


def yq_technical_insights(symbol):
    ticker = init_ticker(symbol, formatted=True, asynchronous=True)
    try:
        return get_module_data(ticker, 'technical_insights')
    except Exception as e:
        print(symbol, 'failed to fetch technical insights:', e)
        return None


def yq_corporate_events(symbol):
    ticker = init_ticker(symbol, formatted=True, asynchronous=True)
    try:
        return get_module_data(ticker, 'corporate_events')
    except Exception as e:
        print(symbol, 'failed to fetch corporate events:', e)
        return None


"""
--------- Quart App Functions ----------
"""


@app.route('/')
def index():
    return '<h1>Portfolio Tracker Backend</h1>'


@app.route('/fetch/stock/<symbol>')
def get_stock_data(symbol):
    data = fetch_stock_data(symbol)
    if data is not None:
        return data
    else:
        return f'<h1>Unable to fetch data for symbol: {symbol} </h1>'


@app.route('/fetch/portfolio/<symbols>')
def fetch_stocks_data(symbols):
    symbols = symbols.split(':')
    data = fetch_stock_data(symbols)
    if data is not None:
        return data
    else:
        return f'<h1>Unable to fetch data for symbols: {symbols} </h1>'


@app.route('/fetch/technical-insights/<symbol>')
def fetch_technical_insights(symbol):
    data = yq_technical_insights(symbol)
    return jsonify(data)


@app.route('/fetch/portfolio/technical-insights/<symbols>')
def fetch_portfolio_technical_insights(symbols):
    symbols = symbols.split(':')
    data = yq_technical_insights(symbols)
    return jsonify(data)


@app.route('/fetch/dividend-history/<symbol>')
def fetch_dividend_history(symbol):
    div_his = {}
    years_param = int(request.args.get('years', 10))
    start_date = datetime.now() - timedelta(days=365 * years_param)
    div_his_data = yq_dividend_history(symbol, start_date)
    for line in div_his_data.to_csv().split()[1:]:
        _, div_date, div_rate = line.split(',')
        div_his[div_date] = div_rate
    return jsonify(div_his)


@app.route('/fetch/events/<symbol>')
def fetch_corporate_events(symbol):
    data = yq_corporate_events(symbol)
    data = data.to_dict(orient='split')
    timestamps = data['index']
    articles = data['data']
    events = {symbol: []}
    for article in zip(timestamps, articles):
        timestamp = article[0][1]
        if timestamp.year == datetime.now().year:
            event = {
                'symbol': article[0][0],
                'time': timestamp.value,
                'displayTime': f'{timestamp.day_name()}, {timestamp.month_name()} {timestamp.day} {timestamp.year}',
                'title': article[1][2],
                'text': article[1][3]
            }
            events[symbol].append(event)
    return jsonify(events)


if __name__ == '__main__':
    # symbol = 'sbux'
    # data = fetch_stock_data(symbol)
    # data = yq_dividend_history(symbol, start_date='05-20-2020') # returns pandas.DataFrame
    # data = yq_technical_insights(symbol)
    # data = yq_corporate_events(symbol) # returns pandas.DataFrame
    # print(data)

    # symbols = ['T', 'vz']
    # data = fetch_stock_data(symbols)
    # data = yq_dividend_history(symbols, start_date='05-01-2020') # returns pandas.DataFrame
    # data = yq_technical_insights(symbols)
    # data = yq_corporate_events(symbols) # returns pandas.DataFrame
    # print(data)

    app.run(debug=True)
