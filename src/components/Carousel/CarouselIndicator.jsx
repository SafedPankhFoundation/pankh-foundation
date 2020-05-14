import React from "react";

const CarouselIndicator = ({ index, activeIndex, onHandleClick }) => (
  <li>
    <span
      className={
        index === activeIndex
          ? "carousel_indicator carousel_indicator-active"
          : "carousel_indicator"
      }
      onClick={() => onHandleClick(index)}
    />
  </li>
);

export default CarouselIndicator;
