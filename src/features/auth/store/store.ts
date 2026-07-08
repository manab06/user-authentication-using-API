import {create} from 'zustand';
import { persist } from 'zustand/middleware';


interface AuthState {
    name: string    | null;
    email: string   | null;
    password:string | null;
    token: string   | null;
    avatar:string   | null;
    isAuthenticated:boolean;
    refreshToken:string | null;
    setAuth:(name:string,email:string,password:string,avatar:string) => void;
    
    setToken:(token:string)=>void;

    logout: ()=>void;

    setUser:(
        name:string,
        email:string,
        avatar:string
    ) => void

    setLogin: (
        name:string,
        email:string,
        avatar:string,
        accessToken:string,
        refreshToken:string
    ) => void;
}


export const useAuthStore = create<AuthState>()(
    persist(
        (set)=> ({
            token:null,
            refreshToken:null,
            name:null,
            email:null,
            avatar:null,
            password:null,
            isAuthenticated: false,
            
            setToken:(token)=>set({
                token,
                isAuthenticated:true,
            }),
            setAuth:(name :string,email:string,password:string,avatar:string)=> set({name,email,password,avatar}),
            logout: ()=> set({token:null,name:null,email:null,password:null,avatar:null,isAuthenticated:false}),
            setUser:(name :string,email:string,avatar:string)=> set({name,email,avatar}),
            setLogin:(name,email,avatar,accessToken,refreshToken)=>set({name,email,avatar,token:accessToken,refreshToken,isAuthenticated:true})
        }),
        {
            name: 'auth-storage'
        }
    )
);