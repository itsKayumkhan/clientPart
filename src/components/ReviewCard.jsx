import React, { useEffect } from "react";
import { LOADER_CAROUSEL_URL } from './../../constance';
import Stars from "./Stars";
import { getUserDetails } from "../actions/userAction";
import { useDispatch } from "react-redux";

const ReviewCard = ({review}) => {
  console.log(review)
  return (
    <>
      <div className="rounded-md my-5 w-full flex flex-col lg:flex-row p-5 justify-evenly bg-slate-300">
        <div className="lg:w-[30%] w-full flex items-center gap-3">
          <img src={LOADER_CAROUSEL_URL} alt="user img" className="w-12  h-12 rounded-full" />
          <h1>{review?.name}</h1>
        </div>
        <div className="lg:w-[70%] my-3 lg:my-0 flex flex-col items-start justify-evenly">
          <div className="flex items-center justify-between w-full">
              <h1 className="md:text-xl font-semibold">{review?.commentHead} </h1>
              <p className="md:text-lg text-sm" >JUNE 22,2001</p>
          </div>
          <div className="w-full">
            <span><Stars star={review?.rating}/></span>
          </div>
          <div className="line-clamp-3 w-full">
            {
              review?.commentDes || "Lorem, ipsum"
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
