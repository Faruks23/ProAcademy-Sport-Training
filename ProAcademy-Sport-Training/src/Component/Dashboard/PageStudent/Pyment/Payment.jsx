import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import DHeading from '../../../Shared/DashboardHeading/DHeading';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const location = useLocation()
  const item = location?.state;
  
//  console.log(item.StudentEmail, "its");
  return (
    <div className="w-full">

      <DHeading title={"payment now"}></DHeading>
      <Elements stripe={stripePromise}>
        <CheckOut item={item} />
      </Elements>
    </div>
  );
};

export default Payment;