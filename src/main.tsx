import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing-page/home/index.tsx";
import Rules from "./pages/landing-page/rules/index.tsx";
import PrivacyPolicy from "./pages/landing-page/privacy-policy/index.tsx";
import CookiePolicy from "./pages/landing-page/cookie-policy/index.tsx";
import TermsAndConditions from "./pages/landing-page/terms-and-conditions/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/terms-of-use",
        element: <TermsAndConditions />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
