import { apiClient } from "../../../lib/api-client";
import { UserProfile } from "./getProfile";

export const deleteProfile = async ():Promise<UserProfile> => {
    try {
        const response = await apiClient.delete<UserProfile>("/users/{id}");
        console.log(response.data);
        return response.data;
    }catch(error:any){
        console.log("error in deleting" + error);
        throw error;

    }
}