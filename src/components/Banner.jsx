import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="min-h-[80vh] main flex justify-between w-full relative scroll-smooth"
        id="mainBanner"
      >
        <div className="left w-full md:w-1/2 my-6 px-6 z-10 flex flex-col justify-evenly">
          <div className="text-7xl">
            <h1 className="z-10 font-extrabold">
              Best Online
              <br />
              Store
            </h1>
          </div>
          <div className="flex items-center my-4 cursor-pointer">
            <div className="p-2 text-white bg-primary rounded-md">
              Explore More
            </div>
            <div className="arrow w-10 h-10 rounded-md flex items-center justify-center mx-3 text-white bg-black">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl bold">What make Us Pro ?</h2>
            <ul className="text-xl">
              <li className="flex gap-2 ps-4 my-2">
                <div className="icon w-6 h-6 bg-orange-500 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p>100% Authentic</p>
              </li>
              <li className="flex gap-2 ps-4 my-2">
                <div className="icon w-6 h-6 bg-orange-500 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p>Free & Easy Returns</p>
              </li>
              <li className="flex gap-2 ps-4 my-2">
                <div className="icon w-6 h-6 bg-orange-500 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p>Nationwide Delivery</p>
              </li>
              <li className="flex gap-2 ps-4 my-2">
                <div className="icon w-6 h-6 bg-orange-500 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-check"></i>
                </div>
                <p>Safe Payment</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-0 z-1 right relative md:w-1/2 flex items-center justify-center">
          <div className="hover:scale-105 duration-300 shadow-lg hidden md:block absolute w-36 h-36 -left-60 z-0 opacity-70  top-0  -rotate-3 ">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="hover:scale-105 duration-300 shadow-lg hidden md:block absolute w-36 h-36 -left-36 bottom-0  rotate-6 z-10">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="hover:scale-105 duration-300 shadow-lg hidden md:block absolute w-72 h-72  -rotate-3 z-10">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full z-10 object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="hover:bg-slate-400 duration-150 hover:opacity-80 rounded-s-md h-40 w-1/2 bg-slate-300 z-0 absolute right-0 top-10 bg"></div>
        <div className="hover:bg-slate-400 duration-150 hover:opacity-80 rounded-e-md h-40 w-80 bg-slate-300 z-0 absolute bottom-0 bg"></div>
        <div className=" hover:bg-slate-400 duration-150 hover:opacity-80 rounded-md h-40 w-10 bg-slate-300 z-0 absolute right-0 bottom-0 bg"></div>
      </div>
    </>
  );
};

export default Banner;
