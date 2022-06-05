import "./Background.css";
import React, { useEffect, useState } from "react";
import BackgroundImage from "../../image/heroImage.mp4";

function Background() {
  return (
    <div className="background-image-div">
      <video className="background-image" autoPlay loop muted>
        <source src={BackgroundImage} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
