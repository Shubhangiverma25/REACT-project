import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 5;

  const addValue = () => {
    console.log("clicked", Math.random());
    counter = counter + 1;
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
