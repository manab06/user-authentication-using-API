import { apiClient } from "../../../lib/api-client";
import { UserProfile } from "./getProfile";

export const deleteProfile = async (id: string): Promise<UserProfile> => {
    try {
        const response = await apiClient.delete(`/users/${id}`);
        console.log("delete result:",response.status, response.data);
        return response.data ;
    }catch(error:any){
        console.log("error in deleting" + error);
        throw error;

    }
}