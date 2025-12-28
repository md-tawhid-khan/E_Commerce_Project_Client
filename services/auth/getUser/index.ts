/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

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

export const accessToken = async() =>{
         const cookiesStore=await cookies() ;
    const token=cookiesStore.get("accessToken")!.value;
    return token ;
}

