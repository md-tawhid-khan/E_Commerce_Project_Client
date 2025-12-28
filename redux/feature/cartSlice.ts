/* eslint-disable @typescript-eslint/no-explicit-any */

import {  createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";






interface InitialState {
      products:any;
 
     
}
const initialState:InitialState={
    products:[],
  
    }

//  ---------------------------------------







// --------------------------------------

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        
        

        addProduct:(state,action)=>{
           
           
            const productToAdd=state.products.find((product:any)=>product?.id==action.payload.id)
                
            if(productToAdd){
                productToAdd.quantity += 1;
                return ;
            }
            state.products.push({ ...action.payload, quantity: 1 });
        },

        incrementOrderQuantity:(state,action)=>{
            console.log(state.products) ;
            const productToIncrement=state.products.find((product:any)=>product.id==action.payload)

            if(productToIncrement){
                productToIncrement.quantity +=1
                return
            }
        },
        decrementOrderQuantity:(state,action)=>{
            const productToDecrement=state.products.find((product:any)=>product.id==action.payload)
            if(productToDecrement && productToDecrement.quantity>1){
                productToDecrement.quantity -= 1
                return 
            }
        },

        removeProduct:(state,action)=>{
            state.products =state.products.filter((product:any)=>product.id !== action.payload)
            
        },

      
        clearCart: (state) => {
      state.products = [];
     
        },
    },

      
    
})



export const orderedProductSelector=(state:RootState)=>{
     return state.cart.products ;
}

export const orderSelector=(state:RootState)=>{
    return {
        products:state.cart.products.map((product:any)=>({
            product_id:product.id,
            quantity:product.quantity,
            price:product.price 
            
        })),
        
    }
}

export const subTotalSelector=(state:RootState)=>{
     return state.cart.products.reduce((acc:any, product:any) => {
 
      return acc + product.price * product.quantity;
    
  }, 0);
}


export const cartCountSelector = (state: RootState) => {
  return state.cart.products.reduce((total:any, product:any) => {
    return total + product.quantity;
  }, 0);
};




export const {addProduct,incrementOrderQuantity,decrementOrderQuantity,clearCart,removeProduct}=cartSlice.actions

export default cartSlice.reducer ;