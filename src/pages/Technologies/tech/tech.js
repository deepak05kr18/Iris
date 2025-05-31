import React from "react";
import "./tech.css";
import img1 from "../../../components/Images/cards/Lidar.webp"
import img2 from "../../../components/Images/cards/Photogrammetry.webp"
import img3 from "../../../components/Images/cards/Avsm.webp"
import img4 from "../../../components/Images/cards/Sattelite.webp"
import img5 from "../../../components/Images/cards/Hydrology.webp"
import img6 from "../../../components/Images/cards/ndgps.jpeg"


const Tech = () => {
  const containers = [
    {
      heading: "Lidar",
      content: "LiDAR (Light Detection and Ranging) technology is revolutionizing the topographical survey process, particularly in areas covered by dense tree foliage. By utilizing laser pulses, LiDAR gathers highly accurate, three-dimensional data from aerial and track levels, even in challenging environments where traditional methods fail. It excels in capturing the elevation and height of surfaces, ensuring precision in areas with thick vegetation. This capability allows engineers and environmentalists to gather detailed terrain information with unparalleled accuracy, enabling better planning and decision-making in areas ranging from forestry management to infrastructure development. LiDAR's effectiveness in such conditions marks it as an essential tool for modern geospatial surveying.",
      imgSrc: img1,
      imgPosition: "right",
    },
    {
      heading: "Photogrammetry",
      content: "Photogrammetry is a cutting-edge technology that uses photographs and measurements to create precise maps, 3D models, and geographic data. This technique is particularly effective for progress monitoring, asset inspection, and GIS inventory creation, offering an integrated view of both micro and macro elements. By combining geo-referenced video footage with high-resolution satellite imagery, photogrammetry provides comprehensive insights into project development, progress tracking, and engineering decision-making. The fusion of aerial and satellite imagery facilitates the creation of accurate and informative visual datasets that can be easily used in real-time applications, driving efficiency and enhancing decision support in various industries, including construction, agriculture, and urban planning.",
      imgSrc: img2,
      imgPosition: "left",
    },
    {
      heading: "Satellite",
      content: "Satellite-based topographical surveys are indispensable for large-scale geographical studies, particularly in selecting paths for PFR (Pre-feasibility Report) or FR (Feasibility Report) studies. These surveys offer the ability to cover vast, inaccessible areas, providing an essential tool for research and planning in remote or difficult-to-access locations. Satellite imagery is cost-effective for extremely large regions, enabling comprehensive mapping and analysis without the logistical challenges of on-site data collection. Its ability to deliver high-resolution, georeferenced imagery allows for accurate landscape analysis, facilitating informed decisions in projects such as infrastructure development, environmental studies, and natural resource management, even in the most remote regions.",
      imgSrc: img4,
      imgPosition: "right",
    },
    {
      heading: "AVSM",
      content: "The Aerial Video Smart Monitor (AVSM) is an advanced technological breakthrough that merges Artificial Intelligence (AI) with aerial video monitoring for highly accurate target identification. This system is capable of pinpointing specific objects with extraordinary precision, even in complex environments. AVSM seamlessly integrates with your workflow, enhancing the efficiency and accuracy of operations by automating the identification and tracking of objects. It is designed to work in real-time, enabling immediate response and decision-making. This innovative system is redefining geospatial intelligence by providing next-level accuracy and insight, essential for applications such as surveillance, construction monitoring, and large-scale asset management.",
      imgSrc: img3,
      imgPosition: "left",
    },
    {
      heading: "DGPS/ETS",
      content: "Differential GPS (DGPS) and Electronic Total Station (ETS) technologies are essential tools for highly accurate topographical studies, particularly in projects like PFR, FR, FLS, and DPR. These systems provide precise geospatial data, making them indispensable for engineering-grade surveys. DGPS improves GPS accuracy by correcting errors in real-time, while ETS ensures precise measurement of angles and distances. Combined, they enable faster, more cost-effective data collection, even in challenging and geographically complex areas. This duo is invaluable in inaccessible regions, where traditional surveying methods may struggle, offering enhanced precision and efficiency for critical infrastructure and environmental projects.",
      imgSrc: img6,
      imgPosition: "right",
    },
    {
      heading: "Hydrography/Hydrology",
      content: "Hydrology surveys are crucial for understanding the underwater landscape, facilitating safe navigation, and supporting construction and environmental monitoring in aquatic environments. These surveys focus on mapping the depths and features of water bodies to ensure the safe operation of maritime activities, including shipping and navigation. Hydrological mapping is also instrumental in coastal development and water resource management, offering detailed insights into water flow patterns, sediment movement, and underwater obstacles. With cutting-edge technology, hydrographic data collection is executed with pinpoint accuracy, ensuring the safety of maritime operations and supporting informed decision-making in environmental management, infrastructure development, and natural resource conservation.",
      imgSrc: img5,
      imgPosition: "left",
    },
     ];

  return (
    <div className="tech-wrapper">
      {containers.map((container, index) => (
        <div
          key={index}
          className={`clay-container ${
            container.imgPosition === "right" ? "img-right" : "img-left"
          }`}
        >
          <div className="content">
            <h2>{container.heading}</h2>
            <p>{container.content}</p>
          </div>
          <img src={container.imgSrc} alt={container.heading} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
