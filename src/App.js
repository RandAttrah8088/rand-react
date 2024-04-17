import React,{useState} from "react";

function App() {
  const [count,setCount]=useState(0);

  function decrementCount(){
    setCount(preCount=>preCount-1)
  }
  function incrementCount(){
    setCount(preCount=>preCount+1)
  }
  return (
    <>
      <button className="btn" onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button className="btn2"onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
