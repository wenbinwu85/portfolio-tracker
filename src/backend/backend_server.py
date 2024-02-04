
import ast
import os
from datetime import datetime, timedelta
from quart import Quart, jsonify, request
from helpers.funcs import dump_data_to, load_data_from
from yq import yq_stock_data, yq_dividend_history, yq_corporate_events, DATA_PATH
from yq import yq_technical_insights, yq_recommendations, generate_holdings_data


app = Quart(__name__)

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
def fetch_stock(symbol):
    data = yq_stock_data(symbol)
    save_param = request.args.get('save')
    save = setting_options.get(save_param, save_to_local)
    print('save to local:', save_to_local)
    print('save param:', save_param)
    print('save or not:', save)
    if (save):
        path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
        dump_data_to(data[symbol], path)
    return jsonify(data)


@app.route('/fetch/stocks/<symbols>')
def fetch_stocks(symbols):
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


@app.route('/fetch/portfolio/data')
def fetch_portfolio():
    symbols = list(generate_holdings_data().keys())
    update_parm = request.args.get('update')
    should_update = setting_options.get(update_parm, False)
    print('should update:', should_update)
    portfolioData = {}

    if should_update:
        portfolioData = yq_stock_data(symbols)
        path = os.path.join(DATA_PATH, 'portfolio.json')
        dump_data_to(portfolioData, path)
        return jsonify(portfolioData)
    
    for symbol in symbols:
        data = None
        path = os.path.join(DATA_PATH, f'{symbol.lower()}.json')
        try:
            data = load_data_from(path)
        except Exception:
            print(f'error loading {symbol} data, fetching new data...')
            data = yq_stock_data(symbol)[symbol]
            dump_data_to(data, path)
        if data:
            portfolioData.update({symbol: data})
    return jsonify(portfolioData)


@app.route('/fetch/dividend-history/<symbol>/<years>')
def fetch_dividend(symbol, years):
    start_date = datetime.now() - timedelta(days=365 * int(years))
    data = yq_dividend_history(symbol, start_date).to_csv()
    div_his = {}
    for line in data.split()[1:]:
        _, div_date, div_rate = line.split(',')
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


@app.route('/fetch/holdings')
def fetch_holdings():
    data = generate_holdings_data()
    return jsonify(data)


@app.route('/fetch/portfolio/symbols')
def fetch_portfolio_symbols():
    data = generate_holdings_data()
    return jsonify(list(data.keys()))


if __name__ == '__main__':
    app.run(debug=True)
