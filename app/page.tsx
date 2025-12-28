import CartBanner from "@/components/cartBanner/CartBanner";
import AllProducts from "@/modules/allProducts/AllProducts";
import OrderComponent from "@/modules/orderComponent";

import { getAllProduct } from "@/services/product";
// import { createOrder } from "@/services/order";



export default async function  Home() {

    

  const res = await getAllProduct() ;
  const products = res?.data ;

  return (
    <div className="container mx-auto">
            <CartBanner  title="all product" path="Home - order" />
             
      <AllProducts products={products}/>
      <OrderComponent/>
        </div>
  );
}
