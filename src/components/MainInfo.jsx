import React from "react";

const MainInfo = ({ image, about, temp, cityname, feels_like }) => {
  return (
    <>
      <div className="image">
        <img src={image} alt="Clear" />
      </div>
      <div className="aboutimage">{about}</div>
      <div className="temp">{temp} °C</div>
      <div className="feels_like">Feels Like : {feels_like} °C</div>
      <div className="cityname">{cityname}</div>
    </>
  );
};

export default MainInfo;
