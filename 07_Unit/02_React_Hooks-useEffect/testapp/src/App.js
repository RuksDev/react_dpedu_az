import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
    // setCount(count + 1);
    console.log("useEffect Triggered")

    return () => {
      console.log("Cleanup Function")
    }
   }, [count,lastCount]);



  
  const counter = () => {
    setCount(count + 1);
    if ((count + 1) % 5 === 0) {
      setLastCount(lastCount + 1);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>use Effect Hook</p>
        <p>count value = {count}</p>
        <button onClick={counter}>ClickMe</button>
        <p>Last count value = {lastCount}</p>
      </header>
    </div>
  );
}

export default App;
