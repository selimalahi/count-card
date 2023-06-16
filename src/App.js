// import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setcount] = useState(0);
  return (
    <div className="App ">
       <div className='card'>
        <h1 className='...'>{count}</h1>
        <div className='...'>
          <button onClick={() => setcount(count-1)}>Decrement</button>
          <button
           onClick={ () => setcount(( prvState) => prvState +1)}
          >inrement</button>
        </div>

       </div>
    </div>
  );
}

export default App;
