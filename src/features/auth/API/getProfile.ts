import { apiClient } from "../../../lib/api-client";

export interface UserProfile {
    id:number;
    name:string;
    email:string;
    avatar:string;
    role:string;
}

export const getProfile = async ():Promise<UserProfile> => {
    try{

        const response = await apiClient.get<UserProfile>("/auth/profile");
        return response.data;

    }catch(error:any){
        console.log("Profile Error");
        console.log(error.response?.data);

        throw error;

    }
};