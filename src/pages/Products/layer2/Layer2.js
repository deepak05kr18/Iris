import React from 'react';
import './Layer2.css';
import img1 from '../../../components/Images/cards/rail.jpg';
import img2 from '../../../components/Images/cards/road.webp';
import img3 from '../../../components/Images/cards/drones.jpg';

const Layer2 = () => {
  const sections = [
    {
      id: 1,
      image: img1,
      heading: 'Smart Rail Monitor',
      content: 'Smart Rail Monitor leverages GIS-powered drone technology to enhance railway infrastructure management. It enables real-time track inspections, predictive maintenance, and automated mapping, reducing costs and downtime. By integrating AI-driven analytics, it ensures efficient, safe, and data-driven rail operations with minimal human intervention.',
      reverse: false,
    },
    {
      id: 2,
      image: img2,
      heading: 'Smart Road Monitor',
      content: 'Smart Road Monitor utilizes GIS-integrated drone technology for efficient road inspection, mapping, and maintenance. It enables real-time damage detection, traffic analysis, and predictive maintenance, reducing costs and manual efforts. AI-driven analytics enhance safety, planning, and infrastructure management for smarter road networks.',
      reverse: true,
    },
    {
      id: 3,
      image: img3,
      heading: 'Drones',
      content: 'Smart Drones revolutionize surveying, mapping, and monitoring across industries. They enable real-time data collection, terrain analysis, and predictive maintenance, reducing costs and human effort. AI-driven insights enhance efficiency, accuracy, and decision-making in infrastructure, agriculture, and disaster management.',
      reverse: false,
    },
  ];

  return (
    <div className='App'>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section ${section.reverse ? 'reverse' : ''}`}
        > 
          <div className='section-text'>
            <h2 className='section-heading'>{section.heading}</h2>
            <p className='section-content'>{section.content}</p>
          </div>
          <img
            src={section.image}
            alt={`Section ${section.id}`}
            className='section-image'
          />
        </div>
      ))}
    </div>
  );
};

export default Layer2;
