// import React, { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";

// import { GetProductDeatilsType, getProductDetails } from "../API/getProductApi";
// import { useCartProductStore } from "../store/CartStore";
// import { toast } from "react-toastify";
// import { Button } from "../../../components/UI/button/Button";
// import { useGetCategoryBySearch } from "../hooks/useGetcategoryBySEarch";

// export function ProductPageComponent() {
//   //category search logic here//

//   const {
//     categories,
//     products: searchedProducts,
//     loading,
//     searchCategory,
//   } = useGetCategoryBySearch();

//    const [searchTerm, setSearchTerm] = useState("");

//   //
//   const [products, setProducts] = useState<GetProductDeatilsType[]>([]);
//   const cart = useCartProductStore((state) => state.cart);

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//   const addToCart = useCartProductStore((state) => state.addToCart);
//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const productDetails = await getProductDetails();
//         setProducts(productDetails);
//       } catch (error) {
//         console.log("Error fetching Products", error);
//       }
//     };

//     fetchProductDetails();
//   }, []);

//   return (
//     <div>
//       <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100">
//         {/* Hero */}
//         <section className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white">
//           <div className="max-w-7xl mx-auto px-6 py-16">
//             <h1 className="text-5xl font-bold">Discover Premium Products</h1>

//             <p className="mt-4 text-lg text-sky-100 max-w-2xl">
//               Shop the newest gadgets, accessories and lifestyle products at
//               unbeatable prices.
//             </p>

//             <div className="mt-8 flex gap-4 flex-wrap">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="flex-1 min-w-[250px] rounded-xl px-5 py-3 text-gray-700 outline-none"
//               />

//               <button onClick={() => searchCategory(searchTerm)} className="bg-white text-sky-700 px-8 rounded-xl font-semibold hover:bg-gray-100">
//                 Search
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Categories */}

//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="flex gap-3 flex-wrap">
//             {[
//               "All",
//               "Electronics",
//               "Gaming",
//               "Audio",
//               "Accessories",
//               "Travel",
//             ].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => {
//                   if (item !== "All") {
//                     searchCategory(item);
//                   } else {
//                     console.log("All category selected");
//                   }
//                 }}
//                 className ="rounded-full bg-white px-5 py-2 shadow hover:bg-sky-600 hover:text-white transition">
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Products */}

//         <section className="max-w-7xl mx-auto px-6 pb-20">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {(searchedProducts.length > 0 ? searchedProducts : products).map(
//               (product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-2xl shadow-md overflow-hidden h-[500px] flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//                 >
//                   {/* Image */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={product.images[0]}
//                       alt={product.title}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                     />

//                     <span className="absolute top-3 left-3 bg-sky-600 text-white text-xs px-3 py-1 rounded-full">
//                       {product.category.name}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col flex-1 p-5">
//                     <h2 className="font-bold text-lg line-clamp-2 h-14">
//                       {product.title}
//                     </h2>

//                     <p className="text-gray-500 text-sm mt-2 line-clamp-3 h-16">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto">
//                       <div className="flex justify-between items-center mb-4">
//                         <span className="text-2xl font-bold text-sky-600">
//                           ${product.price}
//                         </span>

//                         <span className="text-yellow-500 font-semibold">
//                           ⭐ 4.8
//                         </span>
//                       </div>

//                       <Button
//                         onClick={() => {
//                           addToCart({
//                             id: product.id,
//                             title: product.title,
//                             price: product.price,
//                             image: product.images[0],
//                             quantity: 1,
//                           });

//                           toast.success("Item Add to cart");
//                         }}
//                         className="w-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
//                       >
//                         Add to Cart
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ),
//             )}
//           </div>
//         </section>
//       </div>
//       <Link to="/cart" className="fixed bottom-8 right-8 z-50 group">
//         <div className="relative">
//           <button className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300">
//             <ShoppingCart size={30} />
//           </button>

//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center animate-bounce">
//               {totalItems}
//             </span>
//           )}
//         </div>
//       </Link>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  GetProductDeatilsType,
  getProductDetails,
} from "../API/getProductApi";

import { useCartProductStore } from "../store/CartStore";
import { Button } from "../../../components/UI/button/Button";
import { useGetCategoryBySearch } from "../hooks/useGetcategoryBySEarch";
// import LazyLodingOfProductPage from "./LazyLodingOfProductPage";
import { LazyLodingForProductPage } from "./LazyLodingForProductPage";

