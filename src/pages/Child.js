                          // parent to child data props
// import React from "react";
// import '../App.css'

// const Child = ( {count, setCount}) => {
    
//   return (
//     <div>
//       <div className="card">
//         <h1>child</h1>
//         <h1 className="...">{count}</h1>
//         <div className="...">
//           <button onClick={() => setCount(count - 1)}>Decrement</button>
//           <button onClick={() => setCount((prvState) => prvState + 1)}>
//             inrement
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Child;

// global data any parent chils distribution

import React, { useContext } from "react";
import '../App.css'
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);
    
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

