import yfinance as yf
import pandas as pd

data = yf.download("AAPL", start="2017-01-01", end="2017-04-30")
data = data.filter(items=['Date', 'Close'])

print(data)

