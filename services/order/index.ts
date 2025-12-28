import { accessToken } from "../auth/getUser";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createOrder = async(orderData:any)=>{
    const token = await accessToken() ;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order/create-Order`,{
        method:"POST" ,
        headers:{
            "Content-Type": "application/json",
            Authorization:token
        },
        body:JSON.stringify(orderData)
        })
        return await res.json() ;
} ;