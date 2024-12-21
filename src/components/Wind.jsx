import React from "react";

const Wind = ({ img, val, val2 }) => {
  return (
    <div className="element">
      <img src={img} alt="Wind" />
      <div className="data">
        <div>
          {val} kmph {val2}
        </div>
        <div>Wind Speed</div>
      </div>
    </div>
  );
};

export default Wind;
