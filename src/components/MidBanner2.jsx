import React from "react";
import { Link } from "react-router-dom";

const MidBanner2 = () => {
  return (
    <>
      <div className="relative h-96 my-10 md:my-20 flex items-start justify-evenly">
        <img
          className=" bg-black blur-sm lg:blur-none absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg"
          alt=""
        />
        <div className="absolute w-full h-full bg-primary opacity-60"></div>
        <div className="z-10  text-white  w-full h-full flex flex-col items-start justify-center gap-4 ms-10">
          {/* <p className="md:text-2xl rounded-e-full bg-primary text-white px-3 py-2 h-12 center absolute border-white border-2 border-s-0 top-5 left-0 ">
            Limited Time Offer
          </p> */}
          <button
            className="md:text-2xl rounded-e-full bg-primary text-white px-3 py-2 center absolute border-white border-2 border-s-0 top-3 left-0   btn2   uppercase  tracking-wider leading-none overflow-hidden hover:text-teal-600 duration-300 text-lg h-10"
            type="button"
          >
            <span className="text-lg absolute inset-0 bg-white" />
            <span className=" absolute inset-0 flex justify-center items-center  ">
              Limited Offer
            </span>
            Limited Offer
          </button>

          <h1 className="text-4xl md:text-7xl mt-6 md:my-0">Special Edition</h1>
          <span className="text-lg md:w-1/2 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>

          <div className="inline-flex">
            <Link
              to="/products"
              className="h-12 flex items-center justify-center uppercase font-semibold px-8 rounded-s-full border border-white hover:bg-white hover:text-black transition duration-500 ease-in-out"
            >
              shop Now
            </Link>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border rounded-e-full border-l-0 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidBanner2;
