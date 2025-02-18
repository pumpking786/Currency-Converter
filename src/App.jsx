import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0); //variable
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `  
        url('https://play-lh.googleusercontent.com/9XE2kDMVedW0Mkt5CIMnkyCp3TUkEfWf9ysgI1HDLIMVS6JPcDm-4vlAWoua3KEnSMnY'), 
        url('https://play-lh.googleusercontent.com/Bddip99b3uI3X3i2Z0M7NxBgcZ0q6jyjVHd7Q1zHEzvs_1jlVuNc_57dl-QsF3S-_Nw'), 
        url('https://cf-simple-s3-origin-monisnap-v2-assets-dev-424535010097.s3.eu-west-1.amazonaws.com/currencies/CAD-NPR.jpg'), 
        url('https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I='),
        url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXl8ZW58MHx8MHx8fDA%3D')
      `,
        backgroundPosition:
          "30px -10px, calc(100% - 30px) 30px, 30px calc(100% - 30px), calc(100% - 30px) calc(100% - 30px), center",
        backgroundSize:
          "400px 400px, 400px 300px, 350px 300px, 400px 300px, cover",
      }}
    >
      <style>
        {`
      /* Remove background image on screens smaller than 640px */
      @media (max-width: 850px) {
        .bg-cover {
          background-image: none !important;
          background-color: grey;
        }
      }
    `}
      </style>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
