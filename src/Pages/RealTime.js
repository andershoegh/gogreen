import React from "react";
import { Redirect } from "react-router-dom";
import ForecastChart from "../Components/forecastChart";
import { Row, Col } from "react-grid-system";
import ForecastPolygon from "../Components/ForecastPolygon/ForecastPolygon";

const RealTime = props => {
  if (props.authUser) {
    return (
      <div>
        <Row>
          <Col>
            <ForecastPolygon polygonText={"84%"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ForecastChart className="forecastChart" />
          </Col>
        </Row>
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default RealTime;
