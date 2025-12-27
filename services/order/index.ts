/* eslint-disable @typescript-eslint/no-explicit-any */
export const createOrder = async(orderData:any)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order/create-Order`,{
        method:"POST" ,
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(orderData)
        })
        return await res.json() ;
} ;