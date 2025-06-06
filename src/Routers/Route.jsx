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
    element: <Layout />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"about-us",
            element:<About/>
        },
        {
            path:"contact-us",
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
  return <RouterProvider router={router}/>
}

export default Route
