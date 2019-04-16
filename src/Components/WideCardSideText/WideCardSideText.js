import React from "react";
import "./WideCardSideText.css";

function WideCard(props) {
  const { header, graph, sideText } = props;

  return (
    <div className="wideCard">
      <div className="wideCardHeader">
        <h5>{header}</h5>
      </div>
      <div className="cardCont">
        <div className="content">{graph}</div>
        <div className="content">{sideText}</div>
      </div>
    </div>
  );
}

export default WideCard;
