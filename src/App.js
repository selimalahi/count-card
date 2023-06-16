// normal parent to chlild data props
// // import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import Parent from './pages/Parent';
// // import Main from './pages/Layout/Main';
// // import Home from './pages/Home/Home';

// function App() {
//     //  const router = createBrowserRouter([

//     //   {
//     //     path: '/',
//     //     element: <Main></Main>,
//     //     children: [
//     //         {
//     //             path: '/',
//     //             element: <Home></Home>
//     //         }

//     //     ]

//     // },

//     //  ])

//   return (
//     <div className="App ">
//        {/* <RouterProvider router ={router} /> */}
//        <Parent />
//     </div>
//   );
// }

// export default App;

import { createContext, useState } from "react";
import "./App.css";
import Parent from "./pages/Parent";

export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App ">
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
