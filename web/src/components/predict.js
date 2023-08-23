/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { Flex, Button, Input } from "theme-ui";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

export default function StockPrediction() {
  const LOOKUP_STEPS = [1, 2, 3];
  const inputEl = useRef(null);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [historicalData, setHistoricalData] = useState([]);
  const [predictionData, setPredictionData] = useState(null);

  const getPrediction = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch(
        `http://localhost:5000/predict?symbol=${inputEl.current.value}`
      );
      const data = await res.json();

      if (res.status === 200) {
        const newData = [...data.historical].map((item) => {
          const correctedDate = new Date(item.date);
          correctedDate.setDate(correctedDate.getDate() + 1);
          return {
            ...item,
            date: correctedDate,
          };
        });

        LOOKUP_STEPS.forEach((step, index) => {
          const lastHistoricalDate = new Date(
            data.historical[data.historical.length - 1].date
          );
          lastHistoricalDate.setDate(lastHistoricalDate.getDate() + 1);
          const predictionDate = new Date(lastHistoricalDate);
          predictionDate.setDate(lastHistoricalDate.getDate() + step);
          const newItem = {
            date: predictionDate,
            prediction: data.prediction[index],
          };
          newData.push(newItem);
        });

        setHistoricalData(newData);
        setPredictionData(data.prediction);

        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      } else {
        throw new Error("Failed to fetch prediction");
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Error fetching prediction: " + error.message,
        },
      });
    }
  };

  return (
    <div className="subscribe__area">
      <form onSubmit={getPrediction}>
        <Flex sx={styles.subscribeForm}>
          <label htmlFor="stock-symbol" sx={{ variant: "styles.srOnly" }}>
            Stock Symbol
          </label>
          <Input
            ref={inputEl}
            id="stock-symbol"
            name="stock-symbol"
            type="text"
            placeholder="Enter Stock Symbol"
          />

          <div>
            {status.info && status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {status.info && !status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </div>
          <Button
            type="submit"
            disabled={status.submitting}
            variant="subscribeButton"
          >
            {!status.submitting
              ? !status.submitted
                ? "Predict"
                : "Submitted"
              : "Submitting..."}
          </Button>
        </Flex>
      </form>
      <div>
        <LineChart width={500} height={400} data={historicalData}>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#1a75ff"
            name="Historical Price"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="prediction"
            stroke="#ff0000"
            name="Predicted Price"
            // Smaller dots
            dot={{ r: 1 }}
          />

          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
            minTickGap={20}
          />
          <YAxis
            tickFormatter={(tick) => `$${tick}`}
            domain={["auto", "auto"]}
          />
          <Tooltip
            itemStyle={{ color: "#333" }}
            labelStyle={{ color: "blue" }}
            contentStyle={{ border: "1px solid #f5f5f5" }}
            formatter={(value, name) => [`${value.toFixed(2)} USD`, name]}
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
          />
          <Legend verticalAlign="top" height={36} />
          <Brush
            dataKey="date"
            height={30}
            stroke="#1a75ff"
            travellerWidth={15}
            startIndex={historicalData.length - 30}
            endIndex={historicalData.length - 1}
          />
        </LineChart>

        {predictionData && (
          <div style={{ textAlign: "center" }}>
            <span style={{ color: "red" }}> Next 3 Days Predicted Prices:</span>
            {predictionData.map((price, index) => (
              <span key={index}>{` $${Number(price).toFixed(2)}.`}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  subscribeForm: {
    width: "100%",
    mx: "auto",
    '[type="email"]': {
      border: "1px solid #D4DAE2",
      borderRadius: "7px",
      fontFamily: "body",
      fontSize: [1, 2, 3],
      fontWeight: "body",
      color: "heading",
      py: 1,
      px: [3, 5],
      backgroundColor: "transparent",
      transition: "all 0.25s",
      height: ["50px", "60px"],
      "&:focus": {
        boxShadow: "0 0 0 0px",
        borderColor: "primary",
      },
      "::placeholder": {
        color: "#9A9CB2",
        opacity: 1,
      },
    },
  },
};