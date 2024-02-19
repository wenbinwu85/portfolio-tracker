import ast
import os
from datetime import datetime, timedelta
from quart import Quart, jsonify, request
from quart_cors import cors
from helpers.funcs import dump_data_to, load_data_from
from yq import DATA_PATH, yq_stock_data, yq_dividend_history, yq_corporate_events
from yq import yq_technical_insights, yq_recommendations, generate_holdings_data


app = Quart(__name__)
app = cors(app)

setting_options = {'true': True, 'false': False}
save_to_local = False


@app.route('/')
def index():
    return '<h1>BenStockTracker2 Backend Homepage</h1>'


@app.route('/test')
def test_get():
    return '<h1>testing testing testing 123</h1>'


@app.route('/backend/settings')
def set_save_settings():
    save_param = request.args.get('save')
    if save_param and save_param.lower() in setting_options.keys():
        global save_to_local
        save_to_local = setting_options[save_param]
        return f'<h1>settings -> save -> {save_to_local}</h1>'
    return '<h1>No valid setting value found!<h1>'


@app.route('/fetch/stock/<symbol>')
def fetch_stock_data(symbol):
    symbol_data = yq_stock_data(symbol)
    save_param = request.args.get('save')
    save = setting_options.get(save_param, save_to_local)
    print('save to local:', save_to_local)
    print('save param:', save_param)
    print('save or not:', save)
    if (save):
        path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
        dump_data_to(symbol_data[symbol], path)
    return jsonify(symbol_data)


@app.route('/fetch/stocks/<symbols>')
def fetch_stocks_data(symbols):
    symbols = symbols.split(':')
    symbols_data = yq_stock_data(symbols)
    save_param = request.args.get('save')
    save = setting_options.get(save_param, save_to_local)
    print('save to local:', save_to_local)
    print('save param:', save_param)
    print('save or not:', save)
    if (save):
        for symbol in symbols_data:
            path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
            dump_data_to(symbols_data[symbol], path)
    return jsonify(symbols_data)


@app.route('/fetch/dividend-history/<symbol>')
def fetch_dividend_history(symbol):
    years_param = request.args.get('years') or 10
    print('args:', symbol, request.args)
    try:
        years_param = int(years_param)
    except ValueError:
        years_param = 10
    update_param = request.args.get('update')
    should_update = setting_options.get(update_param, True)
    path = os.path.join(DATA_PATH, f'{symbol.lower()}-dividend.csv')
    div_his = {}
    data = []
    if should_update:
        start_date = datetime.now() - timedelta(days=365 * years_param)
        data = yq_dividend_history(symbol, start_date)
        data.to_csv(path)
    else:
        try:
            data = load_data_from(path)
        except Exception:
            start_date = datetime.now() - timedelta(days=365 * years_param)
            data = yq_dividend_history(symbol, start_date).to_csv(path)
            data.to_csv(path)
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
    data = yq_corporate_events(symbol).to_json(orient='records', indent=2)
    events = {}
    for event in ast.literal_eval(data)[-10:]:
        events[event['id']] = event
    return jsonify(events)


@app.route('/fetch/technical-insights/<symbol>')
def fetch_technical_insights(symbol):
    data = yq_technical_insights(symbol)
    return jsonify(data)


@app.route('/fetch/recommendations/<symbol>')
def fetch_recommendations(symbol):
    data = yq_recommendations(symbol)
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
    portfolio_data_path = os.path.join(DATA_PATH, 'portfolio.json')
    portfolio_data = {}
    print('should update:', should_update)

    # update by fetching new data
    if should_update:
        portfolio_data = yq_stock_data()
        dump_data_to(portfolio_data, portfolio_data_path)
        for symbol in portfolio_data:
            if symbol.startswith('portfolio'):
                continue
            path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
            dump_data_to(portfolio_data[symbol], path)
    else:
        # no update, load from local
        try:
            portfolio_data = load_data_from(portfolio_data_path)
        except Exception:
            for symbol in list(generate_holdings_data().keys()):
                data = None
                path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
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
    for i in symbols:
        fetch_dividend_history(i)
    return "<h1>fetching dividend data...</h1>"


if __name__ == '__main__':
    app.run(debug=True)
