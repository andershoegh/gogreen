import React from "react";
import { Redirect } from "react-router-dom";

const My404Page = props => {
  const user = JSON.parse(localStorage.getItem("authUser"));

  if (user) {
    return <Redirect to="/" />;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default My404Page;
