import PaymentHistory from '@/modules/paymentHistory';
import { sendPaymentIntoVerify } from '@/services/payment';


interface Props {
    searchParams:{
        redirect_status?:string,
        payment_intent?:string
    }
    
}

const PaymentHistoryPage = async({searchParams}:Props) => {
       const { redirect_status, payment_intent } = await searchParams ;

       let verified:boolean = false ;

       

        let error :string | null = null  ;

        if(redirect_status == "succeeded" && payment_intent){
             const response = await sendPaymentIntoVerify(payment_intent) ;
            //   console.log(response) ;
             verified = response.success ;
        } else{
            error = "payment cancelled or failed"
        }


     return (
        <div>
            
                <PaymentHistory verified={verified} error = {error}/>
            
            

            
        </div>
    );
   
};

export default PaymentHistoryPage;