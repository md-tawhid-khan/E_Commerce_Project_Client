"use client"
import Image from "next/image";
import emptyCart from "@/assets/empty-cart.png"
// import CartProductCard from "../cartProductCart";
// import { useAppSelector } from "@/redux/hooks";
// import { ICartProduct, orderedProductSelector } from "@/redux/features/cartSlice";


const CartProducts = () => {
    // const products=useAppSelector(orderedProductSelector)

    return (
       <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-8 h-full row-span-3 p-10 space-y-5">
     <h1>this is cart products</h1>
    </div>
    );
};

export default CartProducts;