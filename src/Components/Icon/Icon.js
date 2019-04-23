import React from "react";
import "./icon.css";

const Icon = props => {
  const { icon } = props;
  return (
    <div>
      <img className="img-wrapper" src={icon} alt="" />
    </div>
  );
};

export default Icon;
