import React from "react";
import "./irisSection.css";

const IrisSection = () => {
    const content = `
        Iris, a Govt. of India-recognized startup under Startup India, is transforming the way industries approach surveying, mapping, and monitoring. We specialize in delivering cutting-edge solutions using drone technology, advanced AI-driven systems, and modern surveying techniques to cater to sectors like agriculture, construction, real estate, and environmental monitoring.
 Our expertise spans precise topographical surveys, LIDAR mapping, GIS, hydrology surveys, and satellite photogrammetry. At the heart of our innovation lies AVSM (Aerial Video Smart Monitor) an AI-powered tool that ensures exceptional accuracy and efficiency in aerial monitoring and GIS surveys. This system empowers clients with actionable insights for better decision-making and optimized operations.
Iris is committed to providing state-of-the-art services that blend technical precision with practical solutions, ensuring timely and cost-effective project outcomes. Our drone-based surveys and real-time monitoring techniques set new standards for accuracy and reliability, making data collection and analysis seamless and efficient.
As a recognized startup, we take pride in pushing the boundaries of innovation in drone technology. With a focus on excellence and sustainability, Iris continues to redefine surveying and mapping, driving progress in industries and setting new benchmarks in the world of modern geospatial solutions.
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