"use client";
import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);
  const decrement = () => {
    const finalValue = count - 2;
    setCount(finalValue > 0 ? finalValue : 0);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>State</h1>
      <p>Counter Value after decrement {count}</p>
      <button className="p-1 m-2 bg-red-400 text-white" onClick={decrement}>
        Decrement
      </button>
      <button className="p-1 m-2 bg-red-400 text-white" onClick={increment}>
        increment
      </button>
    </div>
  );
};
export default State;
