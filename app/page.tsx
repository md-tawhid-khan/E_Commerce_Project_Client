import CartBanner from "@/components/cartBanner/CartBanner";
import AllProducts from "@/modules/allProducts/AllProducts";


import { getAllProduct } from "@/services/product";




export default async function  Home() {

    

  const res = await getAllProduct() ;
  const products = res?.data ;

  return (
    <div className="container mx-auto">
            <CartBanner  title="all product" path="Home - order" />
             
      <AllProducts products={products}/>
     
        </div>
  );
}
