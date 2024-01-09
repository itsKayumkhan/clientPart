import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./../actions/productAction";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { LOADER_CAROUSEL_URL } from "../../constance";
const CarouselBox = ({ category }) => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (error) {
    toast.error(error);
    dispatch(clearErrors());
  }

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      {/* <div className="carouselBox"> */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={window.deviceType}
        dotListClass="custom-dot-list-style"
      >
        {products?.length > 0 ? (
          // products?.filter(product => product.category.name === category).map((product) => <Card product={product} />)
          products?.map((product) => (
            <Card  product={product} key={product._id} />
          ))
        ) : (
          <Card />
        )}
      </Carousel>

      {/* </div> */}
    </>
  );
};

export default CarouselBox;
