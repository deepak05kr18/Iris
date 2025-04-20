import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ser.css";

// Import local images
import img1 from "../../../components/Images/Background/train.jpg";
import img2 from "../../../components/Images/Background/irrigation.jpg";
import img3 from "../../../components/Images/Background/minning.jpg";
import img4 from "../../../components/Images/Background/urban.jpg";
import img5 from "../../../components/Images/Background/water.jpg";
import img6 from "../../../components/Images/Background/road.jpg";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Railway", des: "We deliver innovative solutions with precise topographical drawings and high-resolution orthophotos, ensuring safety, reliability, and sustainability. Our services include track and structure design at all stages (FLS, DPR, EPC), geotechnical, bathymetric, GPR, and DGPS/ETS surveys, and advanced BIM models.", img: img1 },
    { id: 2, name: "Irrigation", des: "We provide advanced irrigation solutions using drone surveys to monitor systems, assess crop health, and analyze water quality. Our services include efficient irrigation planning, ensuring optimal water distribution for sustainable agriculture.", img: img2 },
    { id: 3, name: "Minning", des: "We optimize pit and dump management with precise volume surveys, surface and slope stability monitoring, and pre/post-blast data analysis. Comprehensive mine management plans ensure operational efficiency and safety compliance.", img: img3 },
    { id: 4, name: "Rural & Urban", des: "We offer infrastructure inspections, GIS-based mapping, and 3D reality digital twins for urban planning. Services include LULC, cadastral mapping, irrigation monitoring, and hydrographic plans for effective water resource management.", img: img4 },
    { id: 6, name: "Roads", des: "Drone surveys enable road condition monitoring, asset inspections, and photogrammetry for road-widening and construction. LiDAR-based topographical surveys ensure accurate data for efficient planning and execution.", img: img6 },
    { id: 5, name: "Water", des: "Using drones, we provide aerial surveys, irrigation system monitoring, crop health assessment, and water quality analysis. Additional services include dam inspections, watershed management, and flood monitoring for sustainable resource management", img: img5 },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setItems(prev => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setItems(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className="ser-container">
      {isMobile ? (
        /* Mobile View */
        <div className="mobile-view">
          <div 
            className="mobile-image" 
            style={{ backgroundImage: `url(${items[0].img})` }}
          />
          <div className="mobile-content">
            <h2>{items[0].name}</h2>
            <p>{items[0].des}</p>
          </div>
          <div className="mobile-buttons">
            <button className="mobile-prev" onClick={handlePrev}>
              <FaChevronLeft className="icon" />
            </button>
            <button className="mobile-next" onClick={handleNext}>
              <FaChevronRight className="icon" />
            </button>
          </div>
        </div>
      ) : (
        /* Desktop View */
        <>
          <div className="ser-slide">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`ser-item ${index === 0 ? "ser-main" : ""}`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {index === 1 ? (
                  <div className="ser-content">
                    <div className="ser-name">{item.name}</div>
                    <div className="ser-des">
                      {item.des}
                    </div>
                  </div>
                ) : (
                  index !== 0 && <div className="ser-card-title">{item.name}</div>
                )}
              </div>
            ))}
          </div>
          <div className="ser-button">
            <button className="ser-prev" onClick={handlePrev}>
              <FaArrowLeft className="icon black-icon" />
            </button>
            <button className="ser-next" onClick={handleNext}>
              <FaArrowRight className="icon black-icon" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;