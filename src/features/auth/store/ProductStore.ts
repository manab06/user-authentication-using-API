import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number | null;
  name: string | null;
  slug: string | null;
  image: string | null;
}

interface ProductState {
  id: number | null;
  title: string | null;
  slug: string | null;
  price: number | null;
  description: string | null;

  category: Category;

  images: string[];
  creationAt: string | null;
  updatedAt: string | null;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
             id: null,
      title: null,
      slug: null,
      price: null,
      description: null,

      category: {
        id: null,
        name: null,
        slug: null,
        image: null,
      },

      images: [],
      creationAt: null,
      updatedAt: null,
    }),
    {
      name: "product-storage",
    },
  ),
);
