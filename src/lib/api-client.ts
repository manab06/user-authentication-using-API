import axios from "axios";
import { useAuthStore } from "../features/auth/store/store";


export const apiClient = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
        "Content-Type" : "application/json"
    }
});

export const apiClientForContactPage = axios.create ({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
         "Content-Type" : "application/json"
    }
})

export const apiClientForGetProductDetails = axios.create ({
    baseURL:"https://api.escuelajs.co/api/v1",
    headers: {
         "Content-Type" : "application/json"
    }
})

const token = localStorage.getItem("access_token");

apiClient.interceptors.request.use(
    (config)=>{
        const token = useAuthStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Authorization:", config.headers.Authorization);

    return config;
    },
    (error)=>Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response)=> response,
    (error) => {
        if(error.response?.status === 401){
            useAuthStore.getState().logout();
        }
        return Promise.reject(error);
    }
);
