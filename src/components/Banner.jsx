import React from "react";
import Carousel from "./Carousel/Carousel";
import { carouselBannerData } from "./Carousel/carouselData";

const Banner = () => {
  return (
    <div className="Banner ">
      <Carousel slides={carouselBannerData} />
    </div>
  );
};

export default Banner;
