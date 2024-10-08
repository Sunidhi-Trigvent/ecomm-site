import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../view/layout";
import About from "../view/pages/About/About";
import Product from "../view/pages/Product/Product";
import Contact from "../view/pages/Contact/Contact";
import Home from "../view/pages/Home/Home";

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
        element: <Product />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
