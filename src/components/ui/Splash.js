import React from "react";
import ReactLoading from "react-loading";

import "./Splash.css";
import splashIcon from "../../assets/image-svgrepo-com.svg";

export default function Splash() {
  const loadingType = "balls";
  const loadingColor = "rgb(61, 180, 109)";
  return (
    <div className="splash">
      <div className="splash-container">
        <img src={splashIcon} alt="" />
        <ReactLoading
          type={loadingType}
          color={loadingColor}
          className="splash-loading"
          height="2"
          width="8rem"
        />
      </div>
    </div>
  );
}
