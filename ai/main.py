# YT Video: https://www.youtube.com/watch?v=PuZY9q-aKLw&t=957s&ab_channel=NeuralNine
# Imports for our Projects


#Version 0.1.5
#Updated duration of each Epoch, time of study for AI,
#WARNING: Time of each Epoch is approximately 30+ seconds, this increases accuracy of prediction
#As time elapses the more information is learned. Will experiment with extending in the future.


from audioop import minmax
from tracemalloc import start
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd


import pandas_datareader as web
import yfinance as yf
yf.pdr_override()
from pandas_datareader import data as pdr


from sklearn.model_selection import PredefinedSplit


import datetime as dt


from sklearn.preprocessing import MinMaxScaler, scale


import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Dropout, LSTM

def predict_future_prices(company):
    # this function needs to be changed to return a "real" AI prediction
    # this code is generating random data, and it is *just an example*
    LENGTH = 10
    time_index = pd.date_range(dt.datetime.now(), periods=LENGTH, freq='D')
    fake_prices = np.random.randint(10, size=10)
    fake_data = pd.DataFrame(fake_prices, index=time_index, columns=['price'])
    return fake_data

def trainAI(company):
    # Get 1 years worth of data for Apple
    start = dt.datetime(1985,1,1)
    end = dt.datetime(2022,1,1)
    daysPassed = (end-start).days
    time_index = pd.date_range(dt.datetime.now(), periods=daysPassed, freq='D')
    
    data = pdr.DataReader(company, start, end)
    # Number of days used to predict a stock, predicting the 120th day (or last day)
    # Fit between 0 and 1
    scaler = MinMaxScaler(feature_range=(0,1))
    now = dt.datetime.now()
     
    # Prepare data
    # Fit between 0 and 1
    scaled_data = scaler.fit_transform(data['Close'].values.reshape(-1,1))


    # Put all 119 dates, except last
    x_train = []
    # Put only last Date, to compare to the prediction
    y_train = []


    # for x in range(60, 5110):
    for x in range(30, len(scaled_data)):


        # All past data 60 DAYS
        # x_train.append(scaled_data[0:60, Column]
        # x_train.append(scaled_data[1:61, Column]
        # x_train.append(scaled_data[2:62, Column]
        # x_train.append(scaled_data[3:63, Column]
        x_train.append(scaled_data[x-30:x, 0])
        #print(x_train)


        # 61st Data, or the results/prediction
        # y_train.append(scaled_data[60, Column])
        # y_train.append(scaled_data[61, Column])
        # y_train.append(scaled_data[62, Column])
        # y_train.append(scaled_data[63, Column])
        y_train.append(scaled_data[x, 0])
        #print(y_train)


        #print(x_train, y_train)


    x_train, y_train = np.array(x_train), np.array(y_train)
    # Reshape to a format
    x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))




    # Construction of the AI model:
    # Where model is the representation of the AI itself
    model = tf.keras.Sequential()


    # Units = Individual Neuraons
    # model.add = Layers, also too many layers can do overfitting
    model.add(LSTM(units=(192), return_sequences=True, input_shape=(x_train.shape[1], 1)))
    model.add(Dropout(0.5))
    model.add(LSTM(units=192, return_sequences=True))
    model.add(Dropout(0.5))
    model.add(LSTM(units=192))
    model.add(Dropout(0.5))


    model.add(Dense(units=1)) #Predicition of the next close


    # Training starts here, runs for X epochs
    # Each epoch is defined by model specifications above, can be modified to increase accuracy
    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(x_train, y_train, epochs=1, batch_size=64)
    print("Training is complete!")
    real_data = pd.DataFrame(model, index=time_index, columns=['price'])
    return real_data

trainAI("AMZN")

    #-----------------------------------------------------------------------------------------------------------


''' Test The Model Accuracy On Testing Data
    # Has to be on unseen data


    # Load test data
    test_start=dt.datetime(2022,1,1)
    test_end=dt.datetime.now()

    test_data = pdr.DataReader(company, test_start, test_end)
    actual_prices = test_data['Close'].values


    total_dataset = pd.concat((data['Close'], test_data['Close']), axis=0)


    model_inputs = total_dataset[len(total_dataset) - len(test_data) - 30:].values
    model_inputs = model_inputs.reshape(-1,1)
    model_inputs = scaler.transform(model_inputs)


    # Make predicition on Test Data
    x_test = []


    for x in range(30,len(model_inputs)):
        x_test.append(model_inputs[x-30:x, 0])


    x_test = np.array(x_test)
    x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))
    predicted_prices = model.predict(x_test)
    predicted_prices = scaler.inverse_transform(predicted_prices)


    # Plot the test prediction
    plt.clf()
    plt.plot(actual_prices, color="black", label=f"Actual {company} Price")
    plt.plot(predicted_prices, color="green", label=f"Predicted {company} Price")
    plt.title(f"{company} Share Price")
    plt.xlabel('Days')
    plt.ylabel(f'{company} Share Price')
    plt.legend()


    plt.show()


    # Predicting next day
    real_data = [model_inputs[len(model_inputs) + 1 - 30:len(model_inputs+1), 0]]
    real_data = np.array(real_data)
    real_data = np.reshape(real_data, (real_data.shape[0], real_data.shape[1], 1))
    prediction = model.predict(real_data)
    prediction = scaler.inverse_transform(prediction)
    print (f"Prediction: {prediction}")



#This is obviously only going to work for my personal directory, simply change the directory to wherever you want to save the generated png
#plt.savefig(f'C:\\Users\\Ali Ruyyashi\\OneDrive\\Desktop\\stock_testing_2\\{currentCompany}\\{currentCompany}_base(start={year},pd={prediction_days},l=3,u={unit},d={drop},e={epoch},bs={batchSize})({company}).png', dpi=500)
'''