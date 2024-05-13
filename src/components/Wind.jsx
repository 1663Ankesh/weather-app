import React from "react";

const Wind = ({ img, val }) => {
  return (
    <div className="element">
      <img src={img} alt="Wind" />
      <div className="data">
        <div>{val} kmph</div>
        <div>Wind Speed</div>
      </div>
    </div>
  );
};

export default Wind;
