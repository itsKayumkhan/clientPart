import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TopSlider = () => {
  return (
    <div className="my-10 md:my-20">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={window.deviceType}
        showDots={true}
      >
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
        <div className="md:h-96 ">
          {" "}
          <img
            className=""
            src="https://source.unsplash.com/random/1280x720"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default TopSlider;
