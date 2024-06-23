import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);
