import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import Details from './Components/Details';
import CartDetails from './Components/CartDetails';
import Error from './Components/Error';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch("/data.json")
      },
      {
        path:"details/:id",
        element:<Details></Details>,
        loader:()=>fetch("/data.json")
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
        
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'cart',
        element:<CartDetails></CartDetails>,
        loader:()=>fetch("/data.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
