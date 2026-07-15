import { apiClient } from "../../../lib/api-client";
import { CreateUserResponse } from "../../../store/types";
import { contactFormData } from "../schema/contactUs";

export const createContatctApi  = async(data: contactFormData): Promise<CreateUserResponse> => {

    try{
        const response = await apiClient.post("/users", data)
        return response.data;

    }catch(error:any){
        console.log("Request Data:");
        console.log(JSON.stringify(data, null, 2));

        console.log("Response Data:");
        console.log(JSON.stringify(error.response?.data, null, 2));

        throw error;
    }
    
}