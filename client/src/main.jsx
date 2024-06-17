import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Category from "./pages/CategoryPage";
import Viewing from "./pages/ViewingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
