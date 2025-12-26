import Payment from '@/component/payment';
import { getClientSecret } from '@/services/payment';
import React from 'react';

const PaymentPage = async({params}:{params:string}) => {
    // const order_id = params ;
    const order_id = "6749ef84-ccd0-4a69-8fe9-a6913f19d39b" ;
    const res = await getClientSecret(order_id) ;
    const clientSecret = res.data.clientSecret ;
    console.log(res.data.clientSecret) ;
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            
            <p className='text-yellow-600 mb-2'>------------- please payment to buy your order -------------------</p>
            <h1 className='text-3xl uppercase border-y-4 py-4'>Payment</h1>
            <Payment client_secret={clientSecret} />
        </div>
    );
};

export default PaymentPage;