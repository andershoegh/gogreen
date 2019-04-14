import React from "react";
import { Redirect } from "react-router-dom";
import ForecastChart from "../Components/forecastChart";

const RealTime = props => {
  if (props.authUser) {
    return (
      <div>
        <ForecastChart />
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default RealTime;
