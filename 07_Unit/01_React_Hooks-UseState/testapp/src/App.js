import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  var x = 0;
  const counter = () => {
    console.log("Button Clicked");
    x = x + 1;
    setCount(count + 1);
    console.log(`new value of x = ${x}`);
  };
// separate Function
  // const reducer = () => {
  //   setCount(count - 1);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Value of x = {x}</p>
        <p>value of count = {count};</p>
        {/* we can use counter function anytime we want (separate function) */}
        <button className="" onClick={counter}>
          ClickMe +
        </button>
        {/* also can write this method like this (inline function) */}
        <button className="" onClick={() => setCount (count - 1)}>
          Click Me -
        </button>
      </header>
    </div>
  );
}

export default App;
