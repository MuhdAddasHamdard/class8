import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  const plus = () => {
    setCounter((count) => count + 1);
    setError(null);
  };
  const Minus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setError("the number cant be less than zero");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {error && (
          <p
            className="bg-red-400 p-5
           text-white text-center rounded"
          >
            {error}
          </p>
        )}
        <p>Counter</p>
        <hr />
        <h1>{counter}</h1>
        <div className="flex mt-6 gap-8">
          <button
            onClick={Minus}
            className="flex bg-red-500 text-white p-3 rounded justify-center items-center gap-1 "
          >
            <FaMinus /> Minus
          </button>
          <button
            onClick={plus}
            className="flex bg-blue-500 text-white p-3 rounded justify-center items-center gap-1 "
          >
            <FaPlus /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
