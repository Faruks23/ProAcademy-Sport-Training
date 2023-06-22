
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { data } from "autoprefixer";
import "./CheckOut.css";
const CheckOut = ({item}) => {

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const [axiosSecure] = useAxiosSecure();
  const {user}=useContext(AuthContext)

  const stripe = useStripe();
  const elements = useElements();
  const [processenig, SetProcesing] = useState(false)
  const [transactionId,setTransaction] = useState('')
  const prices=item?.price


  useEffect(() => { 

    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ prices }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
        
      });

  },[])








   const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });



    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }



   SetProcesing(true)

   const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
     clientSecret,
     {
       payment_method: {
         card:card,
         billing_details: {
           name: user?.displayName || 'anonymous',
           email:user?.email || 'anonymous',
         },
       },
     }
    );
    if (confirmError) {
      console.log(confirmError);
     }
      SetProcesing(false)

     if (paymentIntent.status=== "succeeded") {
       const transactionId = paymentIntent.id;
       setTransaction(transactionId);
       const payment = {
         className: item.className,
         classImage: item.classImage,
         email: user?.email,
         transactionId: paymentIntent.id,
         prices,
         data: new Date(), 
         quantity: 1,
         availableSeats: item.availableSeats,
         _id: item._id,
       };

       fetch(
         "https://b7a12-summer-camp-server-side-faruks23.vercel.app/payment",
         {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(payment),
         }
       )
         .then((res) => res.json())
         .then((data) => {
           console.log(data, "last fetched");
         });
     }
      
    console.log(paymentIntent,"right");
    

  };
 
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[100vh] ">
      <form className="checkForm" onSubmit={handleSubmit}>
        <p className="mb-5">Total: {prices && prices} USD</p>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary checkBtn"
          type="submit"
          disabled={!stripe || !clientSecret || processenig}
        >
          Pay
        </button>
        <p className="text-white font-bold mt-7">{cardError}</p>
        {transactionId && (
          <p className="text-white font-bold mt-7">Transaction Success : {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOut;








// const CheckOutFrom = ({ prices }) => {
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState();
//   const [axiosSecure] = useAxiosSecure();
//   const {user}=useContext(AuthContext)

//   const stripe = useStripe();
//   const elements = useElements();
//   const price = prices;
 
//   const totalPrice = parseFloat(price).toFixed(2);
//   // const number = 34;
//   // const string = number.toString();
//   // console.log(string, number);
//   // console.log(price,totalPrice);
//   useEffect(() => {
//     console.log(totalPrice, "form use effect");
//     axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
//       console.log(res, "client created");
//       setClientSecret(res.data.clientSecret);
//     });
//   }, [price]);
//   console.log('client secret', clientSecret);

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card == null) {
//       return;
//     }

//     console.log("card", card);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });



//     if (error) {
//       console.log("[error]", error);
//       setCardError(error.message);
//     } else {
//       setCardError("");
//       console.log("[PaymentMethod]", paymentMethod);
//     }





//    const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
//      clientSecret,
//      {
//        payment_method: {
//          card:card,
//          billing_details: {
//            name: user?.displayName || 'anonymous',
//            email: user?.email || 'anonymous',
//          },
//        },
//      }
//     );
//     if (confirmError) {
//       console.log(confirmError);
//     }
//     console.log(paymentIntent);
    

//   };
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <p className="mb-5">Total: {price} USD</p>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button
//         className="btn btn-primary"
//         type="submit"
//         disabled={!stripe || !clientSecret}
//       >
//         Pay
//       </button>
//       <p className="text-red-500 mt-7">{cardError}</p>
//     </form>
//   );
// };

// export default CheckOutFrom;
