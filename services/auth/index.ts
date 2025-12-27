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