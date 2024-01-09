import React, { useState } from "react";
import { GET_IMG, LOADER_IMG_URL, REACT_APP_API_URL } from "../../constance";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { addItemsToCart } from "../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ product, equal = false, loading }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((s) => s.user);
  const navigate = useNavigate();
  
  const addCart = () => {
    if (isAuthenticated) {
      dispatch(addItemsToCart(product?._id, 1));
      toast.success("Product add into your cart");
    } else {
      navigate('/login');
    }
  };



  return (
    <>
      {loading ? (
        <>
          <img
            src={LOADER_IMG_URL}
            alt=""
            className="h-full w-full object-cover"
          />
        </>
      ) : (
        <div className={equal && "lg:w-1/3 md:w-1/2 w-full my-2"}>
          <div className="card h-80 mx-3  duration-300 relative">
            <div className="w-full h-full -z-10 hoverCard">
              <img
                src={product?._id ? product?.images?.[0]?.url : LOADER_IMG_URL}
                alt="..."
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <Link
                to={`/product/${product?._id}`}
                className={`cardBox w-full flex flex-col z-1 justify-evenly p-2  h-full absolute top-0 left-0  duration-300 opacity-0 
             hover:opacity-100
             `}
              >
                <div className="h-full w-full bg-black opacity-40 absolute top-0 left-0 z-0"></div>
                <div className="text-2xl z-10 font-bold text-white  text-shadow-xl capitalize">
                  <h1>{product?.name}</h1>
                </div>
                <div className="z-10">
                  <p className="font-thin line-clamp-2 text-white  text-shadow-xl capitalize">
                    {product?.description}
                  </p>
                </div>
                <div className="z-10 text-white font-bold text-shadow-xl flex items-center justify-between">
                  <span className="px-2 py-0.5 font-medium tracking-wide text-slate-500 bg-green-100 rounded-full">
                    {product?.ratings}
                  </span>
                  <span className="text-3xl pe-6">₹ {product?.price}</span>
                </div>
              </Link>
              <div className="z-10 absolute bottom-0 w-full flex justify-evenly items-center ">
                <button
                  onClick={addCart}
                  className=" center w-1/2 h-full text-md text-white bg-primary font-bold text-shadow-xl  py-1  duration-200 hover:scale-95 hover:rounded-s-full border-2 border-b-0 border-white hover:rounded-e-full"
                >
                  Add to Cart
                </button>
                {/* <button onClick={()=>createOrder(product?.price,product?._id)} className="border-s-2 center w-1/2 text-md   border-2 border-primary  py-1 bg-primary text-white font-bold text-shadow-xl  hover:bg-white hover:text-black hover:border-white duration-200 hover:scale-95">
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
