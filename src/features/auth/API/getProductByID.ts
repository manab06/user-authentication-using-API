import { apiClient } from "../../../lib/api-client";
import { GetProductDeatilsType } from "./getProductApi";

const getProductByID = async (id: string) => {
  try {
    const response = await apiClient.get<GetProductDeatilsType>(
      `/products/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product by ID");
  }
};

export {getProductByID};