import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <footer>{counter}</footer>
    </>
  );
}

export default App;
