import React from "react";
import { useState } from "react";
import './counter.css';
function Counter(){
    const [count,setCount]= useState(0);
  function onIncrement(){
    setCount(count+1);
  }
  function onDecrement(){
    setCount(count-1);
    if(count<=0){
        setCount(0);
    }
  }
 return(
    <div className="container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={onIncrement} className="buttonElement">+</button>
      <button onClick={onDecrement} className="buttonElement">-</button>
    </div>
 )
};

export default Counter;