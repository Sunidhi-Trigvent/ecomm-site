import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../view/layout";
import About from "../view/pages/About/About";
import Contact from "../view/pages/Contact/Contact";
import Home from "../view/pages/Home/Home";
import Products from "../view/pages/Products/Products";
import Product from "../view/pages/product";
import Login from "../view/pages/Login/login";
import Register from "../view/pages/Login/register";
import Cart from "../view/pages/Cart/Cart";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
