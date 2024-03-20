import os
import pickle
import queue
from concurrent.futures import ThreadPoolExecutor
from multiprocessing import Pool, Process, cpu_count
from yahooquery import Ticker
from helpers.funcs import load_data_from, dump_data_to

BACKEND_PATH = os.path.abspath(os.path.dirname(__file__))
DATA_PATH = os.path.join(BACKEND_PATH, 'data')
HOLDINGS_DATA_PATH = os.path.join(DATA_PATH, 'holdings.csv')
HOLDINGS_JSON_PATH = os.path.join(DATA_PATH, 'holdings.json')

total_cpu = cpu_count()
parallel_method = 'thread'

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
    'netSharePurchaseActivity',
    'price',  # Detailed pricing data for given symbol(s), exchange, quote type, currency, market cap, pre / post market data, etc.
    'recommendationTrend',  # Data related to historical recommendations (buy, hold, sell)
    'summaryDetail',  # Contains information available via the Summary tab
    'topHoldings',
    'upgradeDowngradeHistory',
    'secFilings',
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

        funcs = {'thread': multithread, 'process': multiprocess, 'pool': multipool}
        return funcs[method]

    return wrapper


def parallel_run(func, *args, **kwargs):
    p_func = parallelize(parallel_method)(func)
    p_func(*args, **kwargs)


def round_string_value(value, digit=2):
    return round(float(value), digit)


def get_file_path(file_name, ext='json'):
    return os.path.join(DATA_PATH, f'{file_name}.{ext}')


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


def generate_holdings_data():
    holdings = {}
    holdings.update({'portfolioPositions': 0})
    holdings.update({'portfolioMarketValue': 0})
    holdings.update({'portfolioTotalInvestment': 0})
    holdings.update({'portfolioDividendIncome': 0})
    holdings.update({'portfolioUnrealizedGain': 0})
    holdings.update({'portfolioUnrealizedGainPercent': 0})

    holdings_data = load_data_from(HOLDINGS_DATA_PATH)
    for symbol, shares, cost_avg, _ in list(holdings_data):
        stock_holding = holdings.get(symbol, {})
        stock_data_path = get_file_path(symbol.lower())
        try:
            stock_data = load_data_from(stock_data_path)
        except FileNotFoundError:
            stock_data = yq_stock_data(symbol)
            dump_data_to(stock_data, stock_data_path)
        shares = float(shares)
        cost_avg = float(cost_avg)
        stock_holding['sharesOwned'] = shares
        stock_holding['costAverage'] = cost_avg
        stock_holding['totalCost'] = round(cost_avg * shares, 4)
        stock_holding['symbol'] = symbol
        stock_holding['marketPrice'] = stock_data.get('regularMarketPrice', 0)
        stock_holding['marketValue'] = stock_holding['marketPrice'] * stock_holding['sharesOwned']
        total_cost = stock_holding['totalCost']
        stock_holding['unrealizedGain'] = stock_holding['marketValue'] - total_cost
        stock_holding['unrealizedGainPercent'] = stock_holding['unrealizedGain'] / total_cost
        stock_holding['dividendIncome'] = stock_data.get('dividendRate', 0) * stock_holding['sharesOwned']
        stock_holding['yieldOnCost'] = stock_holding['dividendIncome'] / total_cost
        holdings['portfolioMarketValue'] += stock_holding['marketValue']
        holdings['portfolioTotalInvestment'] += stock_holding['totalCost']
        holdings['portfolioDividendIncome'] += stock_holding['dividendIncome']
        holdings['portfolioUnrealizedGain'] += stock_holding['unrealizedGain']
        holdings[symbol] = stock_holding

    for position in [v for v in holdings.values() if isinstance(v, dict)]:
        holdings['portfolioPositions'] += 1
        position['portfolioPercent'] = position['marketValue'] / holdings['portfolioMarketValue']
        holdings[position['symbol']] = position

    holdings['portfolioUnrealizedGainPercent'] = holdings['portfolioUnrealizedGain'] / holdings['portfolioTotalInvestment']
    holdings['portfolioYieldOnCost'] = holdings['portfolioDividendIncome'] / holdings['portfolioTotalInvestment']
    holdings['portfolioYield'] = holdings['portfolioDividendIncome'] / holdings['portfolioMarketValue']

    dump_data_to(holdings, HOLDINGS_JSON_PATH)
    with open(get_file_path('holdings', 'pickle'), 'wb') as holdings_pickle:
        pickle.dump(holdings, holdings_pickle)
    return holdings


