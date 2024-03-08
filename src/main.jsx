import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/Home/About';
import ContactUs from './pages/Home/ContactUs';
import Skills from './pages/Home/Skills';
import Projects from './pages/Home/Projects';
 

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
      path:'contact',
      element:<ContactUs></ContactUs>
      },
      {
        path:'skills',
        element:<Skills></Skills>
      },
      {
        path:'projects',
        element:<Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)