import React from "react";

const Icon = props => {
  const { icon } = props;
  return (
    <div>
      <img src={icon} />
    </div>
  );
};

export default Icon;
