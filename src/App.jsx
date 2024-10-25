// import { useState } from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css'
import Header from './components/header'
import Home from './pages/home';
import About from './pages/about';
import BlogDetail from './components/blogdetail';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Header/><Home/></>
    },
    {
      path:"/about",
      element:<><Header/><About/></>
    },
    {
      path:"/blog/:id",
      element:<><Header/><BlogDetail/></>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
