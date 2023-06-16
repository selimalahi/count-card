// import React, { useState } from "react";
// import '../App.css';
// import Child from "./Child";

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div className="card">
//         <h1>parentf</h1>
//         <h1 className="...">{count}</h1>
//         <div className="...">
//           <button onClick={() => setCount(count - 1)}>Decrement</button>
//           <button onClick={() => setCount((prvState) => prvState + 1)}>
//             inrement
//           </button>
//         </div>
        
//       </div>
//       <Child count={count} setCount={setCount} />
//     </div>
//   );
// };

// export default Parent;

// global state managment

import React, { useContext } from "react";
import '../App.css';
import Child from "./Child";
import { COUNTER_CONTEXT } from "../App";

const Parent = () => {
   const { count } = useContext(COUNTER_CONTEXT)
  return (
    <div>
      <div className="card">
        <h1>parent</h1>
        <h1 className="...">{count}</h1>
        <div className="...">
          {/* <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount((prvState) => prvState + 1)}>
            inrement
          </button> */}
        </div>
        
      </div>
      <Child />
    </div>
  );
};

export default Parent;

