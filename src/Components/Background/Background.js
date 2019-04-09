import React from "react";
import img from "../../images/Baggrund.png";

const Content = {
  backgroundImage: { image: img },
  backgroundColor: "#95e0ab"
};

const Background = () => {
  return <div style={Content} />;
};

export default Background;
