import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import Login from '@/components/form-login.tsx'
import Signup from '@/components/form-signup.tsx'

import { createBrowserRouter, RouterProvider, } from "react-router";

function Landingpage() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  { path: "/", Component: Landingpage },
  { path: "/login", Component: Login },
  { path: "/signup", Component: Signup }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
