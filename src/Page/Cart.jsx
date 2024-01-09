
import React, { useContext, useEffect, useState } from "react";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../actions/cartAction";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import CartRow from "../components/CartRow";
import Shipping from './Shipping';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(false);
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const { cartItems } = useSelector((s) => s.cart);
  const { user, loading } = useSelector((s) => s.user);
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
  // const handelCheckOut = ()=>{
  //   // navigate('/shipping');
  //   setShipping(true)
  // }
  const removeCart = async (id) => {
    dispatch(removeItemsFromCart(id));
    toast.success("cart removed successfully");
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems, dispatch]);

  return (
    <>
      {loading ? (
        <Spinner text={false} />
      ) : (
        <div className="min-h-screen relative">
          <div className="bg-primary text-white w-full py-3 px-1 md:px-2 my-6 flex justify-between items-center">
            <h1 className=" text-xl md:text-2xl">
              Hello <span className="uppercase"> {user?.name}</span>
            </h1>
            <span className="md:pe-6">{`You Have ${cartItems?.length} item in Your Cart `}</span>
          </div>
          <div className="h-full mx-auto w-full justify-center md:px-6 lg:flex md:space-x-6 xl:px-0">
            {cartItems?.length > 0 ? (
              <div className="rounded-lg md:w-full h-96 overflow-scroll my-10">
                {cartItems?.map((product, i) => (
                  <CartRow product={product} key={i} removeCart={removeCart}/>
                ))}
              </div>
            ) : (
              <Error head="There are no cart's items available" code={false} />
            )}
            {/* Sub total */}
            {cartItems?.length > 0 && (
              <div className="sticky top-0 mt-6 h-3/4 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full lg:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">₹{total}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">₹40</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className>
                    <p className="mb-1 text-lg font-bold">₹{total + 40}</p>
                    <p className="text-sm text-gray-700">
                      including Delivery Charge
                    </p>
                  </div>
                </div>
                <button onClick={() => setShipping(true)} className="mt-6 w-full rounded-md bg-slate-500 py-1.5 font-medium text-blue-50 hover:bg-slate-800 duration-300">
                  Check out
                </button>
              </div>
            )}
          </div>

          {shipping && <div className="absolute top-0 center flex-col w-full h-full">
            <div className=" bg-black opacity-10 absolute top-0 left-0 w-full h-full z-0"></div>
            <div
              className="z-10  top-10 right-28 text-xl p-4 absolute bg-white w-12 h-12 rounded-full  transition-all text-black flex items-center justify-center hover:bg-slate-600 hover:border-2 hover:text-white duration-100"
              onClick={() => setShipping(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>

            <div className="z-10 bg-white p-4 rounded-md"><Shipping /></div>          </div>}
        </div>
      )}
    </>
  );
};

export default Cart;
