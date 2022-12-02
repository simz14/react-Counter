import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  const countReset = () => {
    setCount((prev) => 0);
  };

  return (
    <div>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={countUp}>Count up</button>
      <button onClick={countDown}>Count down</button>
      <button onClick={countReset}>Reset</button>
    </div>
  );
};

export default Counter;
