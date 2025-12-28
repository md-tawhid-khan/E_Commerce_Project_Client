/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { orderedProductSelector } from "@/redux/feature/cartSlice";
import { useAppSelector } from "@/redux/hook";
import CartProductCard from "../cartProductCart";




const CartProducts = () => {
    const products=useAppSelector(orderedProductSelector)
    

    return (
       <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-8 h-full row-span-3 p-10 space-y-5">
      {products.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <h1 className="text-red-500">you do not select any  product to buy</h1>
          </div>
        </div>
      )}
      {products.map((product: any) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
    );
};

export default CartProducts;