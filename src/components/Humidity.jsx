import React from "react";

const Humidity = ({ img, val }) => {
  return (
    <div className="element">
      <img src={img} alt="Humidity" />
      <div className="data">
        <div>{val}%</div>
        <div>Humidity</div>
      </div>
    </div>
  );
};

export default Humidity;
