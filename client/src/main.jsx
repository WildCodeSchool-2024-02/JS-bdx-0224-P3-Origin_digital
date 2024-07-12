import { CookiesProvider } from "react-cookie";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage";
import Category from "./pages/CategoryPage";
import RegisterPage from "./pages/RegisterPage";
import Viewing from "./pages/ViewingPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import sendData from "./services/api.service";
import { LoggedProvider } from "./context/LoggedContext";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(await request.formData());
          const response = await sendData("/api/users", formData, "POST");
          if (response.status === 201) {
            return redirect("/login");
          }
          return response;
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(await request.formData());
          const response = await sendData("/api/auth", formData, "POST");
          return response;
        },
        
      },
      {
        path: "/viewing",
        element: <Viewing />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <LoggedProvider>
        <RouterProvider router={router} />
      </LoggedProvider>
    </CookiesProvider>
  </React.StrictMode>
);