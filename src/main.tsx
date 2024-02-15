import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing-page/home/index.tsx";
import Competitions from "./pages/landing-page/competitions/index.tsx";
import Rules from "./pages/landing-page/rules/index.tsx";
import ContactUs from "./pages/landing-page/contact/index.tsx";
import PrivayPolicy from "./pages/landing-page/privacy-policy/index.tsx";
import CookiePolicy from "./pages/landing-page/cookie-policy/index.tsx";

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
      {
        path: "/privacy-policy",
        element: <PrivayPolicy />
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
