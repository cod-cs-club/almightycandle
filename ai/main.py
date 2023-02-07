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


def main(company, year,prediction_days,unit,drop,epoch,batchSize,compareTo):
    # Get 1 years worth of data for Apple
    start = dt.datetime(year,1,1)
    end = dt.datetime(2022,1,1)
    # Total 5110
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
    for x in range(prediction_days, len(scaled_data)):


        # All past data 60 DAYS
        # x_train.append(scaled_data[0:60, Column]
        # x_train.append(scaled_data[1:61, Column]
        # x_train.append(scaled_data[2:62, Column]
        # x_train.append(scaled_data[3:63, Column]
        x_train.append(scaled_data[x-prediction_days:x, 0])
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
    model.add(LSTM(units=(unit), return_sequences=True, input_shape=(x_train.shape[1], 1)))
    model.add(Dropout(drop))
    model.add(LSTM(units=unit, return_sequences=True))
    model.add(Dropout(drop))
    model.add(LSTM(units=unit))
    model.add(Dropout(drop))


    model.add(Dense(units=1)) #Predicition of the next close


    # Training starts here, runs for X epochs
    # Each epoch is defined by model specifications above, can be modified to increase accuracy
    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(x_train, y_train, epochs=epoch, batch_size=batchSize)
    print("Training is complete!")


    ''' Test The Model Accuracy On Testing Data'''
    # Has to be on unseen data


    # Load test data
    test_start=dt.datetime(2022,1,1)
    test_end=dt.datetime.now()


    currentCompany = company
    company = compareTo


    test_data = pdr.DataReader(company, test_start, test_end)
    actual_prices = test_data['Close'].values


    total_dataset = pd.concat((data['Close'], test_data['Close']), axis=0)


    model_inputs = total_dataset[len(total_dataset) - len(test_data) - prediction_days:].values
    model_inputs = model_inputs.reshape(-1,1)
    model_inputs = scaler.transform(model_inputs)


    # Make predicition on Test Data
    x_test = []


    for x in range(prediction_days,len(model_inputs)):
        x_test.append(model_inputs[x-prediction_days:x, 0])


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
    real_data = [model_inputs[len(model_inputs) + 1 - prediction_days:len(model_inputs+1), 0]]
    real_data = np.array(real_data)
    real_data = np.reshape(real_data, (real_data.shape[0], real_data.shape[1], 1))
    prediction = model.predict(real_data)
    prediction = scaler.inverse_transform(prediction)
    print (f"Prediction: {prediction}")


#This is obviously only going to work for my personal directory, simply change the directory to wherever you want to save the generated png
#plt.savefig(f'C:\\Users\\Ali Ruyyashi\\OneDrive\\Desktop\\stock_testing_2\\{currentCompany}\\{currentCompany}_base(start={year},pd={prediction_days},l=3,u={unit},d={drop},e={epoch},bs={batchSize})({company}).png', dpi=500)

if __name__ == '__main__':
    main(company="PFE",year=1985,prediction_days=30,unit=192,drop=0.5,epoch=65,batchSize=64,compareTo="AMZN")