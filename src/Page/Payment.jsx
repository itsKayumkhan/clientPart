// import React, { useEffect, useRef, useState } from 'react'
// import Stepper from '../components/Stepper'
// import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { REACT_APP_API_URL } from '../../constance';
// import { createOrder } from './../actions/orderAction';
// import { Country } from 'country-state-city';
// import { loadStripe } from '@stripe/stripe-js';
// const Payment = () => {
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
//   const [apiKey, setApiKey] = useState('');
//   const dispatch = useDispatch();


//   // const stripe = loadStripe(apiKey);
//   const stripe = useStripe();
//   const elements = useElements();
//   const payBtn = useRef(null);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const paymentData = {
//     amount: Math.round(orderInfo.totalAmount * 100),
//     description: "Please enter",

//   };
//   const getCode = () => {
//     const countries = Country.getAllCountries();

//     const foundCountry = countries.find((country) => country.name === shippingInfo.country);

//     if (foundCountry) {
//       return foundCountry.isoCode;
//     } else {
//       console.log("Country not found.");
//       return null; // or any default value you prefer
//     }
//   }
//   console.log(shippingInfo)
//   const order = {
//     shippingInfo,
//     orderItems: cartItems,
//     itemsPrice: orderInfo.totalAmount - 40,
//     taxPrice: orderInfo.tax,
//     shippingPrice: orderInfo.shipping,
//     totalPrice: orderInfo.totalAmount,
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     payBtn.current.disabled = true;

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         `${REACT_APP_API_URL}/payment/process`,
//         paymentData,
//         config
//       );

//       const client_secret = data.client_secret;

//       if (!stripe || !elements) return;

//       const result = await stripe.confirmCardPayment(client_secret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement),
//           billing_details: {
//             name: user?.name,
//             email: user?.email,
//             address: {
//               line1: shippingInfo.address,
//               city: shippingInfo.city,
//               state: shippingInfo.state,
//               postal_code: shippingInfo.pinCode,
//               country: getCode(),
//             },
//           },

//         },

//       });

//       console.log(result)

//       if (result.error) {
//         payBtn.current.disabled = false;

//         toast.error(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           order.paymentInfo = {
//             id: result.paymentIntent.id,
//             status: result.paymentIntent.status,
//           };

//           dispatch(createOrder(order));

//           navigate("/success");
//         } else {
//           toast.error("There's some issue while processing payment ");
//         }
//       }
//     } catch (error) {
//       payBtn.current.disabled = false;
//       // toast.error(error);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch]);


//   return (
//     <>
//       <Stepper complete={3} />
//       <div>
//         <form onSubmit={submitHandler}>
//           <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
//             <div className="px-6 py-4 bg-gray-900 text-white">
//               <h1 className="text-lg font-bold">Credit Card</h1>
//             </div>
//             <div className="px-6 py-4">
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="card-number">
//                   Card Number
//                 </label>
//                 <CardNumberElement className='appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="expiration-date">
//                   Expiration Date
//                 </label>
//                 <CardExpiryElement className='appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
//                   CVV
//                 </label>
//                 <CardCvcElement className='appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
//                 {/* <input className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***" /> */}
//               </div>

//               <button ref={payBtn} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
//                 Pay Now
//               </button>
//             </div>
//           </div>





//         </form>
//       </div>
//     </>
//   )
// }

// export default Payment
