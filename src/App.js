import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  const handleClick = (e) => {
    setNumber(number.concat(e.target.value));
  };

  const handleSlice = () => {
    setNumber(number.slice(0, -1));
  };

  const handleClear = () => {
    setNumber("");
  };
  const handleAnswer = () => {
    try {
      // Use eval to calculate the result of the mathematical expression
      const result = eval(number);
      // Set the result as the new value
      setNumber(result.toString());
    } catch (error) {
      // Handle any errors that may occur during evaluation
      setNumber("Error");
    }
  };

  return (
    <div className="container  ">
      <div className="h-20 bg-blue-900">
        <input
          type="text"
          placeholder="0"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full h-full border rounded-2xl border-white text-black bg-gray-300 text-4xl text-right pr-5 "
        />
      </div>
      <div className="keypad grid grid-cols-5 bg-black gap-2 mt- mx-1">
        <button
          value="7"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          7
        </button>
        <button
          value="8"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black  justify-center transition duration-200 "
          onClick={handleClick}
        >
          8
        </button>
        <button
          value="9"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-blue-500 rounded-2xl text-white justify-center transition duration-200 "
          onClick={handleSlice}
        >
          DEL
        </button>
        <button
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-blue-500 rounded-2xl text-white justify-center transition duration-200 "
          onClick={handleClear}
        >
          AC
        </button>
        <button
          value="4"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          4
        </button>
        <button
          value="5"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          5
        </button>
        <button
          value="6"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          6
        </button>
        <button
          value="*"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          *
        </button>
        <button
          value="/"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          /
        </button>
        <button
          value="1"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          1
        </button>
        <button
          value="2"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          2
        </button>
        <button
          value="3"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          3
        </button>
        <button
          value="+"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          +
        </button>
        <button
          value="-"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          -
        </button>
        <button
          value="0"
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          0
        </button>
        <button
          value="."
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="md:w-20 h-20 sm:w-24 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          *10^x
        </button>
        <button
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleClick}
        >
          Ans
        </button>
        <button
          className="md:w-20 h-20 sm:w-16 sm:h-16 font-bold text-3xl items-center shadow-2xl flex bg-slate-200 rounded-2xl text-black justify-center transition duration-200 "
          onClick={handleAnswer}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
