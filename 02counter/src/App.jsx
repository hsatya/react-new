// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
    // console.log("Clicked", counter);
  };
  const removeValue = () => {
    // counter > 0 ? setCounter(counter - 1) : setCounter(0);
    if (counter > 0) setCounter(counter - 1);
    // console.log("Clicked", counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>{counter}</footer>
    </>
  );
}

export default App;
