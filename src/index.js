import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Html from './pages/Html';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Css from './pages/Css';
import Java from './pages/Java';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h2>eroorr</h2>,
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  },
  {
    path: "/Java",
    element: <Java/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

 
