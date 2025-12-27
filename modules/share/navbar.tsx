'use client'
import {   ShoppingBag } from "lucide-react";


import Link from "next/link";




import { Button } from "@/components/ui/button";
import SearchTerm from "../searchTerm/searchTerm";




export default function Navbar() {

// const handleLogOut=async()=>{
//   await logout()
//   setIsLoading(true)
//   if(privateRoutes.some((route)=>pathname.match(route))){
//     router.push("/")
//   }
// }

  return (
    <header className="border-b w-full bg-amber-50">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
        E_COMMERCE PROJECT
        </h1>
        {/*-------------- search bar ---------- */}
        <SearchTerm/>
       
        {/* ---------- cart and longing section ------------*/}
        <nav className="flex gap-2">
         
          <Link href='/cart'>
          <Button  variant="outline" className="rounded-full p-0 size-10 cursor-pointer indicator">
            <ShoppingBag />
            
          </Button>
          </Link>
           <Link href="/login">
          <Button variant="outline" className="rounded-full p-2 cursor-pointer ">
            log in 
          </Button>         
          </Link>
        
        </nav>
      </div>
    </header>
  );
}