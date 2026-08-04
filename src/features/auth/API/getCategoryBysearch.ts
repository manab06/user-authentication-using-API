import { apiClient } from "../../../lib/api-client";
import { Category } from "../../../store/types";

export  const getCategoryBysearch = async (searchTerm: string): Promise<Category[]> => {
    
    try {
        const response = await apiClient.get<Category[]>(
      `/categories/search?query=${searchTerm}`
        );
        return response.data;   
    } catch (error) {
        throw new Error("Failed to fetch categories");
      
    }
};