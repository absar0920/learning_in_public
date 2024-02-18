import { useMemo, useState } from "react";

function expensiveComputation(number) {
  // This function takes very computational power
  for (let i; i < number; i++) {
    if (i == 5_000_000) {
      return true;
    }
  }
}

let num = new Array(10_000_000).fill(0);

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(num);

  // expensiveComputation(number); // this function runs on every re-render
  // to stop we will use useMemo Hook. It will perform the action one time and stores it's value.

  useMemo(() => {
    expensiveComputation(number), [number]; // the second argument is when the expensive computation will occur. If this dependency changes the expensive computation will re-occur. Empty array means this computation will occur only once
  });
  return (
    <>
      <div className="countDiv">The count is {count}</div>
      <button
        className="changerButton"
        onClick={() => {
          setCount(count + 1);
          setNumber();
        }}
      >
        Click ME
      </button>
    </>
  );
}

export default App;
