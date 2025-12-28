
export const getAllProduct = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        }
    }) ;
    return await res.json() ;
}