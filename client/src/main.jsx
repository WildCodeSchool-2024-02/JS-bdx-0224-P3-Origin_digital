import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/HomePage";
import Category from "./pages/CategoryPage";
import Viewing from "./pages/ViewingPage";

const getCategories = async () => {
  await fetch("http://localhost:3310/api/categories")
    .then((res) => res.json())
    .then((data) => console.info(data))
    .catch((err) => console.error(err));
  return true;
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getCategories(),
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/viewing",
        element: <Viewing />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
