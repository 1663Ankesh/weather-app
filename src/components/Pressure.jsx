import React from "react";
import CompressIcon from "@mui/icons-material/Compress";

const Pressure = ({ pressure }) => {
  return (
    <div className="element">
      <div className="data">
        
        <div><CompressIcon style={{ fontSize: "18px" }} />{pressure} mB</div>
        <div>Pressure</div>
      </div>
    </div>
  );
};

export default Pressure;
