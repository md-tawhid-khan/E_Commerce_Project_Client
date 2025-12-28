/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button";
import { clearCart, orderedProductSelector,  orderSelector,  subTotalSelector } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { createOrder } from "@/services/order";

import { useRouter } from "next/navigation";
import { useState } from "react";

//import { citySelector, clearCart, couponSelector, discountAmountSelector, grandTotalSeclector, orderedProductSelector, orderSelector, shippingAddressSelector, shippingCostSelector, subTotalSelector, } from "@/redux/features/cartSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { createOrder } from "@/services/cart";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";



const PaymentDetails = ({user}:{user:any}) => {

  // console.log({user})

  const [successFailed, setSuccessFailed] = useState(false)

  const subTotal=useAppSelector(subTotalSelector) 



  // const grandTotalCost=useAppSelector(grandTotalSeclector)

  const products=useAppSelector(orderSelector)

  // const products=useAppSelector(orderedProductSelector)

     

   const orderInfo = {data:{products:products}} ;

  //  console.log(orderInfo) ;

  const dispatch=useAppDispatch()
  


  const router=useRouter()
        
    const handleOrder=async()=>{
     
      try {
        if(!user){
           router.push("/login")
           throw new Error("user in missing")
        }
          
      
      // @ts-expect-error Because products can be any type from backend
       if(products.length === 0){
        throw new Error("whart are you order, order card is empty")
       }
  
               const res =await createOrder(orderInfo) ;
               console.log({res}) ;
              if(res.success){
                  router.push('/payment/payment_method')
                   dispatch(clearCart());
              }
              else{
               setSuccessFailed(true)
              }
          
     

      //  const res=await createOrder(couponData)
      //  console.log(res)
      
      //  if(res.success){
      //     toast.success(res.message,{id:orderLoading})
      //      dispatch(clearCart());
      //   router.push(res.data.paymentUrl);
      //  }

      //  if(!res.success){
      //       toast.error(res.message,{id:orderLoading} )
           
      //  }

      } 
      catch (error:any) {
         
      }
      //  console.log(" payment details ")
    }
    return (
        <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{subTotal}</p>
         
        </div>
   
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{subTotal}</p>
       
      </div>
      <Button
        onClick={()=>handleOrder()}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>

      {
              successFailed ? <p className='text-red-500 mt-3'>your order is not  created </p> : <p></p>
             }
    </div>
    );
};

export default PaymentDetails;