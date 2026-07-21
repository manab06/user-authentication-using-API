import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../features/auth/store/store';
import { ROUTES } from '../config/routs';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { DashBoardPage } from '../pages/DashBordPage/DashBoardPage';
import {DeleteAccountPage} from '../pages/DeleteAccountPage';
import AdminDashBoard from '../features/auth/components/AdminDashBoard';
import { AdminLayout } from '../layouts/AdminLayout';

// This authentication guard is used to protect private routes. It checks if the user is authenticated and redirects them to the login page if they are not authenticated. If the user is authenticated, it renders the child components using the Outlet component from react-router-dom.
export const AuthenticGuard=()=> {
    const isAuthenticated = useAuthStore((state)=>state.isAuthenticated);
    if(!isAuthenticated){
        return <Navigate to={ROUTES.PUBLIC.LOGIN} replace/>
    }
    return <Outlet/>
};
// This authentication guard is used to protect admin routes. It checks if the user is authenticated as an admin and redirects them to the admin login page if they are not authenticated. If the user is authenticated, it renders the child components using the Outlet component from react-router-dom.
export const AdminGuard=()=> {
    const isAdminAuthenticated = useAuthStore((state)=>state.isAdminAuthenticated);
    if(!isAdminAuthenticated){
         console.log("Guard:", isAdminAuthenticated);
        return <Navigate to={ROUTES.ADMIN_PUBLIC.LOGIN} replace/>
    }
    return <Outlet/>;
}
// we have to define every private route seperatly here is AuthenticGuard and adminGuard are used to protect the private routes and admin routes respectively. If the user is not authenticated, they will be redirected to the login page. If the user is not authenticated as an admin, they will be redirected to the admin login page. If the user is authenticated, they will be able to access the private routes and admin routes.
export const Privateroutes = [
    {
        element:<AuthenticGuard/>,
        children: [
            {
                element:<PrivateLayout/>,
                children: [
                    {path:"dashboard", element:<DashBoardPage/>},
                    {path: '*', element:<Navigate to={ROUTES.PRIVATE.DASHBOARD} replace/>},
                    {path:"delete-account", element:<DeleteAccountPage/>}, 
                ]
            }
        ]
    },
    {
        element:<AdminGuard/>,
        children: [
            {
                element:<AdminLayout/>,
                children: [
                    {path:"adashboard", element:<AdminDashBoard/>}
                ]
            }
        ]
    }
]


    


