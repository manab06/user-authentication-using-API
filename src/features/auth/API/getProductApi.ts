import { apiClientForGetProductDetails } from "../../../lib/api-client";
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface GetProductDeatilsType {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;

}


export const getProductDetails = async(): Promise<GetProductDeatilsType[]> =>{
  
    try{
        const response = await apiClientForGetProductDetails.get<GetProductDeatilsType[]>("products?limit=100&offset=10")
        console.log("API Response:" , response.data);
        return response.data;
    }catch(error:any){
         console.log(error.response);
         throw error;
    }
}