import React from "react";
import '../App.css'

const Child = ( {count, setCount}) => {
    
  return (
    <div>
      <div className="card">
        <h1>child</h1>
        <h1 className="...">{count}</h1>
        <div className="...">
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount((prvState) => prvState + 1)}>
            inrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child;
