import {create} from 'zustand';
import { persist } from 'zustand/middleware';


interface AuthState {
    id: number      | null;
    name: string    | null;
    email: string   | null;
    password:string | null;
    token: string   | null;
    avatar:string   | null;
    isAuthenticated:boolean;
    refreshToken:string | null;
    setAuth:(id:number,name:string,email:string,password:string,avatar:string) => void;
    setId:(id: number) => void;
    setToken:(token:string)=>void;

    logout: ()=>void;

    setUser:(
        id: number,
        name:string,
        email:string,
        avatar:string
    ) => void

    setLogin: (
        id: number,
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
            id:null,
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
            setAuth:(id:number,name :string,email:string,password:string,avatar:string)=> set({id,name,email,password,avatar}),
            setId:(id: number) => set({id}),
            logout: ()=> set({token:null,name:null,email:null,password:null,avatar:null,isAuthenticated:false}),
            setUser:(id: number,name :string,email:string,avatar:string)=> set({id,name,email,avatar}),
            setLogin:(id,name,email,avatar,accessToken,refreshToken)=>set({id,name,email,avatar,token:accessToken,refreshToken,isAuthenticated:true})
        }),
        {
            name: 'auth-storage'
        }
    )
);