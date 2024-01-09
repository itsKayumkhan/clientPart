import React from 'react'
import { Link } from 'react-router-dom'

const CartRow = ({product,removeCart}) => {

    return (
        <>
            <div
                
                className="hover:bg-slate-400 duration-300  relative md:justify-between mb-6 rounded-lg bg-white p-2 md:p-6 shadow-md flex z-0"
            >
               <Link to={`/product/${product?.product}`}> <img
                    src={product?.image}
                    alt="product-image"
                    className="w-36 h-32 rounded-lg sm:w-40"
                    loading="lazy"
                /></Link>
                <div className="ml-4 sm:flex sm:w-full sm:justify-evenly">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-primary">
                            {product?.name}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                            {product?.price} × {product?.quantity}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center space-x-4">
                            <p className="text-lg ">
                                ₹ {product?.price * product?.quantity}
                            </p>
                        </div>
                    </div>
                </div>
               {
                removeCart &&  <div
                className="z-10  top-2 right-2 p-4 absolute bg-white w-8 h-8 rounded-full  transition-all text-black flex items-center justify-center hover:bg-slate-600 hover:border-2 hover:text-white duration-100"
                onClick={() => removeCart(product?.product)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
               }

            </div>
        </>
    )
}

export default CartRow
