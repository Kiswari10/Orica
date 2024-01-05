import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routerConfig } from "./routerConfig";

const router = createBrowserRouter(routerConfig);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
