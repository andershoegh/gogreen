import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import vaskemaskine from "../../images/washing-machine.svg";
import støvsuger from "../../images/vacuum-cleaner.svg";
import tørretumbler from "../../images/dryer.svg";
import underholdning from "../../images/television.svg";
import opvasker from "../../images/dishwasher.svg";

const Carousel = props => {
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
    <div className="test">
      <Slider {...settings}>
        <div className="cardSlider" id="washingMachine">
          <p>Vaskemaskine</p>
          <img src={vaskemaskine} alt={"washer"} />
        </div>
        <div className="cardSlider" id="dryer">
          <p>Tørretumbler</p>
          <img src={tørretumbler} alt={"dryer"} />
        </div>
        <div className="cardSlider" id="vacuum">
          <p>Støvsuger</p>
          <img src={støvsuger} alt={"vacuum"} />
        </div>
        <div className="cardSlider" id="entertainment">
          <p>Underholdning</p>
          <img src={underholdning} alt={"entertainment"} />
        </div>
        <div className="cardSlider" id="dishwasher">
          <p>Opvasker</p>
          <img src={opvasker} alt={"Dishwasher"} />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
