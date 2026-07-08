
import { AuthData } from "../schema/register/Auth";
import { apiClient } from '../../../lib/api-client';
import {  CreateUserResponse} from "../../../store/types";



export const createUser = async(data:AuthData):Promise <CreateUserResponse> =>{
    try{
        const response = await apiClient.post("/users", data)
        return response as unknown as CreateUserResponse;

    }catch(error:any){
       console.log("Request Data:");
       console.log(JSON.stringify(data, null, 2));

       console.log("Response Data:");
       console.log(JSON.stringify(error.response?.data, null, 2));

       throw error;
    }

}

