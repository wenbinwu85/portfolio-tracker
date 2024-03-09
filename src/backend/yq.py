import os
import queue
from concurrent.futures import ThreadPoolExecutor
from multiprocessing import Pool, Process, cpu_count
from yahooquery import Ticker
from helpers.funcs import load_data_from, dump_data_to

BACKEND_PATH = os.path.abspath(os.path.dirname(__file__))
DATA_PATH = os.path.join(BACKEND_PATH, "data")
STOCK_DATA_PATH = os.path.join(DATA_PATH, "stock-data")
HOLDINGS_DATA_PATH = os.path.join(DATA_PATH, "holdings.csv")

total_cpu = cpu_count()
parallel_method = "thread"

yq_modules = [
    "assetProfile",  # Information related to the company's location, operations, and officers.
    "calendarEvents",  # Earnings and Revenue expectations for upcoming earnings date, ex-dividend date, dividend date
    "defaultKeyStatistics",  # KPIs for given symbol(s) (PE, enterprise value, EPS, EBITA, and more
    "earnings",  # Historical earnings data
    "earningsHistory",  # Data related to historical earnings (actual vs. estimate)
    "earningsTrend",  # Historical trend data for earnings and revenue estimations
    "financialData",  # Financial KPIs
    "fundOwnership",  # Top 10 owners of a given symbol(s)
    "fundPerformance",  # Historical return data for a given symbol(s) and symbol(s) specific category
    "fundProfile",  # Summary level information for a given symbol(s)
    "indexTrend",  # Trend data related given symbol(s) index, specificially PE and PEG ratios
    "insiderHolders",  # Data related to stock holdings of a given symbol(s) insiders
    "insiderTransactions",  # Transactions by insiders
    "institutionOwnership",  # Top 10 owners of a given symbol(s)
    "majorHoldersBreakdown",  # Data showing breakdown of owners of given symbol(s), insiders, institutions, etc.
    "netSharePurchaseActivity",
    "price",  # Detailed pricing data for given symbol(s), exchange, quote type, currency, market cap, pre / post market data, etc.
    "recommendationTrend",  # Data related to historical recommendations (buy, hold, sell)
    "secFilings",
    "summaryDetail",  # Contains information available via the Summary tab
    "topHoldings"
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

        funcs = {"thread": multithread, "process": multiprocess, "pool": multipool}
        return funcs[method]

    return wrapper


def parallel_run(func, *args, **kwargs):
    p_func = parallelize(parallel_method)(func)
    p_func(*args, **kwargs)


def round_string_value(value, digit=2):
    return round(float(value), digit)


def clean(data):
    shit_pile = [
        "algorithm",
        "ask",
        "askSize",
        "bid",
        "bidSize",
        "category",
        "coinMarketCapLink",
        "cryptoTradeable",
        "currency",
        "currencySymbol",
        "esgPopulated",
        "exchangeDataDelayedBy",
        "exchangeTimezoneName",
        "exchangeTimezoneShortName",
        "fromCurrency",
        "fundFamily",
        "gmtOffSetMilliseconds",
        "language",
        "lastMarket",
        "lastSplitDate",
        "lastSplitFactor",
        "legalType",
        "market",
        "marketState",
        "maxAge",
        "messageBoardId",
        "postMarketSource",
        "postMarketTime",
        "preMarketSource",
        "priceHint",
        "quoteSourceName",
        "region",
        "regularMarketSource",
        "regularMarketTime",
        "sourceInterval",
        "toCurrency",
        "tradeable",
        "triggerable",
        "underlyingSymbol",
    ]
    for shit in shit_pile:
        try:
            del data[shit]
        except KeyError:
            continue


def generate_holdings_data():
    holdings_json_path = os.path.join(DATA_PATH, "holdings.json")
    holdings = {}
    holdings.update({"portfolioPositions": 0})
    holdings.update({"portfolioMarketValue": 0})
    holdings.update({"portfolioTotalInvestment": 0})
    holdings.update({"portfolioDividendIncome": 0})
    holdings.update({"portfolioUnrealizedGain": 0})
    holdings.update({"portfolioUnrealizedGainPercent": 0})

    for symbol, shares, cost_avg, _ in list(load_data_from(HOLDINGS_DATA_PATH)):
        holding_data = holdings.get(symbol, {})
        stock_data_path = os.path.join(DATA_PATH, f"{symbol.lower()}.json")
        try:
            stock_data = load_data_from(stock_data_path)
        except FileNotFoundError:
            stock_data = yq_stock_data(symbol)
            dump_data_to(stock_data, stock_data_path)
        shares = float(shares)
        cost_avg = float(cost_avg)
        holding_data["sharesOwned"] = shares
        holding_data["costAverage"] = cost_avg
        holding_data["totalCost"] = round(cost_avg * shares, 4)
        holding_data["symbol"] = symbol
        holding_data["marketPrice"] = stock_data.get("regularMarketPrice", 0)
        holding_data["marketValue"] = (
            holding_data["marketPrice"] * holding_data["sharesOwned"]
        )
        total_cost = holding_data["totalCost"]
        holding_data["unrealizedGain"] = holding_data["marketValue"] - total_cost
        holding_data["unrealizedGainPercent"] = (
            holding_data["unrealizedGain"] / total_cost
        )
        holding_data["dividendIncome"] = (
            stock_data.get("dividendRate", 0) * holding_data["sharesOwned"]
        )
        holding_data["yieldOnCost"] = holding_data["dividendIncome"] / total_cost
        holdings["portfolioMarketValue"] += holding_data["marketValue"]
        holdings["portfolioTotalInvestment"] += holding_data["totalCost"]
        holdings["portfolioDividendIncome"] += holding_data["dividendIncome"]
        holdings["portfolioUnrealizedGain"] += holding_data["unrealizedGain"]
        holdings[symbol] = holding_data

    for position in [v for v in holdings.values() if isinstance(v, dict)]:
        position["portfolioPercent"] = (
            position["marketValue"] / holdings["portfolioMarketValue"]
        )
        holdings[position["symbol"]] = position
        holdings["portfolioPositions"] += 1
        holdings["portfolioUnrealizedGainPercent"] = (
            holdings["portfolioUnrealizedGain"] / holdings["portfolioTotalInvestment"]
        )
        holdings["portfolioYieldOnCost"] = (
            holdings["portfolioDividendIncome"] / holdings["portfolioTotalInvestment"]
        )
        holdings["portfolioYield"] = (
            holdings["portfolioDividendIncome"] / holdings["portfolioMarketValue"]
        )

    dump_data_to(holdings, holdings_json_path)
    return holdings


def map_stock_data(yqdata):
    mapped_data = {}
    for symbol, data in yqdata.items():
        mapped_stock_data = {}
        mapped_stock_data["profile"] = data["assetProfile"]
        mapped_stock_data.update(data["price"])
        mapped_stock_data.update(data["summaryDetail"])
        mapped_stock_data.update(data["defaultKeyStatistics"])

        if data["price"]["quoteType"] == "EQUITY":
            mapped_stock_data.update(data["financialData"])
            mapped_stock_data["calendarEvents"] = data["calendarEvents"]
            mapped_stock_data["earnings"] = data["earnings"]
            mapped_stock_data["earnings"].update(data["earningsHistory"])
            mapped_stock_data["earnings"].update(data["earningsTrend"])
            mapped_stock_data["indexTrend"] = data["indexTrend"]
            mapped_stock_data["insiderTransactions"] = data.get("insiderTransactions", {}).get('transactions', {})
            mapped_stock_data["recommendationTrend"] = data["recommendationTrend"]['trend']
            mapped_stock_data["secFilings"] = data.get("secFilings", {}).get('filings', {})
            mapped_stock_data["sharePurchaseActivity"] = data["netSharePurchaseActivity"]
            mapped_stock_data["shareholders"] = {}
            mapped_stock_data["shareholders"]["fundOwnership"] = data.get("fundOwnership", {})
            mapped_stock_data["shareholders"]["insiderHolders"] = data.get("insiderHolders", {})
            mapped_stock_data["shareholders"]["institutionOwnership"] = data.get("institutionOwnership", {})
            mapped_stock_data["shareholders"]["majorHolders"] = data.get("majorHoldersBreakdown", {})
            try:
                mapped_stock_data["fcfPerShare"] = (mapped_stock_data["freeCashflow"] / mapped_stock_data["sharesOutstanding"])
                mapped_stock_data["fcfYield"] = (mapped_stock_data["freeCashflow"] / mapped_stock_data["marketCap"])
                if mapped_stock_data["fcfPerShare"] != 0:
                    mapped_stock_data["fcfPayoutRatio"] = mapped_stock_data["dividendRate"] / mapped_stock_data["fcfPerShare"]  
                else:
                    mapped_stock_data["fcfPayoutRatio"] = 0
            except KeyError:
                mapped_stock_data["fcfPerShare"] = 0
                mapped_stock_data["fcfYield"] = 0
                mapped_stock_data["fcfPayoutRatio"] = 0
        else:
            mapped_stock_data["dividendRate"] = data["summaryDetail"]["yield"] * data["price"]["regularMarketPrice"]
            mapped_stock_data["dividendYield"] = data["summaryDetail"]["yield"]
            mapped_stock_data["topHoldings"] = data["topHoldings"]
            mapped_stock_data["profile"].update(data["fundProfile"])
            mapped_stock_data["profile"].update(data["assetProfile"])
            mapped_stock_data["fundPerformance"] = data["fundPerformance"]
        mapped_data[symbol] = mapped_stock_data

    for _, v in mapped_data.items():
        clean(v)
    return mapped_data


def yq_stock_data(symbols=None):
    if symbols is None:
        holdings = generate_holdings_data()
        symbols = [k for k, v in holdings.items() if isinstance(v, dict)]
    ticker = Ticker(symbols, asynchronous=True, progress=True)
    ticker_data = ticker.get_modules(yq_modules)
    mapped_data = map_stock_data(ticker_data)
    return mapped_data


def yq_dividend_history(symbol, start_date):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.dividend_history(start=start_date)


def yq_corporate_events(symbol):
    try:
        ticker = Ticker(symbol, asynchronous=True, progress=True)
        return ticker.corporate_events
    except Exception as e:
        print(symbol, "failed to fetch corporate events:", e)


def yq_technical_insights(symbol):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.technical_insights


def yq_recommendations(symbol):
    ticker = Ticker(symbol, asynchronous=True, progress=True)
    return ticker.recommendations
