import React, { useState } from "react";
import "../App.css";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Coordinate from "./Coordinate";
import Visibility from "./Visibility";
import MainInfo from "./MainInfo";
import clear from "./Images/clear.png";
import cloud from "./Images/cloud.png";
import drizzle from "./Images/drizzle.png";
import rain from "./Images/rain.png";
import search from "./Images/search.png";
import snow from "./Images/snow.png";
import humiditypic from "./Images/humidity.png";
import wind from "./Images/wind.png";
import mist from "./Images/mist.png";
import Pressure from "./Pressure";
import { tocelcius, tokmph, getWindDirection } from "../utils/functions";

const Weather = () => {
  let key = process.env.REACT_APP_weather_key;

  const [city, setcity] = useState("");
  const [myobj, setmyobj] = useState({
    cityname: "City Name",
    about: "",
    image: clear,
    temp: 0,
    feels_like: 0,
    windspeed: 0,
    winddirection: "",
    humidity: 0,
    lon: "-",
    lat: "-",
    pressure: 0,
    visibility: 0,
  });

  function handlechange(e) {
    setcity(() => {
      return e.target.value;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let response = await fetch(url);
    response = await response.json();

    if (parseInt(response.cod) !== 404) {
      let newimage,
        newabout = "";

      let icon = parseInt(response.weather[0].icon);
      if (icon === 1) {
        newimage = clear;
        newabout = "Clear Sky";
      } else if (icon >= 2 && icon <= 4) {
        newimage = cloud;
        newabout = "Clouds";
      } else if (icon === 9) {
        newimage = drizzle;
        newabout = "Shower Rain";
      } else if (icon === 10 || icon === 11) {
        newimage = rain;
        if (icon === 10) newabout = "Rain";
        else newabout = "Thunderstorm";
      } else if (icon === 50) {
        newimage = mist;
        newabout = "Mist";
      } else {
        newimage = snow;
        newabout = "Snowfall";
      }

      setmyobj(() => {
        return {
          cityname: city[0].toUpperCase() + city.slice(1),
          about: newabout,
          image: newimage,
          temp: tocelcius(response.main.temp),
          feels_like: tocelcius(response.main.feels_like),
          windspeed: tokmph(response.wind.speed),
          winddirection: getWindDirection(response.wind.deg),
          humidity: response.main.humidity,
          lon: response.coord.lon,
          lat: response.coord.lat,
          pressure: response.main.pressure,
          visibility: response.visibility / 1000,
        };
      });
    } else {
      setmyobj(() => {
        return {
          cityname: "Not Found!!!",
          about: "",
          image: clear,
          temp: null,
          feels_like: null,
          windspeed: null,
          winddirection: "",
          humidity: null,
          lon: null,
          lat: null,
          pressure: null,
          visibility: null,
        };
      });
    }

    setcity(() => {
      return "";
    });
  }

  return (
    <div className="weatherbackground">
      <div className="weather">
        <form className="search" onSubmit={handleSubmit}>
          <div className="searchbar">
            <input
              type="text"
              name="city"
              placeholder="City Name"
              value={city}
              onChange={handlechange}
            />
          </div>
          <button type="submit" className="searchicon">
            <img src={search} alt="Search" />
          </button>
        </form>
        <MainInfo
          image={myobj.image}
          about={myobj.about}
          temp={myobj.temp}
          feels_like={myobj.feels_like}
          cityname={myobj.cityname}
        />
        <div className="info">
          <Wind img={wind} val={myobj.windspeed} val2={myobj.winddirection} />
          <Humidity img={humiditypic} val={myobj.humidity} />
        </div>
        <div className="info" id="second_info">
          <Coordinate lon={myobj.lon} lat={myobj.lat} />
          <Visibility visibility={myobj.visibility} />
          <Pressure pressure={myobj.pressure} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
