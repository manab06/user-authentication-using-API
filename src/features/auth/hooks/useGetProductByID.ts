import { useState, useEffect } from "react";
import { GetProductDeatilsType } from "../API/getProductApi";
import { getProductByID } from "../API/getProductByID";




 export const useGetProductByID = (id: string| undefined) => {

    const [product, setProduct] = useState<GetProductDeatilsType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        
     
        if(!id) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const productData = await getProductByID(id);
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading };

};