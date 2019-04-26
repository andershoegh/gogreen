import React from "react";
import "./PopUp.css";
const PopUp = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h4>{props.text}</h4>
        <button className="popup-btn" onClick={props.closePopUp}>
          LUK
        </button>
      </div>
    </div>
  );
};

export default PopUp;
