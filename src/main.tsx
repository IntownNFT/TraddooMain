import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing-page/home/index.tsx";
import Competitions from "./pages/landing-page/competitions/index.tsx";
import Rules from "./pages/landing-page/rules/index.tsx";
import ContactUs from "./pages/landing-page/contact/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/competition",
        element: <Competitions />
      },
      {
        path: "/rules",
        element: <Rules />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
