import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import Shipping from "./Shipping";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from './../actions/orderAction';
import CartRow from "../components/CartRow";
import Error from './Error';

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const { cartItems, shippingInfo } = useSelector((s) => s.cart);
  const { user, loading } = useSelector((s) => s.user);
  const date = new Date();
  const totalAmount = () => {
    try {
      const number = cartItems.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      );
      setTotal(number);
    } catch (error) { }
  };


  const processToPayment = async () => {
    try {
      const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: total,
        userId: user?._id,
        shippingPrice: 40,
        amount: total + 40,
      };

      // Dispatching the order creation action
      dispatch(createOrder(order));

    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <>
     { cartItems.length > 0 &&  <div>
        <Stepper complete={1} />
      </div>}
      <div>
        {loading ? (
          <Spinner text={false} />
        ) : (
          <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
              <h1 className="text-3xl   lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Order In Processing
              </h1>
              <p className="text-base font-medium leading-6 text-gray-600">
                {date.toLocaleString()}
              </p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">
                    Customer’s Cart
                  </p>
                  <div className="rounded-lg w-full h-96 overflow-scroll my-10">
                    {
                      cartItems?.length > 0 ? cartItems?.map((product, i) => (
                        <CartRow product={product} key={i} />
                      )) : <Error code={false} head="there is no cart available please select the items for buy " />
                    }
                  </div>
                </div>

               
              { cartItems.length > 0 && <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Summary
                    </h3>
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                      <div className="flex justify-between w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          ₹{total}
                        </p>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          ₹ 40
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                        Total
                      </p>
                      <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                        ₹{total + 40}
                      </p>
                    </div>
                  </div>
                </div>}
              </div>
             { cartItems.length > 0 &&  <div className=" bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 className="text-xl font-semibold leading-5 text-white">
                  Customer
                </h3>
                <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                  <div className="flex flex-col justify-start items-start flex-shrink-0">
                    <div className="flex flex-col justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                      <img
                        src={user?.avatar?.url}
                        alt="avatar"
                        loading="lazy"
                      />
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-base  font-semibold leading-4 text-left text-white">
                          {user?.name}
                        </p>
                        <p className="text-base  font-semibold leading-4 text-left text-white">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center  text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7L12 13L21 7"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="cursor-pointer text-sm leading-5">
                        {shippingInfo?.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between xl:h-full items-stretch w-full lg:flex-col mt-6 md:mt-3">
                    <div className="w-1/2 lg:w-full flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start ">
                      <div className="w-full flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                        <p className="text-base  font-semibold leading-4 text-center md:text-left text-white">
                          Shipping Address
                        </p>
                        <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                          {shippingInfo.address}
                        </p>
                        <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                          {shippingInfo.city}
                        </p>
                        <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                          {shippingInfo.state}
                        </p>
                        <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                          {shippingInfo.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-2 w-1/2 lg:w-full">
                      <button className="hover:rounded-lg hover:bg-slate-300 duration-300 hover:text-lg mt-6 md:mt-0  py-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-full 2xl:w-full text-base font-medium leading-4 text-gray-800">
                        <Link to="/shipping">Edit Address</Link>
                      </button>


                      <button className="hover:rounded-lg hover:bg-slate-300 duration-300 hover:text-lg mt-6 md:mt-0  py-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800  w-full 2xl:w-full text-base font-medium leading-4 text-gray-800">
                        <div onClick={processToPayment}>Payment</div>
                      </button>

                    </div>

                  </div>

                </div>
              </div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmOrder;
