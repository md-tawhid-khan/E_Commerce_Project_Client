/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// import { Button } from "@/components/ui/button";
import { clearCart,   orderSelector,  subTotalSelector } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { createOrder } from "@/services/order";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DropdownMenuRadioGroupDemo } from "./paymentModal";





const PaymentDetails = ({user}:{user:any}) => {

   const [order_id, setOrder_id] =useState<string | null>(null)

  const [successFailed, setSuccessFailed] = useState('')

  const subTotal=useAppSelector(subTotalSelector) 
  



 
  const products=useAppSelector(orderSelector)

  

     

   const orderInfo = {data:{products:products}} ;

 

  const dispatch=useAppDispatch()
  


  const router=useRouter()
        
    const handleOrder=async()=>{
     
      try {
        if(!user){
           router.push("/login")
           throw new Error("user in missing")
        }
          
      console.log('payment details') ;

      // @ts-expect-error Because products can be any type from backend
       if(products.length === 0){
        throw new Error("whart are you order, order card is empty")
       }
  
               const res =await createOrder(orderInfo) ;
            
              if(res.success){
                setOrder_id(res.data.id)
                 
                   dispatch(clearCart());
              }
              else{
               setSuccessFailed(res.message)
              }
          
      } 
      catch (error:any) {
         
      }
     
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

      <DropdownMenuRadioGroupDemo
        onOpen={handleOrder}
        orderId={order_id  }
      />

               <p className='text-red-500 mt-3'>{successFailed} </p> 
            
    </div>
    );
};

export default PaymentDetails;