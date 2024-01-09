
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Card from "./../components/Card";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import Pagination from "./../components/Pagination";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { clearErrors } from "../actions/userAction";

const ProductView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productCount, setProductCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState([0, 25000]);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handelFilterPrice = (value) => {
    setPrice(value);
  };

  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setNext = () => {
    const newProductCount = productCount + resultPerPage;
    if (newProductCount <= productsCount) {
      setProductCount(newProductCount);
      setCurrentPage((p) => p + 1);
    }
  };

  const setPrv = () => {
    const newProductCount = productCount - resultPerPage;
    if (newProductCount >= 0) {
      setProductCount(newProductCount);
      setCurrentPage((p) => p - 1);
    }
  };
  if (error) {
    toast.error(error);
    dispatch(clearErrors());
  }


  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category, rating));
  }, [dispatch, keyword, currentPage, price, category, rating]);
  useEffect(() => {
    setProductCount(productsCount - resultPerPage);
  }, []);
  return (
    <div className="h-full">
      <div
        id="productView"
        className="title text-4xl flex items-center justify-center w-full h-36 my-3 bold bg-gray-200"
      >
        All Product
      </div>
      <div className="bottom flex w-full  h-full relative ">
        <div className="left-0 h-full z-10 sticky  top-20">
          {toggleSideBar && (
            <div className="relative ">
              <Filter
                setKeyword={setKeyword}
                handelFilterPrice={handelFilterPrice}
                setCategory={setCategory}
                setRating={setRating}
                keyword={keyword}
              />
            </div>
          )}
          {toggleSideBar ? (
            <div
              className="z-10  top-0  p-4 absolute bg-white w-8 h-8 rounded-full  transition-all text-black flex items-center justify-center hover:bg-slate-600 hover:border-2 hover:text-white duration-100"
              onClick={() => setToggleSideBar(!toggleSideBar)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          ) : (
            <div
              className="z-10  top-20 left-0 p-4 sticky bg-slate-900 w-8 h-8 rounded-e-full duration-75 transition-all text-white flex items-center justify-center "
              onClick={() => setToggleSideBar(!toggleSideBar)}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          )}
        </div>
        {loading ? (
          <Spinner text={false} />
        ) : products.length > 0 ? (
          <div className="w-full">
            <div className="flex flex-col w-full">
              <div className="right z-0 md:z-10 h-full w-full">
                <div className="right-bottom">
                  <div className="flex flex-auto flex-wrap h-full w-full">
                    {products?.length > 0 &&
                      products?.map((product) => (
                        <Card
                          product={product}
                          key={product._id}
                          equal={productCount < 3 ? false : true}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              
                <Pagination setNext={setNext} setPrv={setPrv} productCount={productCount} />
              
            </div>
          </div>
        ) : (
          <Error code={false} />
        )}
      </div>
    </div>
  );
};

export default ProductView;
