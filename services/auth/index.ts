import { cookies } from "next/headers";
import  { jwtDecode } from "jwt-decode";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const userLogin = async(userData:any)=>{
     const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/login`,{
        method:"POST" ,
        headers:{
            "Content-Type": "application/json",
        },
        credentials: "include",
        body:JSON.stringify(userData)
     })

     return await result.json() ;
}

export const userRegister = async(userData:any)=>{
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/register`,{
        method:"POST" ,
        headers:{
            "Content-Type": "application/json",
        },
       
        body:JSON.stringify(userData)
     })

     return await result.json() ;
} ;

export const getCurrentUser=async()=>{
   const accessToken=(await cookies()).get('accessToken')?.value;
   if(!accessToken){
    return null
   }
   try {
    const user=jwtDecode(accessToken as any)
   return user
   } catch (error) {
     console.error("Invalid token", error);
    return null;
   }
}

