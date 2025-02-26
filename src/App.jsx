import React, { useState } from "react";
import Input from "../components/InputBox";
import useCurrencyInfo from "../hooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 1));
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 flex flex-col items-center pt-10 px-4">

      <div className="text-white text-3xl font-semibold mb-6">Currency Converter</div>


      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >

          <div className="flex items-center justify-between bg-gray-100 px-6 py-4 rounded-xl shadow">
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(value) => setAmount(value)}
              className="w-full"
            />


            <button
              type="button"
              className="mx-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
              onClick={swap}
            >
              ⇄
            </button>

            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              className="w-full"
            />
          </div>


          <div className="w-full">
            <label className="text-gray-600 block mb-2">Converted Amount</label>
            <input
              type="text"
              value={convertedAmount}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-200 text-gray-800"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
