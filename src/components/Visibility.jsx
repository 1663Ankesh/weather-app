import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Visibility = ({ visibility }) => {
  return (
    <div className="element">
      <div className="data">
        <div>
          <VisibilityIcon style={{ fontSize: "12px" }} /> {visibility} km
        </div>
        <div>Visibility</div>
      </div>
    </div>
  );
};

export default Visibility;
