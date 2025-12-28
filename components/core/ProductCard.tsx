/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button }from "@/components/ui/button";

import Link from "next/link";
import {  ShoppingCart, Star } from "lucide-react";

// import { useAppDispatch } from "@/redux/hooks";
// import { addProduct, heartProduct } from "@/redux/features/cartSlice";

import { useRouter } from "next/navigation";



const ProductCard = ({product}:{product:any}) => {
//   const dispatch=useAppDispatch()
  const router = useRouter() ;

  const handleAddProduct=(product:any)=>{
    // dispatch(addProduct(product))
  } ;
  
   
  const handleBuyProduct=(product:any)=>{
    // dispatch(addProduct(product)) ;
    router.push('/cart') ;
    // console.log("handle buy product",product) ;
  }

  
     return (
          <Card className="p-3 ">
      <CardHeader className="relative p-0 h-48 ">
        <Image
          src='globe.svg'
          width={200}
          height={200}
          alt="product image"
          className="rounded-sm h-32 object-cover"
        />
          {product?.stock === 0 && (
          <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">
            Out of Stock
          </div>
        )}
      </CardHeader>
      <CardContent className=" p-0 mt-2">
        <Link href={`/products/${product?._id}`} passHref>
          <CardTitle
            title={product?.name}
            className="font-semibold cursor-pointer text-sm"
          >
            {product?.name.length > 30
              ? product?.name?.slice(0, 30) + "..."
              : product?.name}
          </CardTitle>
           </Link>

        
          
           </CardContent>

      <CardFooter className="block p-0">
        <div className="flex gap-2 items-center justify-between">
          <Button
          onClick={()=>handleBuyProduct(product)}
            disabled={product?.stock === 0}
            size="sm"
            variant="outline"
            className="w-32 cursor-pointer"
          > Buy Now
          </Button>
          <Button
            onClick={()=>handleAddProduct(product)}
            disabled={product?.stock === 0}
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center justify-center rounded-full cursor-pointer"
          >
            <ShoppingCart />
          </Button>
          
        </div>
        </CardFooter>
    </Card>
    )
}

export default ProductCard;