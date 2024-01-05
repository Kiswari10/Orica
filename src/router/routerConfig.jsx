import { Navigate } from "react-router";

import { Login, ResetPassword, SolutionGeneration, Dashboard } from "../pages";

export const routerConfig = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/solution-generation",
    element: <SolutionGeneration />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
