
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './pages/Layout/Main';
import Home from './pages/Home/Home';


function App() {
     const router = createBrowserRouter([
    
      {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            
        ]
       
      
    },
 
      
     ])
  
  return (
    <div className="App ">
       <RouterProvider router ={router} />
    </div>
  );
}

export default App;
