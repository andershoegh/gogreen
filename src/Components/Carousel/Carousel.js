import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import vaskemaskine from "../../images/Vaskemaskine-firkant.svg";
import ovn from "../../images/Ovn-firkant.svg";
import støvsuger from "../../images/støvsuger-firkant.svg";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 1,
      speed: 500,
      prevArrow: false,
      nextArrow: false,
      dots: false,
      afterChange: current => {
        this.props.handleSlide(current);
      }
    };
    return (
      <div>
        <p>{this.props.header}</p>
        <Slider {...settings} onSwipe={() => this.props.handleSlide("Hello")}>
          <div id="washingMachine">
            <img src={vaskemaskine} />
          </div>
          <div id="oven">
            <img src={ovn} />
          </div>
          <div id="vaccuum">
            <img src={støvsuger} />
          </div>
        </Slider>
      </div>
    );
  }
}
