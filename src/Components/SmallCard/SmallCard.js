import React from "react";
import "./SmallCard.css";

function SmallCard(props) {
  const { header, tileContent } = props;

  return (
    <div className="smallCard">
      <h6>{header}</h6>
      {tileContent}
    </div>
  );
}
export default SmallCard;
