import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { ContactDetails } from '../API/getContactDetails';


interface AuthState {
    id: number      | null;
    name: string    | null;
    email: string   | null;
    password:string | null;
    token: string   | null;
    avatar:string   | null;
    role:string     | null;
    isAuthenticated:boolean;
    isAdminAuthenticated: boolean;
    refreshToken:string | null;
    creationAt:string | null;
    updatedAt:string | null;
    users:ContactDetails[] | null;
    setAuth:(id:number,name:string,email:string,password:string,avatar:string) => void;
    setId:(id: number) => void;
    setToken:(token:string)=>void;
    setAdminLogin: ()=>void;


    logout: ()=>void;

    setUser:(
        id: number,
        name:string,
        email:string,
        avatar:string
    ) => void

     getUsersArr: (users: ContactDetails[]) => void;

    setLogin: (
        id: number,
        name:string,
        email:string,
        avatar:string,
        accessToken:string,
        refreshToken:string
    ) => void;

    contactFormDataFromZustandStore: (
        id:number,
        email: string,
        password: string,
        name: string,
        role: string,
        avatar: string,
        creationAt: string,
        updatedAt: string,
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
            role:null,
            password:null,
            isAuthenticated: false,
            isAdminAuthenticated: false,
            creationAt: null,
            updatedAt:null,
            users: null,
            setToken:(token)=>set({
                token,
                isAuthenticated:true,
            }),
            setAdminLogin: () =>
              set({
              isAdminAuthenticated: true,
            }),
            setAuth:(id:number,name :string,email:string,password:string,avatar:string)=> set({id,name,email,password,avatar}),
            setId:(id: number) => set({id}),
            logout: ()=> set({id: null,token: null,refreshToken: null,name: null,email: null,password: null,avatar: null,role: null,creationAt: null,updatedAt: null,users: null,isAuthenticated: false,isAdminAuthenticated: false,}),
            setUser:(id: number,name :string,email:string,avatar:string)=> set({id,name,email,avatar}),
            getUsersArr: (users: ContactDetails[]) => set({users}),
            setLogin:(id,name,email,avatar,accessToken,refreshToken)=>set({id,name,email,avatar,token:accessToken,refreshToken,isAuthenticated:true}),
            contactFormDataFromZustandStore: (id,email,password,name,role,avatar,creationAt,updatedAt)=>set({id,email,password,name,role,avatar,creationAt,updatedAt}),
        }),
        {
            name: 'auth-storage'
        }
    )
);