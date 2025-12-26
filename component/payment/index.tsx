"use client"
import Checkout from '../checkout';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/services/payment';



const Payment = ({client_secret}:{client_secret:string}) => {
    return (
        <div>
            <h1>this is also payment page component</h1>
            <Elements 
            stripe={stripePromise}
             options={{
        clientSecret: client_secret, 
      }} 
           >
            <Checkout />
            </Elements>
        </div>
    );
};

export default Payment;