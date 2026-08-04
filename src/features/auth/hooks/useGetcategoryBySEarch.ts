import { useState } from "react";
import { GetProductDeatilsType } from "../API/getProductApi";

export const useGetCategoryBySearch = (
  products: GetProductDeatilsType[]
) => {
  const [searchedProducts, setSearchedProducts] = useState<
    GetProductDeatilsType[]
  >([]);

  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchCategory = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchedProducts([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    const filteredProducts = products.filter((product) =>
      product.category.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setSearchedProducts(filteredProducts);

    setLoading(false);
  };

  return {
    searchedProducts,
    loading,
    hasSearched,
    searchCategory,
  };
};