export function ProductPageComponent() {
  const [products, setProducts] = useState<GetProductDeatilsType[]>([]);
 
  // Category Search Hook
  

  const {
    searchedProducts,
    loading,
    hasSearched,
    searchCategory,
  } = useGetCategoryBySearch(products);

  
  // Search Input-----====----> I use it for the search input value and to trigger the search function when the user presses Enter or clicks the search button.
  

  const [searchTerm, setSearchTerm] = useState("");

  const cart = useCartProductStore((state) => state.cart);

  const addToCart = useCartProductStore(
    (state) => state.addToCart
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

 
 
  // Get All Products


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDetails = await getProductDetails();

        setProducts(productDetails);
      } catch (error) {
        console.log("Error fetching Products", error);
      }
    };

    fetchProductDetails();
  }, []);

   //lazy loding
   
  if(loading){
    return <LazyLodingForProductPage/>
  }

  
  // Search Handler
 

  const handleSearch = () => {
    searchCategory(searchTerm);
  };

  return ( 
    <div>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100">

        {/*
            Hero
        */}

        <section className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">

            <h1 className="text-5xl font-bold">
              Discover Premium Products
            </h1>

            <p className="mt-4 text-lg text-sky-100 max-w-2xl">
              Shop the newest gadgets, accessories and lifestyle
              products at unbeatable prices.
            </p>

            {/* Search */}

            <div className="mt-8 flex gap-4 flex-wrap">

              <input
                type="text"
                placeholder="Search category..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="flex-1 min-w-[250px] rounded-xl px-5 py-3 text-gray-700 outline-none"
              />

              <button
                onClick={handleSearch}
                className="bg-white text-sky-700 px-8 rounded-xl font-semibold hover:bg-gray-100"
              >
                Search
              </button>

            </div>
          </div>
        </section>

        {/*
            Categories
     */}

        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex gap-3 flex-wrap">

            {[
              "All",
              "Electronics",
              "Gaming",
              "Audio",
              "Accessories",
              "Travel",
              "Clothes",
              "Furniture",
              "Shoes",
              "Miscellaneous"


            ].map((item) => (

              <button
                key={item}
                onClick={() => {
                  if (item === "All") {
                    setSearchTerm("");
                    searchCategory("");
                  } else {
                    setSearchTerm(item);
                    searchCategory(item);
                  }
                }}
                className="rounded-full bg-white px-5 py-2 shadow hover:bg-sky-600 hover:text-white transition"
              >
                {item}
              </button>

            ))}

          </div>
        </div>

        {/* 
            Products
        */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          {/* Loading */}

          {loading && (
            <div className="text-center py-10">
              <p className="text-lg font-semibold">
                Loading products...
              </p>
            </div>
          )}

          {/* No Products */}

          {!loading &&
            hasSearched &&
            searchedProducts.length === 0 && (

              <div className="text-center py-10">
                <p className="text-xl font-semibold">
                  No products found.
                </p>
              </div>

            )}

          {/* Product Grid */}

          {!loading &&
            (!hasSearched || searchedProducts.length > 0) && (

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {(hasSearched
                  ? searchedProducts
                  : products
                ).map((product) => (

                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden h-[500px] flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >

                    {/* Image */}

                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <Link to={`/products/${product.id}`}>   
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        onError = {(e)=>{
                          e.currentTarget.src ="https://jalongi.com/public/assets/images/product_not_found.jpeg";
                        }}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      </Link>

                      <span className="absolute top-3 left-3 bg-sky-600 text-white text-xs px-3 py-1 rounded-full">
                        {product.category.name}
                      </span>

                    </div>

                    {/* Content */}

                    <div className="flex flex-col flex-1 p-5">

                      <h2 className="font-bold text-lg line-clamp-2 h-14">
                        {product.title}
                      </h2>

                      <p className="text-gray-500 text-sm mt-2 line-clamp-3 h-16">
                        {product.description}
                      </p>

                      <div className="mt-auto">

                        <div className="flex justify-between items-center mb-4">

                          <span className="text-2xl font-bold text-sky-600">
                            ${product.price}
                          </span>

                          <span className="text-yellow-500 font-semibold">
                            ⭐ 4.8
                          </span>

                        </div>

                        {/* Add Cart */}

                        <Button
                          onClick={() => {

                            addToCart({
                              id: product.id,
                              title: product.title,
                              price: product.price,
                              image: product.images[0],
                              quantity: 1,
                            });

                            toast.success(
                              "Item Added to cart"
                            );

                          }}
                          className="w-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                          Add to Cart
                        </Button>

                      </div>
                    </div>
                  </div>

                ))}

              </div>

            )}

        </section>
      </div>

      {/* 
          Cart Button
      */}

      <Link
        to="/cart"
        className="fixed bottom-8 right-8 z-50 group"
      >

        <div className="relative">

          <button className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300">

            <ShoppingCart size={30} />

          </button>

          {totalItems > 0 && (

            <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center animate-bounce">

              {totalItems}

            </span>

          )}

        </div>

      </Link>
    </div>
  );
}


