import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../features/auth/store/store';
import { ROUTES } from '../config/routs';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { DashBoardPage } from '../pages/DashBordPage/DashBoardPage';
import {DeleteAccountPage} from '../pages/DeleteAccountPage';

export const AuthenticGuard=()=> {

    const isAuthenticated = useAuthStore((state)=>state.isAuthenticated);

    if(!isAuthenticated)  {
        return <Navigate to={ROUTES.PUBLIC.LOGIN} replace/>
    }

    return <Outlet/>
};



export const Privateroutes = [
    {
        element:<AuthenticGuard/>,
        children: [
            {
                element:<PrivateLayout/>,
                children: [
                    {path:"dashboard", element:<DashBoardPage/>},
                    {path: '*', element:<Navigate to={ROUTES.PRIVATE.DASHBOARD}/>},
                    {path:"delete-account", element:<DeleteAccountPage/>}
                ]
            }
        ]
    }
]
    


