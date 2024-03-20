import ast
import os
from datetime import datetime, timedelta
from quart import Quart, jsonify, request
from quart_cors import cors
from helpers.funcs import dump_data_to
from yq import DATA_PATH
from yq import generate_holdings_data, yq_stock_data, yq_dividend_history
from yq import yq_technical_insights, yq_corporate_events

setting_options = {'true': True, 'false': False}

app = Quart(__name__)
app = cors(app)


def get_file_path(file_name, ext='json'):
    return os.path.join(DATA_PATH, f'{file_name}.{ext}')


@app.route('/')
def index():
    return '<h1>Portfolio Tracker Backend Running</h1>'


@app.route('/test')
def test_get():
    return '<h1>Testing 123</h1>'


# fetch single stock data
@app.route('/fetch/stock/<symbol>')
def fetch_stock_data(symbol):
    path = get_file_path(symbol, 'json')
    symbol_data = yq_stock_data(symbol)
    dump_data_to(symbol_data[symbol], path)
    return jsonify(symbol_data)


# fetch multiple stocks data
@app.route('/fetch/stocks/<symbols>')
def fetch_stocks_data(symbols):
    symbols = symbols.split(':')
    symbols_data = yq_stock_data(symbols)
    for symbol in symbols_data:
        path = get_file_path(symbol.lower(), 'json')
        dump_data_to(symbols_data[symbol], path)
    return jsonify(symbols_data)


@app.route('/fetch/dividend-history/<symbol>')
def fetch_dividend_history(symbol):
    try:
        years_param = int(request.args.get('years', 10))
    except ValueError:
        years_param = 10
    path = get_file_path(symbol.lower() + '-dividend', 'json')
    div_his = {}
    data = []
    start_date = datetime.now() - timedelta(days=365 * years_param)
    data = yq_dividend_history(symbol, start_date)
    for line in data.to_csv().split()[1:]:
        _, div_date, div_rate = line.split(',')
        div_his[div_date] = div_rate
    dump_data_to(div_his, path)
    return jsonify(div_his)


@app.route('/fetch/technical-insights/<symbol>')
def fetch_technical_insights(symbol):
    path = get_file_path(symbol.lower() + '-technical-insights', 'json')
    data = yq_technical_insights(symbol)[symbol]
    dump_data_to(data, path)
    return jsonify(data)


@app.route('/fetch/events/<symbol>')
def fetch_corporate_events(symbol):
    path = get_file_path(symbol.lower() + '-events', 'json')
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
    dump_data_to(events, path)
    return jsonify(events)


@app.route('/fetch/portfolio/holdings')
def get_portfolio_holdings():
    return jsonify(generate_holdings_data())


@app.route('/fetch/portfolio/symbols')
def get_portfolio_symbols():
    data = generate_holdings_data()
    keys = [k for k, v in data.items() if isinstance(v, dict)]
    return jsonify(keys)


@app.route('/fetch/portfolio/data')
def fetch_portfolio_data():
    return jsonify(yq_stock_data())


@app.route('/fetch/portfolio/technical-insights')
def fetch_portfolio_technical_insights():
    response = get_portfolio_symbols()
    symbols_string = response.response.data.decode('utf-8')
    symbols = ast.literal_eval(symbols_string)
    for symbol in symbols:
        fetch_technical_insights(symbol)
    return "<h1>fetching technical insights...</h1>"


@app.route('/fetch/portfolio/dividend-history')
def fetch_portfolio_dividend_history():
    response = get_portfolio_symbols()
    symbols_string = response.response.data.decode('utf-8')
    symbols = ast.literal_eval(symbols_string)
    for symbol in symbols:
        fetch_dividend_history(symbol)
    return "<h1>fetching dividend history...</h1>"


if __name__ == '__main__':
    app.run(debug=True)
