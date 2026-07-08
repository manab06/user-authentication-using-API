// import axios from "axios";
import { apiClient } from "../../../lib/api-client";
import { LoginResponse } from "../../../store/types";
import { AuthDataForLogin } from "../schema/login/logisSchema";

export const loginUser = async(data:AuthDataForLogin):Promise <LoginResponse> =>{

    try {
        const response = await apiClient.post<LoginResponse>("/auth/login", data);
        console.log("response-", response)
        return response.data;
    }catch(error:any){
        console.log("Request Data:");
        console.log(JSON.stringify(data,null,2));

        console.log("response Data:");
        console.log(JSON.stringify(error.response?.data, null, 2))
      throw error;    
    }
}