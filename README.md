
<div align="center">
  <h1>Visit Now: <a href="https://www.almightycandle.com/">almightycandle.com</a></h1>
  <h2>Stock Prediction Website. (AWS)</h2> 
</div>


## Overview
This project offers a cutting-edge stock predicting website leveraging the power of:
- **Next.js** for the front-end design
- **Flask** and **TensorFlow** for the back-end computations [(Backend Repository Here)](https://github.com/dimitri-sky/AlCaFlask)

It provides a sleek interface for users to input stock symbols and receive real-time predictions for the next three days, displayed through elegant charts and concise figures.

## Features
- **Real-time Stock Prediction:** Utilizes a pre-trained LSTM model to predict stock prices for the next three days.
- **User-friendly Interface:** Easy input of stock symbols like AAPL, AMZN, etc., to fetch and visualize predictions.
- **Historical Data Visualization:** Charts historical stock prices alongside predictions using recharts library.
- **Support for Multiple Stocks:** Trained on a diverse set of stocks including technology, healthcare, entertainment, and more.

## Technologies Used
- **Front End:** Next.js, React, Theme-UI
- **Back End:** Flask, TensorFlow [(Backend Repository Here)](https://github.com/dimitri-sky/AlCaFlask)
- **Data Source:** Yahoo Finance API for fetching historical data
- **Charts:** Recharts library for dynamic charting

## How to Run
1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/cod-cs-club/almightycandle.git
   ```
   
3. **Navigate to the Project Directory:**
   
   ```bash
   cd almightycandle
   ```
   
5. **Install Dependencies:**
   
   ```bash
   npm install
   ```
   
7. **Start the Development Server:**
   
   ```bash
   npm run dev
   ```

## API Endpoints
- `/predict`: GET request to obtain prediction for the given stock symbol.
- `/test`: GET request to test if the server is running properly.

## Model Training
The LSTM model is trained on a wide variety of stocks using historical data. The training code is included in `train_model.py`.

## Contributions
Feel free to fork this repository and contribute by submitting a pull request. Please adhere to the existing coding style, and ensure that your code is properly documented and tested.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
Special thanks to the libraries and data sources that made this project possible.
