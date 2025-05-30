import React from 'react';
import './ai.css';
import img1 from "../../../components/Images/cards/s1.png";
import img2 from "../../../components/Images/cards/s2.png";

const AISection = () => {
  return (
    <div className="ai-section">
      <div className="ai-overlay">
        <div className="ai-content-container">
          <div className="ai-content">
            <h1>AI and Innovations</h1>
            <p>
              Aerial Video Smart Monitor (AVSM), a highly sophisticated Artificial Intelligence(AI) object identification model locates desired elements such as Infrastructure assets, encroachments etc. with extreme precision, syncing with your workflow with ease, we deliver the next wave of geospatial brilliance.
            </p>
          </div>

          <div className="image-container">
            <div className="image-wrapper">
              <img src={img1} alt="AI Innovation 1" className="content-image" />
            </div>
            <div className="image-wrapper">
              <img src={img2} alt="AI Innovation 2" className="content-image" />
            </div>
          </div>

          <div className="button-wrapper">
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;