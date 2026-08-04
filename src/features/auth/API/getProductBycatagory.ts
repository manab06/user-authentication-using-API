
import { apiClient } from "../../../lib/api-client";
import { GetProductDeatilsType } from "./getProductApi";

export const getProductsByCategory = async (
  categoryId: number
): Promise<GetProductDeatilsType[]> => {
  try {
    const response = await apiClient.get<GetProductDeatilsType[]>(
      `/categories/${categoryId}/products`
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products by category");
  }
};