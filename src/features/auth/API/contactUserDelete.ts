import { apiClient } from "../../../lib/api-client"

export const contactUserDelete = async (id: number) => {

    const response = await apiClient.delete(`/users/${id}`);
    return response.data;

}