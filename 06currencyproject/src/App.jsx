import { useState } from "react";
import { InputBox } from "./components";
import useCurrInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convAmt, setConvAmt] = useState(0);
  const currInfo = useCurrInfo(from);

  const options = Object.keys(currInfo);

  const swap = () => {
    setfrom(to);
    setTo(from);
    setConvAmt(amount);
    setAmount(convAmt);
  };

  const convert = () => {
    setConvAmt(amount * currInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
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
                currOption={options}
                onCurrChange={(currency) => setAmount(amount)}
                selectCurr={from}
                onAmtChange={(amount) => setAmount(amount)}
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
                amount={convAmt}
                currOption={options}
                onCurrChange={(currency) => setTo(currency)}
                selectCurr={from}
                amtDisabled
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
