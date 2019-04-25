import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-grid-system";
import ForecastChart from "../Components/forecastChart/forecastChart";
import ForecastPolygon from "../Components/ForecastPolygon/ForecastPolygon";
import "./RealTime.css";
import Icon from "../Components/Icon/Icon";

const RealTime = props => {
  const color = props.isGreen ? "circleGreen" : "circleRed";
  if (props.authUser) {
    document.body.style.backgroundImage = ``;
    return (
      <Container className="containerClass">
        <div className={`circle ${color}`} />
        {/* <div className="hexagon-outer">
          <div className="hexagon">
            <ForecastPolygon polygonText={"84%"} />
          </div>
        </div> */}
        <div className="hexaWhite">
          <span>50%</span>
        </div>
        <div className="forecastChart">
          <ForecastChart className="forecastChart" />
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default RealTime;
