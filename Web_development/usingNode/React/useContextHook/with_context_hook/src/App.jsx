import { useState, createContext } from "react";

import Component1 from "./components/Component1";

import "./App.css";

import countContext from "./contexts/context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <countContext.Provider
        value={{ count, setCount }}
      >
        <p className="currentMainCount">Current count is {count}</p>
        <Component1 />
      </countContext.Provider>
    </>
  );
}


export default App