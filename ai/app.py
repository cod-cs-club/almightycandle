# Flask Back End
# use "flask run"

from flask_cors import CORS
from flask import Flask, request
from main import trainAI

app = Flask(__name__)
CORS(app)

@app.route("/")
def predict_future_price():
    symbol = request.args.get('symbol')
    if not symbol:
        return {'error': 'symbol parameter was missing', 'symbol': symbol, 'to add symbol add': '?symbol=AAPL'}

    # price_prediction is a Dataframe object, this converts it to a normal python dict
    # http://localhost:5000/predict-future-price?symbol=AAPL
    #predict_future_prices
    #trainAI
    price_prediction = trainAI(symbol) \
                .reset_index() \
                .rename(columns={'index': 'time'}) \
                .to_dict('records')

    return {
        'prices': price_prediction
    }