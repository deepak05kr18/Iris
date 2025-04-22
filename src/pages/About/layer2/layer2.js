import React from "react";
import "./irisSection.css";

const IrisSection = () => {
    const content = `
       Iris, a Govt. of India-recognized Startup India venture, is revolutionizing surveying, mapping, and monitoring through drone technology, AI-driven systems, and modern techniques. Serving sectors like agriculture, construction, real estate, and environmental monitoring, we specialize in topographical surveys, LIDAR mapping, GIS, hydrology, and satellite photogrammetry. Our AI-powered AVSM (Aerial Video Smart Monitor) ensures high-precision aerial monitoring and actionable insights. Committed to innovation, accuracy, and sustainability, Iris delivers cost-effective, real-time geospatial solutions. We set new standards in data collection and analysis, helping industries make better decisions and optimize operations through cutting-edge drone-based services.
    `;

    return (
        <section className="dd-section-rr">
            <h2 className="dd-heading-rr">Iris Aerial Innovations</h2>
            <div className="dd-container-rr">
                <div className="dd-text-rr">
                    {content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="dd-paragraph-rr">{paragraph}</p>
                    ))}
                </div>
            </div>
            <div className="dd-drone-rr dd-drone1-rr"></div>
            <div className="dd-drone-rr dd-drone2-rr"></div>
            <div className="dd-drone-rr dd-drone3-rr"></div>
        </section>
    );
};

export default IrisSection;