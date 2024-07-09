import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage";
import Category from "./pages/CategoryPage";
import RegisterPage from "./pages/RegisterPage";
import Viewing from "./pages/ViewingPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import sendData from "./services/api.service";

// import Joi from "joi";

// const registerSchema = Joi.object({
//   firstname: Joi.string().alphanum().min(1).max(100).required(),

//   lastname: Joi.string().alphanum().min(1).max(100).required(),

//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: false,
//     })
//     .required(),

//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),

//   siret: Joi.string().alphanum().min(0).max(100).required(),
// });

// const checkFormData = async () => {
//   try {
//     const value = await registerSchema.validateAsync({
//       firstname: checkedFirstname,
//       lastname: checkedLastname,
//       email: checkedEmail,
//       password: checkedPassword,
//       siret: checkedSiret,
//     });
//     return value;
//   } catch (err) {
//     console.error(err);
//   }
// };

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
          const response = await sendData("/api/user", formData, "POST");
          if (response.status === 201) {
            redirect("/login");
          } else {
            console.error(response);
          }
          return response;
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);