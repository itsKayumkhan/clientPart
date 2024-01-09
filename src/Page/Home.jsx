import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import LabelRow from "../components/LabelRow";
import MidBanner from "../components/MidBanner";
import MidBanner2 from "../components/MidBanner2";
import TopSlider from "../components/TopSlidere";
import Featured from "../components/Featured";
// import TopSlider from "../components/TopSlider";

const Home = () => {

  return (
    <>
      <Banner />

      <TopSlider/>

      <LabelRow title="Laptop" />
      <Carousel  category={"laptop"}/>
      <Featured/>
      <MidBanner />

      <LabelRow title="Shoes" />
      <Carousel  category={"shoes"}/>

      <MidBanner2/>

      <LabelRow title="Electronics" />
      <Carousel  category={"electronics"}/>
    </>
  );
};

export default Home;
