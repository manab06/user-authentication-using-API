import React, { useEffect, useState } from "react";
import {
    ShoppingCart,
    Star,
    ArrowLeft,
    Minus,
    Plus,
    Heart,
    CheckCircle,
    Truck,
    ShieldCheck,
    RotateCcw,
    Headphones,
    ArrowRight,
    Info,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useGetProductByID } from "../hooks/useGetProductByID";
//import { LazyLodingForProductPage } from './LazyLodingForProductPage';
import LazyLodingPart2 from "./LazyLodingPart2";
import { useCartProductStore } from "../store/CartStore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../components/UI/button/Button";

function DetailAboutProduct() {
    //update image on click of small image preview
    
    // import state from zustand store to use same logic for add to car or remove from cart functionality
    const addToCart = useCartProductStore((state) => state.addToCart);
    const increaseQuantity = useCartProductStore(
        (state) => state.increaseQuantity,
    );
    const decreaseQuantity = useCartProductStore(
        (state) => state.decreaseQuantity,
    );

    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const { product, loading } = useGetProductByID(id);
    const [selectImage , setSelectImage] = useState<string>("");

    useEffect(()=>{
        if(product && product.images.length > 0){
            setSelectImage(product.images[0]);
        }
    },[product])


    if (loading) {
        return (
            <div>
                <LazyLodingPart2 />
            </div>
        );
    }

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
                <LazyLodingPart2 />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
            {/* ================= HEADER / BACK ================= */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 font-medium transition-all duration-300 hover:-translate-x-1"
                >
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>
            </div>

            {/* ================= PRODUCT SECTION ================= */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 md:p-10 lg:p-14">
                        {/* ================= PRODUCT IMAGE ================= */}
                        <div className="space-y-5">
                            <div className="relative group bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl overflow-hidden border border-slate-100">
                                {/* Discount Badge */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        Premium
                                    </span>
                                </div>

                                {/* Wishlist */}
                                {/* <button className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 hover:text-red-500 transition-all duration-300">
                                    <Heart size={20} />
                                </button> */}

                                <img
                                    src={selectImage}
                                    alt={product.title}
                                    className="w-full h-[420px] md:h-[520px] object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Small Image Preview */}
                            <div className="flex gap-3">
                                {product.images.slice(0, 4).map((image, index) => (
                                    <button
                                        onClick={() => setSelectImage(image)}
                                        key={index}
                                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 ${selectImage === image
                                                ? "border-sky-500 shadow-md"
                                                : "border-slate-200 hover:border-sky-400"
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.title}-${index}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ================= PRODUCT INFORMATION ================= */}
                        <div className="flex flex-col justify-center">
                            {/* Category */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold">
                                    {product.category.name}
                                </span>

                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                                    <CheckCircle size={15} />
                                    In Stock
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                                {product.title}
                            </h1>

                            {/* Rating */}
                            <div className="flex flex-wrap items-center gap-4 mt-5">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                <span className="font-bold text-slate-800">4.8</span>

                                <span className="text-slate-400">•</span>

                                <span className="text-slate-500">128 Customer Reviews</span>
                            </div>

                            {/* Price */}
                            <div className="mt-7 flex items-end gap-4">
                                <span className="text-4xl font-extrabold text-sky-600">
                                    ${product.price}
                                </span>

                                <span className="text-lg text-slate-400 line-through mb-1">
                                    ${(product.price * 1.2).toFixed(2)}
                                </span>

                                <span className="mb-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                    20% OFF
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-7 text-slate-500 leading-7 text-base">
                                {product.description}
                            </p>

                            <div className="h-px bg-slate-200 my-8" />

                            {/* ================= FEATURES ================= */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                                        <Truck size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm">
                                            Free Delivery
                                        </p>

                                        <p className="text-xs text-slate-400">Orders over $100</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                                        <ShieldCheck size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm">
                                            Secure Payment
                                        </p>

                                        <p className="text-xs text-slate-400">100% protected</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <RotateCcw size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm">
                                            Easy Returns
                                        </p>

                                        <p className="text-xs text-slate-400">30 day returns</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <Headphones size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm">
                                            Support
                                        </p>

                                        <p className="text-xs text-slate-400">24/7 assistance</p>
                                    </div>
                                </div>
                            </div>

                            {/* ================= QUANTITY ================= */}
                            <div className="mt-8">
                                <p className="font-bold text-slate-800 mb-3">Quantity</p>

                                <div className="inline-flex items-center gap-5 border border-slate-200 rounded-xl p-2 bg-white shadow-sm">
                                    <button
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all duration-200 active:scale-90"
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <span className="font-bold text-lg w-8 text-center">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="w-10 h-10 rounded-lg bg-sky-600 text-white hover:bg-sky-700 flex items-center justify-center transition-all duration-200 active:scale-90"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* ================= ACTION BUTTONS ================= */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                {/* Add to Cart */}
                                <Link
                                    to="/cart"
                                    onClick={() => {
                                        addToCart({
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            quantity: quantity,
                                            image: product.images[0],
                                        });

                                        toast.success("Item added to cart!");
                                    }}
                                    className="group flex-1 flex items-center justify-center gap-3
                    bg-gradient-to-r from-sky-600 to-cyan-500
                    text-white py-4 rounded-xl
                    font-bold text-lg
                    shadow-lg
                    hover:shadow-2xl
                    hover:scale-[1.02]
                    hover:-translate-y-1
                    active:scale-95
                    transition-all duration-300"
                                >
                                    <ShoppingCart
                                        size={22}
                                        className="group-hover:scale-110 group-hover:rotate-6 transition-transform"
                                    />
                                    Add to Cart
                                </Link>

                                {/* Continue Shopping */}
                                <Link
                                    to="/products"
                                    className="flex-1 flex items-center justify-center gap-2
                    border-2 border-sky-600
                    text-sky-600
                    py-4 rounded-xl
                    font-bold text-lg
                    hover:bg-sky-50
                    hover:-translate-y-1
                    transition-all duration-300"
                                >
                                    Continue Shopping
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRODUCT DETAILS ================= */}
            <section className="max-w-7xl mx-auto px-6 pb-12">
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                            <Info size={22} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Product Details
                            </h2>

                            <p className="text-sm text-slate-400">
                                Everything you need to know about this product
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                            <p className="text-sm text-slate-400">Category</p>

                            <p className="font-bold text-slate-800 mt-1">
                                {product.category.name}
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                            <p className="text-sm text-slate-400">Product ID</p>

                            <p className="font-bold text-slate-800 mt-1">#{product.id}</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                            <p className="text-sm text-slate-400">Availability</p>

                            <p className="font-bold text-green-600 mt-1">In Stock</p>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 transition">
                            <p className="text-sm text-slate-400">Rating</p>

                            <p className="font-bold text-slate-800 mt-1">⭐ 4.8 / 5</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= REVIEWS ================= */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Customer Reviews
                            </h2>

                            <p className="text-slate-400 mt-2">
                                See what customers are saying about this product
                            </p>
                        </div>

                        <button className="px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 hover:-translate-y-1 transition-all duration-300">
                            Write a Review
                        </button>
                    </div>

                    {/* Rating Overview */}
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 text-center">
                            <p className="text-5xl font-extrabold text-slate-900">4.8</p>

                            <div className="flex justify-center gap-1 text-yellow-500 mt-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-sm text-slate-400 mt-2">
                                Based on 128 reviews
                            </p>
                        </div>

                        <div className="md:col-span-2 space-y-3">
                            {[
                                { star: 5, width: "90%" },
                                { star: 4, width: "65%" },
                                { star: 3, width: "30%" },
                                { star: 2, width: "10%" },
                                { star: 1, width: "5%" },
                            ].map((rating) => (
                                <div key={rating.star} className="flex items-center gap-3">
                                    <span className="text-sm font-medium w-10">
                                        {rating.star} ⭐
                                    </span>

                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-yellow-400 rounded-full"
                                            style={{ width: rating.width }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="space-y-6">
                        {[1, 2, 3].map((review) => (
                            <div key={review} className="border-t border-slate-100 pt-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-white flex items-center justify-center font-bold">
                                            U
                                        </div>

                                        <div>
                                            <p className="font-bold text-slate-800">Happy Customer</p>

                                            <div className="flex gap-1 text-yellow-500 mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={14} fill="currentColor" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <span className="text-sm text-slate-400">2 days ago</span>
                                </div>

                                <p className="text-slate-500 leading-7 mt-4">
                                    Great product! The quality is excellent and delivery was
                                    really fast. I am very happy with my purchase.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export { DetailAboutProduct };
