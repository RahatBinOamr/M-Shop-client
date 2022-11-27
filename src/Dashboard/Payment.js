import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hook/UseTitle';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)
const Payment = () => {
    useTitle('payment')
    const booking  = useLoaderData()
    console.log(booking)
    const {title,price,date}=booking
    return (
        <div>
             <h3 className="text-3xl">Payment for {title}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {date} </p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;