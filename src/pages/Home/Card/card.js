import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

// Importing images
import img1 from "../../../components/Images/cards/Railways2.webp";
import img2 from "../../../components/Images/cards/road.webp";
import img3 from "../../../components/Images/cards/rural.webp";
import img4 from "../../../components/Images/cards/irrigation.webp";
import img5 from "../../../components/Images/cards/mines.webp";
import img6 from "../../../components/Images/cards/water.webp";

// Card data with images
const cardsData = [
  {
    image: img1,
    title: 'Railway',
    description:
      'We provide innovative solutions ensuring safety, reliability, and sustainability with precise topographical drawings and high-resolution orthophotos. Our services encompass detailed design of tracks and structures at all development stages (FLS, DPR, EPC), along with comprehensive geotechnical, bathymetric, GPR, and DGPS/ETS surveys. Additionally, we offer advanced BIM models to support your projects.'
  },
  {
    image: img2,
    title: 'Road',
    description:
      'Drone surveys facilitate road condition monitoring for timely maintenance and minimal disruptions. We provide on-demand image acquisition, maintenance, and asset inspection services. Our photogrammetry products support road-widening, construction, and other infrastructure development projects. Additionally, we offer LiDAR-based topographical surveys for enhanced accuracy. These advanced technologies ensure comprehensive and precise data collection, enabling efficient project planning and execution.'
  },
  {
    image: img3,
    title: 'Rural & Urban',
    description:
      'We provide infrastructure inspection and maintenance services, reducing the need for manual inspections by identifying damage or wear. Our GIS-based digitization over drone and satellite imagery supports LULC, Revenue/Cadastral Mapping, and more. We create 3D reality digital twins for cities and towns, enhancing urban planning and management. Additionally, we offer hydrographic plans for cities and villages, ensuring comprehensive and precise data for effective water resource management and infrastructure development.'
  },
  {
    image: img4,
    title: 'Agriculture',
    description:
      'We provide advanced irrigation solutions using drone surveys to monitor systems, assess crop health, and analyze water quality. Our services include efficient irrigation planning, ensuring optimal water distribution for sustainable agriculture. We specialize in watershed management, dam and reservoir inspections, and diversion headworks analysis to support effective irrigation infrastructure and enhance agricultural productivity. These solutions contribute to the sustainable and efficient use of water resources in irrigation systems.'
  },
  {
    image: img5,
    title: 'Mine',
    description:
      'We provide optimized pit and dump management, ensuring efficient use of resources. Our services include precise volume surveys to measure material quantities accurately. We conduct thorough surface and slope stability monitoring to maintain safety and prevent landslides. Additionally, we offer comprehensive pre- and post-blast data analysis to evaluate blast performance and its impacts. Our team prepares various plans for mine management, encompassing all aspects of operational efficiency and safety compliance.'
  },
  {
    image: img6,
    title: 'Water',
    description:
      'We provide comprehensive water surveying services using drones, including aerial surveys, irrigation system monitoring, crop health assessment, and water quality analysis. Our offerings also encompass dam and reservoir inspections, watershed management, and diversion headworks inspection. Additionally, we specialize in flood monitoring and early warning systems. These services ensure precise and efficient water resource management, contributing to sustainable agriculture and infrastructure safety.'
  }
];

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="cards-header">
        <h1>Industry Verticals</h1>
        <p>
          We deliver geospatial, Remote Sensing, and UAV-based solutions for a large industry segment.
        </p>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="info">
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <Link to="/services" className="btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
