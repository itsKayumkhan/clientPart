import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, logout } from "../actions/userAction";

const Navbar = () => {

  const { user, loading, error, isAuthenticated } = useSelector((s) => s.user);
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const [toggleState, setToggleState] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [toggleStateCate, setToggleStateCate] = useState(false);

  const {cartItems} = useSelector(s=>s.cart) 

  const handelSignOut = async () => {
    dispatch(logout());
    navigate("/login");
  };
  const handelMouseIn = () => setToggleState(true);
  const handelMouseOut = () => setToggleState(false);
if(error)
{
  toast.error(error);
  dispatch(clearErrors());
}
  return (
    <>
      <div
        className="flex flex-wrap w-full sticky top-0 z-50"
        onMouseLeave={() => setToggleStateCate(false)}
      >
        <section className="relative w-full " onMouseLeave={handelMouseOut}>
          {/* navbar */}
          <nav className="flex justify-center bg-primary text-white w-full px-2">
            <div className="px-2 py-3 flex w-full items-center justify-between">
              <Link
                className="text-xl md:text-2xl xl:3xl font-bold font-heading"
                to="/"
              >
                {/* <img className="h-9" src="logo.png" alt="logo"> */}
                E-commerce
              </Link>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 items-center justify-center font-semibold font-heading gap-6">
                <li>
                  <Link className="text-white hover:text-gray-200" to="/">
                    Home
                  </Link>
                </li>
                {user?.role === "user" && (
                  <>
                    <li>
                      <Link
                        className="text-white hover:text-gray-200"
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white hover:text-gray-200"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white hover:text-gray-200"
                        to="/products"
                      >
                        All Products
                      </Link>
                    </li>
                  </>
                )}

                {isAuthenticated ? (
                  <li>
                    <div
                      onClick={handelSignOut}
                      className="text-white hover:text-gray-200"
                    >
                      Sign Out
                    </div>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        className="text-white hover:text-gray-200"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white hover:text-gray-200"
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* Header Icons */}

              <div className="flex space-x-2 items-center ">
                {user && (
                  <>
                    {user?.role === "user" && (
                      <Link
                        className=" relative flex items-center hover:text-gray-200 w-16 bg-slate-700 rounded-xl h-8 p-2"
                        to="/cart"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="flex absolute -mt-5 ml-4">
                          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                        <span className="absolute right-2">
                           {cartItems?.length}
                        </span>
                      </Link>
                    )}
                    <div
                      className="flex items-center hover:text-gray-200"
                      to="/"
                      onMouseEnter={handelMouseIn}
                    >
                      <div
                        x-data="{ isOpen: true }"
                        className="relative inline-block "
                      >
                        <button className="relative z-10 flex items-center p-2 text-sm text-white focus:border-blue-500 focus:ring-opacity-4 focus:ring  focus:outline-none">
                          <span className="mx-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 hover:text-gray-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                        </button>
                        {/* Dropdown menu */}
                        {toggleState && (
                          <div
                            x-show="isOpen"
                            x-transition:enter="transition ease-out duration-100"
                            x-transition:enter-start="opacity-0 scale-90"
                            x-transition:enter-end="opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-100"
                            x-transition:leave-start="opacity-100 scale-100"
                            x-transition:leave-end="opacity-0 scale-90"
                            className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right  rounded-md shadow-xl  bg-gray-800"
                            onMouseLeave={handelMouseOut}
                          >
                            <div className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform  text-gray-300   hover:bg-gray-700  hover:text-white">
                              <img
                                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                                alt="jane avatar"
                              />
                              <div className="mx-1">
                                <h1 className="text-sm font-semibold text-gray-200">
                                  {user?.name}
                                </h1>
                                <p className="text-sm text-gray-400">
                                  {user?.email}
                                </p>
                              </div>
                            </div>
                            <hr className="  border-gray-700 " />

                            {user?.role === "user" && (
                              <>
                                <hr className="  border-gray-700 " />
                                <Link
                                  to="/profile"
                                  className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                                >
                                  Profile
                                </Link>
                                <hr className="  border-gray-700 " />
                                <Link
                                  to="/orders"
                                  className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                                >
                                  Orders
                                </Link>
                                <hr className="  border-gray-700 " />
                                <Link
                                  to=""
                                  className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                                >
                                  Help
                                </Link>
                              </>
                            )}
                            <hr className="  border-gray-700 " />
                            <Link
                              to="/login"
                              onClick={handelSignOut}
                              className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                            >
                              Sign Out
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="block navbar-burger self-center mr-12 lg:hidden"
                      onMouseEnter={() => {
                        setMobileNav(!mobileNav);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>

                      {mobileNav && (
                        <div
                          x-show="isOpen"
                          x-transition:enter="transition ease-out duration-100"
                          x-transition:enter-start="opacity-0 scale-90"
                          x-transition:enter-end="opacity-100 scale-100"
                          x-transition:leave="transition ease-in duration-100"
                          x-transition:leave-start="opacity-100 scale-100"
                          x-transition:leave-end="opacity-0 scale-90"
                          className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right  rounded-md shadow-xl  bg-gray-800"
                          onMouseLeave={handelMouseOut}
                        >
                          <hr className="  border-gray-700 " />

                          {user?.role === "user" && (
                            <>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/"
                                className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                Home
                              </Link>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/profile"
                                className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                Profile
                              </Link>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/products"
                                className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                All Products
                              </Link>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/contact"
                                className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                contact
                              </Link>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/orders"
                                className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                Order
                              </Link>
                              <hr className="  border-gray-700 " />
                              <Link
                                to="/help"
                                className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                              >
                                help
                              </Link>
                            </>
                          )}
                          <hr className="  border-gray-700 " />
                          <Link
                            to="/login"
                            onClick={handelSignOut}
                            className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform  text-gray-300  hover:bg-gray-700  hover:text-white"
                          >
                            Sign Out
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-prbg-primary" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close panel</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-prbg-primary">
                            <h3>
                              <a href="#">Throwback Hip Bag</a>
                            </h3>
                            <p className="ml-4">$90.00</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Salmon</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>
                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-prbg-primary">
                            <h3>
                              <a href="#">Medium Stuff Satchel</a>
                            </h3>
                            <p className="ml-4">$32.00</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Blue</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>
                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-prbg-primary">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> →</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
