import { loadStripe } from "@stripe/stripe-js";

export const getClientSecret=async(orderId:string)=>{
   
    try {
     const   res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/payment/${orderId}/payment_intents`,{
    method:'POST',
    headers:{
        "Content-Type": "application/json",
    },}) ;
    
    return await res.json() ;
    
    } catch (error) {
        console.log(error) ;
    }
} ;

export const sendPaymentIntoVerify = async(paymentIntent:string) =>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/payment/verify`,{
             
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentIntent }),
          cache: "no-store",        
        }) 
        return await res.json() ;

    } catch (error) {
        console.log(error)
    }
}

export const stripePromise  = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string) ;
