import Payment from '@/modules/stripe_Payments/payment';
import { getClientSecret } from '@/services/payment';


interface Props {
  params: { orderId : string  };
}

const page = async({params}: Props) => {

    const orderId = await params

    // console.log(orderId.orderId) ;
     
    const res = await getClientSecret(orderId.orderId) ;
    const clientSecret = res?.data?.clientSecret ;
    console.log(clientSecret) ;
    
    
    return (
        
            <div className='mx-auto text-center md:w-4/12 my-8'>
            
            <p className='text-yellow-600 mb-2'>------------- please payment to buy your order -------------------</p>
            <h1 className='text-3xl uppercase border-y-4 py-4'>Payment</h1>
            <Payment client_secret={clientSecret} />
        </div>
      
    );
};

export default page;