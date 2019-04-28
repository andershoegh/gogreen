import React from "react";
import Slider from "react-slick";
import "./CarouselUsage.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import vaskemaskine from "../../images/washing-machine.svg";
import støvsuger from "../../images/vacuum-cleaner.svg";
import tørretumbler from "../../images/dryer.svg";
import smartplug from "../../images/plug.svg";
import opvasker from "../../images/dishwasher.svg";

const CarouselUsage = props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    afterChange: current => {
      props.handleSlide(current);
    }
  };

  return (
    <div className="uCaroWrap">
      <Slider {...settings}>
        <div className="uCardSlider" id="washingMachine">
          <img src={vaskemaskine} alt={"washer"} />
        </div>
        <div className="uCardSlider" id="dryer">
          <img src={tørretumbler} alt={"dryer"} />
        </div>
        <div className="uCardSlider" id="vacuum">
          <img src={støvsuger} alt={"vacuum"} />
        </div>
        <div className="uCardSlider" id="dishwasher">
          <img src={opvasker} alt={"Dishwasher"} />
        </div>
        {props.smartplug !== undefined ? (
          <div className="uCardSlider" id="smartplug">
            <img src={smartplug} alt={"Smartplugs"} />
          </div>
        ) : null}
      </Slider>
    </div>
  );
};
export default CarouselUsage;
