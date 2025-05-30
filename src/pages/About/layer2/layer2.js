import React from "react";
import "./irisSection.css";

const IrisSection = () => {
    const content = `
       Iris, a Govt. of India-recognized Startup India venture, is revolutionizing surveying, mapping, and monitoring through drone technology, AI-driven systems, and modern techniques. Serving sectors like agriculture, construction, real estate, and environmental monitoring, we specialize in topographical surveys, LIDAR mapping, GIS, hydrology, and satellite photogrammetry. Our AI-powered AVSM (Aerial Video Smart Monitor) ensures high-precision aerial monitoring and actionable insights. Committed to innovation, accuracy, and sustainability, Iris delivers cost-effective, real-time geospatial solutions. We set new standards in data collection and analysis, helping industries make better decisions and optimize operations through cutting-edge drone-based services.
    `;

    return (
        <section className="dd-section-rr">
            <div className="dd-background-pattern"></div>
            <div className="dd-content-wrapper">
                <h2 className="dd-heading-rr">
                    <span className="dd-heading-highlight">Iris Aerial Innovations</span>
                </h2>
                <div className="dd-container-rr">
                    <div className="dd-text-rr">
                        <p className="dd-paragraph-rr">{content}</p>
                    </div>
                </div>
            </div>
            <div className="dd-tech-dots"></div>
        </section>
    );
};

export default IrisSection;