def map_stock_data(yq_modules_data):
    mapped_yq_data = {}
    for symbol, data in yq_modules_data.items():
        mapped_data = {}
        mapped_data.update(data['price'])
        mapped_data.update(data['summaryDetail'])
        mapped_data.update(data['defaultKeyStatistics'])
        if data['price']['quoteType'] == 'EQUITY':
            mapped_data.update(data['financialData'])
            mapped_data['profile'] = data['assetProfile']
            mapped_data['calendarEvents'] = data['calendarEvents']
            mapped_data['earnings'] = data['earnings']
            mapped_data['earnings'].update(data['earningsHistory'])
            mapped_data['earnings'].update(data['earningsTrend'])
            mapped_data['indexTrend'] = data['indexTrend']
            mapped_data['insiderTransactions'] = data.get('insiderTransactions', {}).get('transactions', {})
            mapped_data['recommendationTrend'] = data['recommendationTrend']['trend']
            mapped_data['secFilings'] = data.get('secFilings', {}).get('filings', {})
            mapped_data['sharePurchaseActivity'] = data['netSharePurchaseActivity']
            mapped_data['shareholders'] = {}
            mapped_data['shareholders']['fundOwnership'] = data.get('fundOwnership', {})
            mapped_data['shareholders']['insiderHolders'] = data.get('insiderHolders', {})
            mapped_data['shareholders']['institutionOwnership'] = data.get('institutionOwnership', {})
            mapped_data['shareholders']['majorHolders'] = data.get('majorHoldersBreakdown', {})
            mapped_data['upgradeDowngradeHistory'] = data['upgradeDowngradeHistory']['history'][:5]
            try:
                mapped_data['fcfPerShare'] = mapped_data['freeCashflow'] / mapped_data['sharesOutstanding']
                mapped_data['fcfYield'] = mapped_data['freeCashflow'] / mapped_data['marketCap']
                if mapped_data['fcfPerShare'] != 0:
                    mapped_data['fcfPayoutRatio'] = mapped_data['dividendRate'] / mapped_data['fcfPerShare']  
                else:
                    mapped_data['fcfPayoutRatio'] = 0
            except KeyError:
                mapped_data['fcfPerShare'] = 0
                mapped_data['fcfYield'] = 0
                mapped_data['fcfPayoutRatio'] = 0
        else:
            mapped_data['profile'] = data['assetProfile']
            mapped_data['profile'].update(data['fundProfile'])
            mapped_data['dividendRate'] = data['summaryDetail']['yield'] * data['price']['regularMarketPrice']
            mapped_data['dividendYield'] = data['summaryDetail']['yield']
            mapped_data['topHoldings'] = data['topHoldings']
            mapped_data['fundPerformance'] = data['fundPerformance']
        mapped_yq_data[symbol] = mapped_data

    for _, v in mapped_yq_data.items():
        clean(v)
    return mapped_yq_data


def yq_stock_data(symbols=None):
    if symbols is None:
        holdings = generate_holdings_data()
        symbols = [k for k, v in holdings.items() if isinstance(v, dict)]
    ticker = Ticker(symbols, asynchronous=True, progress=True)
    modules_data = ticker.get_modules(yq_modules)
    mapped_data = map_stock_data(modules_data)

    path = get_file_path('portfolio', 'json')
    dump_data_to(mapped_data, path)
    with open(get_file_path('portfolio', 'pickle'), 'wb') as portfolio_pickle:
        pickle.dump(mapped_data, portfolio_pickle)
    for symbol in mapped_data:
        path = get_file_path(symbol.lower(), 'json')
        dump_data_to(mapped_data[symbol], path)
    return mapped_data


def yq_dividend_history(symbol, start_date):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)
        return ticker.dividend_history(start=start_date)
    except Exception as e:
        print(symbol, 'failed to fetch dividend history:', e)


def yq_technical_insights(symbol):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)
        return ticker.technical_insights
    except Exception as e:
        print(symbol, 'failed to fetch technical insights:', e)


def yq_corporate_events(symbol):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)
        return ticker.corporate_events
    except Exception as e:
        print(symbol, 'failed to fetch corporate events:', e)


# def yq_recommendations(symbol):
#     try:
#         ticker = Ticker(symbol, asynchronous=True, progress=True)
#         return ticker.recommendations
#     except Exception as e:
#         print(symbol, 'failed to fetch recommendations:', e)
