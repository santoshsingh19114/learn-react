import './app.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/courses';
import Mock_test from './components/Mock_test';
import Reports from './components/Reports';
import NotFound from './components/NotFound';
const router=createBrowserRouter(
  [
    {path:"/",
      element:<div>
        <Navbar/>
        <Home/>
        </div>
    },
    {path:"/about",
      element:<div>
      <Navbar/>
      <About/>
      </div>
    },
    {path:"/dashboard",
      element:<div>
      <Navbar/>
      <Dashboard/>
      </div>,
        // nested routes
      children:[
        {
          path:"courses",
          element:<Courses/>
        },
        {
          path:"mock_tests",
          element:<Mock_test/>
        
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {

      // query parameter jisme url me base/id="ndijd" kuch ho 


      // route parameter
      path:"/student/:id",
      element:<div>
      <Navbar/>
      <ParamComp/>
      </div>
    },
    { 
      path:"*",
      element:<NotFound/>
      
    },
    
  ]
);
function App() {
 

  return (
    <>
    
      <RouterProvider router={router}/>
    </>
  )
}

export default App
