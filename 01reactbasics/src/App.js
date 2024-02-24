/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";

const currencies = ["inr", "euro", "usd"];

const currencyValue = {
  inr: {
    inr: 1,
    usd: 0.012,
    euro: 0.011,
  },
  usd: {
    inr: 83.02,
    usd: 1,
    euro: 0.92,
  },
  euro: {
    inr: 90.61,
    usd: 1.09,
    euro: 1,
  },
};

const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);

  function handleConversion() {
    const inputAmount = parseFloat(fromVal);
    if (!isNaN(inputAmount)) {
      const quantityTo = inputAmount * currencyValue[from][to];
      setToVal(quantityTo.toFixed(4));
    } else {
      setToVal("Invalid Input");
    }
  }

  useEffect(() => {
    handleConversion();
  }, [handleConversion]);

  return (
    <>
      <h1 className='heading'>Currency Converter</h1>
      <div className='container'>
        <div className='from'>
          <label htmlFor=''>From: </label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
          <input
            type='number'
            value={fromVal}
            onChange={(e) => setFromVal(e.target.value)}
          />
        </div>
        <div className='to'>
          <label htmlFor=''>To: </label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
          <input
            type='number'
            value={toVal}
            onChange={(e) => setToVal(e.target.value)}
          />
        </div>
        {/* <button onClick={handleConversion}>Covert</button> */}
      </div>
    </>
  );
};

export default App;
