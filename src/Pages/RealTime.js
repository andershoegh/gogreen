import React from "react";
import { Redirect } from "react-router-dom";
import ForecastChart from "../Components/forecastChart/forecastChart";
import { Row, Col } from "react-grid-system";
import ForecastPolygon from "../Components/ForecastPolygon/ForecastPolygon";
//import axios from "axios";

const RealTime = props => {
  if (props.authUser) {
    return (
      //   axios.get('http://localhost:4000/users/Auth_UID').then(res => {
      //   this.setState({data: res.data});
      // });
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
