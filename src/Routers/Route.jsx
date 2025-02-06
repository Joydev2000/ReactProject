import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'
import ProductDetails from '../Pages/ProductDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"product",
            element:<Product/>
        },
        {
            path:"product/:id",
            element:<ProductDetails/>
        }
    ]

  }
])


function Route() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Route
