import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import "./App.css";

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}></Hello>
        <Hello color="pink"></Hello>
      </Wrapper>
    </div>
  );
}

export default App;
