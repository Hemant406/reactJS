import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const changeNum = () => {
    console.log("num is changing");
  };
  const changeNum2 = () => {
    console.log("num2 is changing");
  };

  useEffect(function() {
    changeNum()
    // localStorage.setItem('num',num) --> additional snippet
  },[num]);

  useEffect(function() {
    changeNum2()
    // localStorage.setItem('num2',num2) --> additional snippet
  },[num2]);

  return (
    <div id="box">
      <div>
        <h1>{num}</h1>
        <button onClick={() => {
          setNum(num+1)
        }}>Increase!!</button>
      </div>
      <div>
        <h1>{num2}</h1>
        <button onClick={() => {
          setNum2(num2-1)
        }}>Decreasse!!</button>
      </div>
    </div>
  );
};

export default App;
