import ast
import os
from datetime import datetime, timedelta
from quart import Quart, jsonify, request
from quart_cors import cors
from helpers.funcs import dump_data_to, load_data_from
from yq import DATA_PATH, yq_stock_data, yq_dividend_history, yq_corporate_events
from yq import yq_technical_insights, yq_recommendations, generate_holdings_data

settings_options = {'true': True, 'false': False}

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


@app.route('/fetch/stock/<symbol>')
def fetch_stock_data(symbol):
    symbol_data = yq_stock_data(symbol)
    save_param = request.args.get('save', 'true')
    save = setting_options.get(save_param, True)
    if (save):
        path = get_file_path(symbol.lower(), 'json')
        dump_data_to(symbol_data[symbol], path)
    return jsonify(symbol_data)


@app.route('/fetch/stocks/<symbols>')
def fetch_stocks_data(symbols):
    symbols = symbols.split(':')
    symbols_data = yq_stock_data(symbols)
    save_param = request.args.get('save', 'true')
    save = setting_options.get(save_param, True)
    if (save):
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
    update_param = request.args.get('update', 'true')
    should_update = setting_options.get(update_param, True)
    path = get_file_path(symbol.lower() + '-dividend', 'csv')
    div_his = {}
    data = []
    
    def update_div_his():
    	  start_date = datetime.now() - timedelta(days=365 * years_param)
        data = yq_dividend_history(symbol, start_date)
        data.to_csv(path)

    if should_update:
        update_div_his()
    else:
        try:
            data = load_data_from(path)
        except Exception:
            update_div_his()
    if not isinstance(data, list):
        for line in data.to_csv().split()[1:]:
            _, div_date, div_rate = line.split(',')
            div_his[div_date] = div_rate
    else:
        for line in data[1:]:
            _, div_date, div_rate = line
            div_his[div_date] = div_rate
    return jsonify(div_his)


@app.route('/fetch/events/<symbol>')
def fetch_corporate_events(symbol):
    events = {}
    path = get_file_path(symbol.lower() + '-events', 'json')
    data = yq_corporate_events(symbol).to_json(orient='records', indent=2)
    for event in ast.literal_eval(data)[-20:]:
        events[event['id']] = event
    dump_data_to(events, path)
    return jsonify(events)


@app.route('/fetch/technical-insights/<symbol>')
def fetch_technical_insights(symbol):
	  path = get_file_path(symbol.lower() + '-technical-insights', 'json')
    data = yq_technical_insights(symbol)
    dump_data_to(data[symbol], path)
    return jsonify(data)


@app.route('/fetch/recommendations/<symbol>')
def fetch_recommendations(symbol):
	  path = get_file_path(symbol.lower() + '-recommendations', 'json')
    data = yq_recommendations(symbol)
    dump_data_to(data, path)
    return jsonify(data)


@app.route('/fetch/portfolio/holdings')
def get_portfolio_holdings():
    data = generate_holdings_data()
    return jsonify(data)


@app.route('/fetch/portfolio/symbols')
def get_portfolio_symbols():
    data = generate_holdings_data()
    keys = [k for k, v in data.items() if isinstance(v, dict)]
    return jsonify(keys)


@app.route('/fetch/portfolio/data')
def fetch_portfolio_data():
    update_param = request.args.get('update')
    should_update = setting_options.get(update_param, False)
    portfolio_data_path = get_file_path('portfolio', 'json')
    portfolio_data = {}

    # update by fetching new data
    if should_update:
        portfolio_data = yq_stock_data()
        dump_data_to(portfolio_data, portfolio_data_path)
        for symbol in portfolio_data:
            path = get_file_path(symbol.lower(). 'json')
            dump_data_to(portfolio_data[symbol], path)
        return jsonify(portfolio_data)
    else:
        # no update, load from local
        try:
            portfolio_data = load_data_from(portfolio_data_path)
        except Exception:
            for symbol in list(generate_holdings_data().keys()):
                data = None
                path = get_file_path(symbol.lower(), 'json')
                try:
                    data = load_data_from(path)
                except Exception:
                    # failed to load from local, fetch new data
                    print(f'error loading {symbol} data, fetching new data...')
                    data = yq_stock_data(symbol)[symbol]
                    dump_data_to(data, path)
                if data:
                    portfolio_data.update({symbol: data})
        dump_data_to(portfolio_data, portfolio_data_path)
        return jsonify(portfolio_data)


@app.route('/fetch/portfolio/dividend-history')
def fetch_portfolio_dividend_history():
    response = get_portfolio_symbols()
    symbols_string = response.response.data.decode('utf-8')
    symbols = ast.literal_eval(symbols_string)
    for i in symbols[:1]:
        fetch_dividend_history(i)
    return "<h1>fetching dividend data...</h1>"


if __name__ == '__main__':
    app.run(debug=True)
