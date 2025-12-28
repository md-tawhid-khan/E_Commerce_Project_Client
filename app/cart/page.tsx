import CartBanner from "@/components/cartBanner/CartBanner";
import CartContainer from "@/components/core/CartContainer";
import CartProducts from "@/modules/cartProducts/CartProducts";
import PaymentDetails from "@/modules/paymentDetails/PaymentDetails";
import { getCurrentUser } from "@/services/auth";



const CartsPage = async() => {
    const user =await getCurrentUser() ;
    return (
        <CartContainer className="">
            <CartBanner  title="Cart Page" path="Home - Cart" />
            <div className="grid grid-cols-12 gap-8 my-5">
            <CartProducts/>
           
               <PaymentDetails user = {user}/> 
           
            
            </div>
        </CartContainer>
    );
};

export default CartsPage;