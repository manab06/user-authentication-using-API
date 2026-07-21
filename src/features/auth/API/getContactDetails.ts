
import {apiClientForContactPage} from "../../../lib/api-client";

export interface ContactDetails {
    id:number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}

export const getContactDetails = async (): Promise<ContactDetails> => {
    try {
        const response = await apiClientForContactPage.get<ContactDetails[]>("/users");
        console.log("API Response:", response.data);
        return response.data;
    } catch (error: any) {
        console.log("Error fetching contact details:", error.response?.data);
        throw error;
    }

}
