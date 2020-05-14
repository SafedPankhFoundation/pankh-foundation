import React, { Fragment, Component } from "react";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import CarouselIndicator from "./CarouselIndicator";
import CarouselSlide from "./CarouselSlide";

class Carousel extends Component {
  state = {
    activeIndex: 0,
  };

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.goToNextSlide();
    }, 4000);
  };

  goToSlide = index => {
    this.setState({
      activeIndex: index,
    });
  };

  goToPrevSlide = () => {
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }
    --index;

    this.setState({
      activeIndex: index,
    });
  };
  goToNextSlide = () => {
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { slides } = this.props;
    return (
      <div className="carousel">
        <LeftArrow className="leftArrow" onClick={this.goToPrevSlide} />

        <ul className="carousel_slides">
          {slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <RightArrow className="rightArrow" onClick={this.goToNextSlide} />

        <ul className="carousel_indicators">
          {slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onHandleClick={i => this.goToSlide(i)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Carousel;
 