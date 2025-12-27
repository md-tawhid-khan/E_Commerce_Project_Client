"use client"
import { createOrder } from '@/services/order';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const OrderComponent = () => {
 const router = useRouter();
 const [successFailed, setSuccessFailed] = useState(false)
    
 const data = {  "data":{
        "products":[{
            "product_id" : "ca3bb8ee-d64d-4356-8655-f8827dac6bd6",
        "quantity" : 5 ,
        "price" : 4100
        },
        {
            "product_id" : "7d7b07de-368a-47ed-b8a0-8830d59c4556",
        "quantity" : 5 ,
        "price" : 4100
        }
        ]
      }
    }

    

  const handleOrderData = async()=>{  
        const res =await createOrder(data) ;
        // console.log(res) ;
       if(res.success){
           router.push('/payment')
       }
       else{
        setSuccessFailed(true)
       }

      
  }

    return (
        <div>
             <button onClick={()=>handleOrderData()} className='bg-blue-300 p-3 hover:bg-blue-400 cursor-pointer rounded-2xl' >OrderNow</button>
             {
              successFailed ? <p className='text-red-500 mt-3'>your order is not  created </p> : <p></p>
             }
        </div>
    );
};

export default OrderComponent;