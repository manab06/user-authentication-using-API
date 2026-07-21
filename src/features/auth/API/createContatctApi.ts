import { apiClientForContactPage} from "../../../lib/api-client";
import { contactFormDataType, CreateUserResponse } from "../../../store/types";
import { contactFormDatazod } from "../schema/contactUs";

export const createContatctApi  = async(data: contactFormDatazod): Promise<contactFormDataType> => {
     
    const payload = {...data,
        password:"abc123",
        role: "customer",
        avatar: "https://i.imgur.com/LDOO4Qs.jpg"
    }
     
    try{
        const response = await apiClientForContactPage.post("/users", payload)
        console.log("this is api call response:", response.data);
        return response.data;

    }catch(error:any){
        console.log("Request Data:");
        console.log(JSON.stringify(payload, null, 2));

        console.log("Response Data:");
        console.log(JSON.stringify(error.response?.data, null, 2));

        throw error;
    }
    
}