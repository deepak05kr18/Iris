import React from 'react';
import { Link } from 'react-router-dom';
import './tech.css';

// Importing images
import img1 from "../../../components/Images/cards/lidar.jpeg";
import img2 from "../../../components/Images/cards/photo.jpeg";
import img3 from "../../../components/Images/cards/Sattelite.webp";
import img4 from "../../../components/Images/cards/Avsm.webp";
import img5 from "../../../components/Images/cards/DGPS.webp";
import img6 from "../../../components/Images/Background/Hydrology.jpeg";

// Section data with images
const sectionData = [
  {
    image: img1,
    title: 'Lidar',
    description: 'Topographical survey of engineering grade in the tree cover area. Accurate data gathering at the aerial and track levels, as well as the capacity to gather height information amidst dense foliage.'
  },
  {
    image: img2,
    title: 'Photogrammetry',
    description: 'Progress monitoring, Inspection & asset GIS Inventory. Geo Video combined with satellite imagery (Micro + Macro View Together) to support engineering decision-making and progress tracking.'
  },
  {
    image: img3,
    title: 'Satellite',
    description: 'Topographical survey for choosing a path in PFR/FR studies over wide areas. Effective in large, inaccessible areas and reasonably priced for extremely large areas.'
  },
  {
    image: img4,
    title: 'AVSM',
    description: 'Aerial Video Smart Monitor, our highly sophisticated Artificial Intelligence (AI) object identification model locates desired targets with extreme precision, syncing with your workflow with ease, we deliver the next wave of geospatial brilliance.'
  },
  {
    image: img5,
    title: 'DGPS/ETS',
    description: 'Topographical study of engineering grade for PFR/FR/FLS/DPR. High accuracy, Faster, Cost effective and highly Effective in inaccessible & geographically complex projects.'
  },
  {
    image: img6,
    title: 'Hydrography/Hydrology',
    description: 'Hydrographic surveys, mapping underwater features and depths for navigation, construction, and environmental monitoring. We ensure accurate data collection for safe maritime operations, coastal development, and water resource management.'
  }
];

const Sections = () => {
  return (
    <section className="section-container">
      <div className="section-header">
        <h1>Technologies</h1>
      </div>
      <div className="section-items">
        {sectionData.map((section, index) => (
          <div className="item" key={index}>
            <img src={section.image} alt={section.title} />
            <div className="item-title">{section.title}</div>
            <div className="item-info">
              <p>{section.description}</p>
              <Link to="/technologies" className="btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;
