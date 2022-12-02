const Counter = () => {
  return (
    <div>
      <div>Counter</div>
      <div>0</div>
      <button onClick={() => console.log("Up")}>Count up</button>
      <button onClick={() => console.log("Down")}>Count down</button>
    </div>
  );
};

export default Counter;
