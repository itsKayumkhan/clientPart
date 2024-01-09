import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { getOrderDetails } from '../actions/orderAction';
import { Link, useParams } from 'react-router-dom';
import Error from './Error';
import CartRow from '../components/CartRow';

const OrderDetails = () => {
    const { id } = useParams();
    const { order, loading } = useSelector(s => s.orderDetails);
    const { user } = useSelector(s => s.user)
    const dispatch = useDispatch()
    console.log(order)
    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [dispatch])
    return (
        <>
            {loading ? (
                <Spinner text={false} />
            ) : (
                <div className="min-h-screen md:px-20 ">
                    <div className="bg-primary text-white w-full py-3 px-1 md:px-2 my-6 flex justify-between items-center">
                        <h1 className=" text-xl md:text-2xl">
                             <span className="capitalize"> {user?.name}'s order details</span>
                        </h1>
                        <h1 className=" text-lg md:text-xl">
                             <span className="uppercase"> {new Date(order?.createdAt).toLocaleString()}</span>
                        </h1>
                    </div>
                    <h1>Order Items Count : {order?.orderItems?.length}</h1>
                    <div className="h-full mx-auto w-full justify-center md:px-6 lg:flex md:space-x-6 xl:px-0">
                        {order?.orderItems?.length > 0 ? (
                            <div className="rounded-lg md:w-full h-96 overflow-scroll my-10">
                                {order?.orderItems?.map((product, i) => (
                                   <CartRow product={product} key={i}/>
                                ))}
                            </div>
                        ) : (
                            <Error head="There are no cart's items available" code={false} />
                        )}
                        {/* Sub total */}
                        {order?.orderItems?.length > 0 && (
                            <div>  <div className=" bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
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
                                                {order.shippingInfo?.pinCode}
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
                                                    {order.shippingInfo.address}
                                                </p>
                                                <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                                                    {order.shippingInfo.city}
                                                </p>
                                                <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                                                    {order.shippingInfo.state}
                                                </p>
                                                <p className="w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-white">
                                                    {order.shippingInfo.country}
                                                </p>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                                <div className="sticky top-0 mt-6 h-3/4 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full lg:w-1/3">
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-gray-700">Subtotal</p>
                                        <p className="text-gray-700">₹{order.itemsPrice}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Shipping</p>
                                        <p className="text-gray-700">₹40</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="text-lg font-bold">Total</p>
                                        <div className>
                                            <p className="mb-1 text-lg font-bold">₹{order.totalPrice}</p>
                                            <p className="text-sm text-gray-700">
                                                including Delivery Charge
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderDetails
