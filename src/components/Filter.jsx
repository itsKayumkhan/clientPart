import React, { useState } from "react";
import { Link } from "react-router-dom";

const category = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Filter = ({
  setCategory,
  handelFilterPrice,
  handelFilterClear,
  setKeyword,
  keyword,
  setRating
}) => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [togglePrice, setTogglePrice] = useState(false);
  const [toggleRating, setToggleRating] = useState(false);
  const [price, setPrice] = useState([0, 25000]);

  const handleInput = (search) => {
    setKeyword(search);
  };

  return (
    <div className="w-full overflow-auto me-10">
      <div className="text-white text-4xl top-5 left-4 cursor-pointer hidden">
        <i className="bi bi-filter-left px-2 bg-primary rounded-md" />
      </div>
      <div className="sidebar p-2 text-center bg-primary min-h-screen overflow-auto z-10">
        <div className="py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm" />
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => handleInput(e.target.value)}
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="my-2 bg-gray-600 h-[1px]" />

        <div
          onClick={handelFilterClear}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 gap-3 duration-300 cursor-pointer hover:bg-slate-600 text-white"
        >
          <i className="fa-solid fa-xmark"></i>
          <span className="text-sm text-gray-200 font-bold">Clear All </span>
        </div>

        <div className="my-2 bg-gray-600 h-[1px]" />

        <Link
          to="/"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 gap-3 duration-300 cursor-pointer hover:bg-slate-600 text-white"
        >
          <i className="fa-solid fa-house"></i>
          <span className="text-sm text-gray-200 font-bold">Home</span>
        </Link>

        <div className="my-2 bg-gray-600 h-[1px]" />

        <div
          onClick={() => setToggleCategory((p) => !p)}
          className="py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer gap-3 hover:bg-slate-600 text-white"
        >
          <i className="fa-solid fa-layer-group"></i>
          <div className="flex justify-between w-full items-center gap-3">
            <span className="text-sm  text-gray-200 font-bold">Category</span>
            <span className="text-sm rotate-180 duration-100" id="arrow">
              {toggleCategory ? (
                <i className="fa-solid fa-chevron-down"></i>
              ) : (
                <i className="fa-solid fa-chevron-up"></i>
              )}
            </span>
          </div>
        </div>
        {toggleCategory && (
          <div className="overflow-auto h-96 text-left text-sm w-4/5 mx-auto text-gray-200 font-bold">
            {category?.map((item) => (
              <h1
                key={item}
                onClick={(e) => setCategory(e.target.outerText)}
                name={item}
                className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1"
              >
                {item}
              </h1>
            ))}
          </div>
        )}

        <div className="my-2 bg-gray-600 h-[1px]" />
        <div
          onClick={() => setTogglePrice((p) => !p)}
          className="py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer gap-3 hover:bg-slate-600 text-white"
        >
         <i class="fa-solid fa-tags"></i>
          <div className="flex justify-between w-full items-center gap-3">
            <span className="text-sm  text-gray-200 font-bold">Price</span>
            <span className="text-sm rotate-180 duration-100" id="arrow">
              {togglePrice ? (
                <i className="fa-solid fa-chevron-down"></i>
              ) : (
                <i className="fa-solid fa-chevron-up"></i>
              )}
            </span>
          </div>
        </div>

        {togglePrice && (
          <div className="overflow-auto  text-left text-sm w-full mx-auto text-gray-200 font-bold">
            <div className="flex items-center justify-evenly w-full flex-col">
              <div className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1  mx-2">
                <label htmlFor="minPrice">Min Price</label>
                <input
                  type="number"
                  value={price[0]}
                  onChange={(e) => setPrice([e.target.value, price[1]])}
                  onBlur={() => handelFilterPrice(price)}
                  id="minPrice"
                  className="p-2 w-full rounded-lg h-8 outline-none text-black"
                />
              </div>
              <div className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1  mx-2">
                <label htmlFor="maxPrice">Max Price</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={price[1]}
                  onChange={(e) => setPrice([price[0], e.target.value])}
                  onBlur={() => handelFilterPrice(price)}
                  className="p-2 w-full rounded-lg h-8 outline-none text-black"
                />
              </div>
            </div>
          </div>
        )}

        <div className="my-2 bg-gray-600 h-[1px]" />
        <div
          onClick={() => setToggleRating((p) => !p)}
          className="py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer gap-3 hover:bg-slate-600 text-white"
        >
          <i class="fa-regular fa-star"></i>
          <div className="flex justify-between w-full items-center gap-3">
            <span className="text-sm  text-gray-200 font-bold">Rating</span>
            <span className="text-sm rotate-180 duration-100" id="arrow">
              {toggleRating ? (
                <i className="fa-solid fa-chevron-down"></i>
              ) : (
                <i className="fa-solid fa-chevron-up"></i>
              )}
            </span>
          </div>
        </div>

        {toggleRating && (
          <div className="overflow-auto text-left text-sm w-full mx-auto text-gray-200 font-bold">
            <div className="flex items-center justify-center w-full ">
              <h1
                onClick={(e) => setRating(e.target.outerText)}
                className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1"
              >
                3
              </h1>
              <span>+</span>
            </div>
            <div className="flex items-center justify-center w-full">
              <h1
                onClick={(e) => setRating(e.target.outerText)}
                className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1"
              >
                4
              </h1>
              <span>+</span>
            </div>
            <div className="flex items-center justify-center w-full ">
              <h1
                onClick={(e) => setRating(e.target.outerText)}
                className="cursor-pointer p-2 hover:bg-slate-600 rounded-md mt-1"
              >
                4.5
              </h1>
              <span>+</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
