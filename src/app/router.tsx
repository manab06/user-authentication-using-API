import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "../routes/Public-routes";
import { Privateroutes } from "../routes/Private-routes";

export const router = createBrowserRouter([...publicRoutes,...Privateroutes]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};