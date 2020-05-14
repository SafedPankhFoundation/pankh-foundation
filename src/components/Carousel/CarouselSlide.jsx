import React from "react";

const CarouselSlide = ({
  activeIndex,
  index,
  slide: { content, img, source },
}) => {
  return (
    <li
      className={
        index === activeIndex
          ? "carousel_slide carousel_slide-active"
          : "carousel_slide"
      }
    >
      <div className="carousel_slide_content">
        {content}
        <small className="carousel_slide_src">{source}</small>
      </div>

      <div className="carousel_slide_img">
        <img
          // should cover background
          src={`${img}`}
          alt="carousel_slide"
        />
      </div>
    </li>
  );
};

export default CarouselSlide;
