import { useState } from "react";

import Component1 from "./components/Component1";

import "./App.css"


function App() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <p className="mainShowCaseArea">Count is {count}</p>
      <button className="primaryButton" onClick={()=>{setCount(count+1)}}>Click Primary</button>
      <Component1 count={count} setCount={setCount} />
    </>
  );
}

export default App;
