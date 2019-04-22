import React from "react";
import "./SmallCard.css";
import H4 from "../H4/H4";

function SmallCard(props) {
  const { header, tileContent } = props;

  return (
    <div className="smallCard">
      <H4>{header}</H4>
      <div className="smGraph">{tileContent}</div>
    </div>
  );
}
export default SmallCard;
