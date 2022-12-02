import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={countUp}>Count up</button>
      <button onClick={() => console.log("Down")}>Count down</button>
    </div>
  );
};

export default Counter;
