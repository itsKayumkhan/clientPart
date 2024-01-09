import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Stars from "./Stars";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../actions/productAction";
import Error from './../Page/Error';

const Review = ({ addReview, product }) => {
  const [starCount, setStarCount] = useState(0);
  const [newReview, setNewReview] = useState({commentHead:"",commentDes:""});
 


  return (
    <>
      <div className="px-10 w-full flex justify-center mt-10 flex-col lg:flex-row">
        <div className="lg:w-[60%] flex items-start justify-evenly flex-col">
          <h1 className="text-xl font-bold my-5  w-1/2">CUSTOMER REVIEWS</h1>
          <hr className="h-1 bg-slate-900 w-1/2 rounded-e-md" />

          <div className="w-full h-96 overflow-scroll ">
            {product.reviews ? (
              product.reviews.map((item, i) => (
                <ReviewCard review={item} key={i} />
              ))
            ) : (
                <Error code={false} head="NO Reviews" />
)}
          </div>
        </div>
        <div className="lg:w-[40%] mx-5 lg:h-46">
          <h1 className="text-2xl font-bold mb-16 text-center">
            WRITE A REVIEW
          </h1>

          <div className="my-5 flex justify-between items-center">
            <h2 className="text-lg">RATE US</h2>
            <div className="flex flex-col items-center">
              <span>
                <Stars star={starCount} />
              </span>
              <input
                type="number"
                step={0.5}
                min={0}
                max={5}
                value={starCount}
                onChange={(e) => setStarCount(e.target.value)}
                className="border-2 text-center font-sans outline-yellow-300 w-12"
              />
            </div>
          </div>
          <input type="text" name="commentHead" value={newReview.commentHead}  onChange={(e) => setNewReview({...newReview,commentHead:e.target.value})} placeholder="Hading" className="p-2 w-full h-10 border-2"/>

          <div className="my-5 w-full border-2">
            <textarea
              type="text"
              value={newReview.commentDes}
              placeholder="Description"
              onChange={(e) => setNewReview({...newReview,commentDes:e.target.value})}
              className="resize-none  w-full h-full p-2"
            />
          </div>
          <button
          onClick={() => {
            addReview({
              rating: starCount,
              comment: newReview,
              productId: product._id,
            });
        
            setNewReview(() => ({ commentHead: "", commentDes: "" }));
          }}
            
            className="bg-slate-900 text-white w-full h-12 text-lg"
          >
            Post Review
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
