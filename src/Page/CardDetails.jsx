import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_IMG, LOADER_IMG_URL, REACT_APP_API_URL } from "../../constance";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAllReviews,
  getProductDetails,
} from "../actions/productAction";
import { addItemsToCart } from "./../actions/cartAction";
import Review from "../components/Review";
import Stars from "../components/Stars";
import { newReview } from './../actions/productAction';

const CardDetails = () => {
  const { id } = useParams();
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (error) {
    toast.error(error);
    dispatch(clearErrors());
  }
  const addCart = () => {
    if (error) return toast.error(error);
    dispatch(addItemsToCart(id, productCount));
    toast.success("Product add into your cart");
  };

 

  // console.log(product?.reviews[0].rating)


    const addReview = (reviewData) =>{
    dispatch(newReview(reviewData))
    toast.success("Review added successfully")
    
  }

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch,loading]);
  return (
    <>
      {loading ? (
        <>
          <img
            src={LOADER_IMG_URL}
            alt="product"
            className="w-full h-full object-cover"
          />
        </>
      ) : (
        <div className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4 gap-3">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      product?._id ? product?.images?.[0]?.url : LOADER_IMG_URL
                    }
                    alt="Product Image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4 justify-evenly md:flex flex-col h-full md:h-96 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">
                  {product?.name}
                </h2>
                <div className="w-full flex items-center">
                  <Stars star={product.ratings} />
                  <h1 className="ms-2">{`(number of reviews ${product.numOfReviews})`}</h1>
                </div>
                <div className="md:flex mb-4 items-center justify-start">
                  <div className="mr-4 flex items-center">
                    <span className="font-bold text-gray-700 mx-2">Price:</span>
                    <span className="text-gray-600">₹{product?.price}</span>
                  </div>
                  <div className="flex md:items-center md:justify-center">
                    <span className="font-bold text-gray-700 mx-2">
                      Availability:
                    </span>
                    {product.Stock > 0 ? (
                      <>
                        <span className="text-gray-600">In Stock</span>
                        <span className="text-green-500 text-xl ms-1 flex items-center justify-center">
                          <li></li>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-gray-600">Out of Stock</span>
                        <span className="text-red-500 text-xl">
                          <li></li>
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex  items-center">
                  <span className="mr-3">Quantity</span>
                  <div className="relative flex w-36 border-2 border-slate-600">
                    <div
                      onClick={() => {
                        setProductCount((prevCount) =>
                          prevCount > 1 ? prevCount - 1 : 1
                        );
                      }}
                      className="w-[25%] cursor-pointer bg-slate-700 text-white flex justify-center items-center"
                    >
                      -
                    </div>
                    <div className=" w-[50%] ">
                      <input
                        type="number"
                        value={productCount}
                        readOnly
                        className="w-full  outline-none appearance-none text-center"
                      />
                    </div>
                    <div
                      onClick={() => {
                        if (product?.Stock <= productCount)
                          return toast.error(
                            `Currently ${product.Stock} products are in stock`
                          );

                        setProductCount((p) => p + 1);
                      }}
                      className="cursor-pointer w-[25%]  bg-slate-700  flex justify-center items-center text-white"
                    >
                      +
                    </div>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700">
                    Product Description:
                  </span>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3 capitalize">
                    {product?.description}
                  </p>
                </div>
                {isAuthenticated ? (
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button
                        onClick={addCart}
                        className="w-full bg-primary text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl font-bold capitalize text-red-600">
                    NOTE :Please Login First to Buy or Use cart
                    <br />
                    <Link to="/login" className="underline text-blue-500">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
         <div className="">
         <Review addReview={addReview} product={product} />
         </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
