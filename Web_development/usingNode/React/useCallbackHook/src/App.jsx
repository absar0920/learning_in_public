import { useState, useCallback, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const memoized_value = useCallback(() => {
    alert("Hy, It's an expensive function");
  }, [secondCount]); // same syntax as useMemo Hook

  // useMemo(()=>{console.log("Hello")}, [secondCount]) // useMemo Hook
  return (
    <>
      <div className="myStuff"></div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            if (count == 10) {
              setSecondCount(secondCount + 1);
            }
            console.log(count, secondCount)
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
