import React from "react";
import "./main.css";
import vid from "../../../components/Images/Team/v.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="overlay"></div>

      {/* Text Content */}
      <div className="hero-text">
        <h1>Pioneering the Future with Geospatial Excellence</h1><br></br>
        <p>A modern survey & engineering consultancy organization having expertise in various survey technology and engineering design for various sectors including infrastructure, railways, roads, mining, agriculture, telecom, energy, etc. We are highly professional and one of the most rated and recommended survey and engineering consultancy organizations in India.</p>
      </div>
    </div>
  );
};

export default HeroSection;