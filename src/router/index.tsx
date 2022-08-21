import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

export const appRouter: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
];
