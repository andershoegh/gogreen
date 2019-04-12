import React from "react";
import { Carousel } from "antd";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselWrapper = () => {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;
