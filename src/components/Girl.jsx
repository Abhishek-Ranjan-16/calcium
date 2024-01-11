import React from "react";
import videoBg from "../assets/bgVid.mp4";
const Girl = () => {
  return (
    // <div className="jagmag">
      <video src={videoBg} autoPlay loop muted className="Girly"/>
    // </div>
  );
};

export default Girl;
