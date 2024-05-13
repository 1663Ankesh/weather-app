import React from "react";
import LanguageIcon from '@mui/icons-material/Language';

const Coordinate = ({ lon, lat }) => {
  let lons, lats;

  if (typeof lon === "number" && typeof lat === "number") {
    lon = parseFloat(lon.toFixed(2));
    lat = parseFloat(lat.toFixed(2));

    lon >= 0 ? (lons = "E") : (lons = "W");
    lat >= 0 ? (lats = "N") : (lats = "S");

    lon = Math.abs(lon);
    lat = Math.abs(lat);
  }

  return (
    <div className="element">
      <LanguageIcon style={{ fontSize: "32px" }} />
      <div className="data">
        <div>
          {lon}°{lons}
        </div>
        <div>Longitude</div>
      </div>
      <div className="data">
        <div>
          {lat}°{lats}
        </div>
        <div>Latitude</div>
      </div>
    </div>
  );
};

export default Coordinate;
