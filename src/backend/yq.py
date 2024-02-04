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


def yq_stock_data(symbols):
    ticker = Ticker(symbols, asynchronous=True, progress=True)
    return ticker.get_modules(yq_selected_modules)


def yq_dividend_history(symbol, start_date):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.dividend_history(start=start_date)


# TODO: there is alL_financials module I should use instead of this
def yq_financials(symbol):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)

        path = os.path.join(STOCK_DATA_PATH, f'{symbol}-balance-sheet.json')
        balance_sheet = ticker.balance_sheet(frequency='q', trailing=True)
        balance_sheet.to_json(path, orient='records', indent=2)

        path = os.path.join(STOCK_DATA_PATH, f'{symbol}-cash-flow.json')
        cash_flow = ticker.cash_flow(frequency='q', trailing=True)
        cash_flow.to_json(path, orient='records', indent=2)

        path = os.path.join(STOCK_DATA_PATH, f'{symbol}-income-statement.json')
        income_statement = ticker.income_statement(frequency='q', trailing=True)
        income_statement.to_json(path, orient='records', indent=2)

        path = os.path.join(STOCK_DATA_PATH, f'{symbol}-valuation-measures.json')
        valuation_measures = ticker.valuation_measures
        valuation_measures.to_json(path, orient='records', indent=2)
    except Exception as e:
        print(symbol, 'failed to fetch financials:', e)


# TODO: is this userful?
def yq_sec_filings(symbol):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    path = os.path.join(STOCK_DATA_PATH, f'{symbol}-sec-filings.json')
    sec_filings = ticker.sec_filings.head()
    sec_filings.to_json(path, orient='records', indent=2)


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
        holdings[symbol] = symbol_data
    return holdings


def map_symbol_data(holdings, yqdata):
    total_investment = sum([data['position']['totalCost'] for data in holdings.values()])
    annual_dividend_income = 0
    total_gain = 0

    for symbol, data in yqdata.items():
        is_equity = data['price']['quoteType'] == 'EQUITY'

        position = holdings[symbol]['position']
        position['marketValue'] = position['sharesOwned'] * data['price']['regularMarketPrice']
        position['unrealizedGain'] = position['marketValue'] - position['totalCost']
        position['unrealizedGainPercent'] = position['unrealizedGain'] / position['totalCost'] * 100
        position['totalReturn'] = position['unrealizedGain']  # TODO: add dividend gained amount

        try:
            key = 'dividendRate' if is_equity else 'yield'
            dividendRate = data['summaryDetail'][key] if is_equity else data['summaryDetail'][key] * data['price']['regularMarketPrice']
            dividend_income = position['sharesOwned'] * dividendRate
            annual_dividend_income += dividend_income

            position['dividendIncome'] = dividend_income
            position['yieldOnCost'] = dividendRate / position['costAverage'] * 100
        except Exception:
            position['dividendIncome'] = 0
            position['yieldOnCost'] = 0

        total_gain += position['unrealizedGain']
        holdings[symbol]['position'] = position
        holdings[symbol]['profile'] = data['assetProfile']

        if is_equity:
            holdings[symbol]['calendarEvents'] = data['calendarEvents']
            holdings[symbol]['earnings'] = data['earnings']
            holdings[symbol]['earnings'].update(data['earningsHistory'])
            holdings[symbol]['earnings'].update(data['earningsTrend'])
            holdings[symbol]['cashflowHistory'] = {}
            holdings[symbol]['balanceSheetHistory'] = {}
            holdings[symbol]['incomeStatement'] = {}
            holdings[symbol]['cashflowHistory']['annual'] = data['cashflowStatementHistory']['cashflowStatements'] 
            holdings[symbol]['cashflowHistory']['quarterly'] = data['cashflowStatementHistoryQuarterly']['cashflowStatements']
            holdings[symbol]['balanceSheetHistory']['annual'] = data['balanceSheetHistory']['balanceSheetStatements']
            holdings[symbol]['balanceSheetHistory']['quarterly'] = data['balanceSheetHistoryQuarterly']['balanceSheetStatements']
            holdings[symbol]['incomeStatement']['annual'] = data['incomeStatementHistory']['incomeStatementHistory']
            holdings[symbol]['incomeStatement']['quarterly'] = data['incomeStatementHistoryQuarterly']['incomeStatementHistory']
            holdings[symbol].update(data['financialData'])
        else:
            holdings[symbol]['dividendRate'] = data['summaryDetail']['yield'] * data['price']['regularMarketPrice']
            holdings[symbol]['dividendYield'] = data['summaryDetail']['yield']
            holdings[symbol]['topHoldings'] = data['topHoldings']
            holdings[symbol]['profile'].update(data['fundProfile'])
            holdings[symbol]['fundPerformance'] = data['fundPerformance']

        holdings[symbol].update(data['price'])
        holdings[symbol].update(data['summaryDetail'])
        holdings[symbol].update(data['defaultKeyStatistics'])

        holding = holdings[symbol]
        clean(holding)

    holdings['totalPositions'] = len(holdings)
    holdings['totalInvestment'] = total_investment
    holdings['unrealizedGain'] = total_gain
    holdings['portfolioValue'] = total_investment + total_gain
    holdings['dividendIncome'] = annual_dividend_income
    holdings['dividendIncomeGoal'] = 12000
    holdings['portfolioYield'] = annual_dividend_income / holdings['portfolioValue']
    holdings['portfolioYieldOnCost'] = annual_dividend_income / total_investment

    table = []
    for k, v in holdings.items():
        try:
            position = v['position']
        except TypeError:
            continue
        try:
            v['fcfPerShare'] = v['freeCashflow'] / v['sharesOutstanding']
            v['fcfYield'] = v['freeCashflow'] / v['marketCap']
        except KeyError:
            v['fcfPerShare'] = 0
            v['fcfYield'] = 0
        table.append([
            k, 
            position['sharesOwned'], 
            round_string_value(position['costAverage']), 
            round_string_value(position['dividendIncome'])
        ])
        position['portfolioPercent'] = position['marketValue'] / holdings['portfolioValue']
        keys = list(v.keys())
        keys.sort()
        holdings[k] = {i: v[i] for i in keys}
    return holdings
