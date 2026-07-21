import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { RegisterPage } from "../pages/register/RegisterPage";
// import { SuccessFull } from "../pages/success/SuccessFull";
import { RouteObject } from "react-router-dom";

import { AuthenticGuard, Privateroutes } from "./Private-routes";
import { PrivateLayout } from "../layouts/PrivateLayout";
import { DashBoardPage } from "../pages/DashBordPage/DashBoardPage";
import { LoginPage } from '../pages/login/LoginPage';
import ContactPage from "../pages/ContactPage";
import AboutUsPages from "../pages/AboutUsPages";
import { AdminPage } from "../pages/AdminPage";
import AdminLoginComponent from "../features/auth/components/AdminLoginComponent";
import { ProductPage } from "../pages/ProductPage";
import CartComponent from "../features/auth/components/CartComponent";
import { LazyLodingForProductPage } from "../features/auth/components/LazyLodingForProductPage";



export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: "success",
      //   element: <SuccessFull />,
      // },
      {
        path:"contact",
        element:<ContactPage/>
      },
      {
        path:"about",
        element:<AboutUsPages/>

      },
      { 
        path: "alogin",
        element: <AdminLoginComponent />
      },
      {
        path:"products",
        element: <LazyLodingForProductPage/>
      },
      {
        path:"cart",
        element:<CartComponent/>

      },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes,...Privateroutes]);