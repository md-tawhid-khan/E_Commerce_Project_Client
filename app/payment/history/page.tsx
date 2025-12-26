import PaymentHistory from '@/component/paymentHistory';
import { sendPaymentIntoVerify } from '@/services/payment';


interface Props {
    searchParams:{
        redirect_status?:string,
        payment_intent?:string
    }
    
}

const PaymentHistoryPage = async({searchParams}:Props) => {
       const { redirect_status, payment_intent } = await searchParams

       let verified:boolean = false ;

       let  getResponse  = null ;

        let error :string | null = null  ;

        if(redirect_status == "succeeded" && payment_intent){
             const response = await sendPaymentIntoVerify(payment_intent) ;
              getResponse =response ;
             verified = response.success ;
        } else{
            error = "payment cancelled or failed"
        }

        console.log({getResponse}) ;

     return (
        <div>
            {
                !getResponse?<PaymentHistory verified={verified} error = {error}/>: <div className='text-center'>
                    <h1 className=' my-7'>✅ Payment Successful</h1>
                    <h1>order_id :{getResponse?.data?.order_id} </h1>
                    <p>transaction_id : {getResponse?.data?.transaction_id}</p>
                    <p>status : {getResponse?.data?.status}</p>
                    </div>
            }
            

            
        </div>
    );
   
};

export default PaymentHistoryPage;