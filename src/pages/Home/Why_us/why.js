import React from "react";
import "./why.css";

// Importing images directly
import accuracyIcon from "../../../components/Images/Badges/accuracy.png";
import speedIcon from "../../../components/Images/Badges/time.png";
import efficiencyIcon from "../../../components/Images/Badges/badge.png";
import costIcon from "../../../components/Images/Badges/profit.png";
import sustainableIcon from "../../../components/Images/Badges/sustainable-practices.png";
import aiIcon from "../../../components/Images/Badges/artificial-intelligence.png";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-heading">Why Enterprises Trust Us</h2>
      <div className="reasons-container">
        <div className="reason-item">
          <img src={accuracyIcon} alt="Precision Icon" className="reason-icon" />
          <p>
            <strong>Precision Redefined:</strong><br/> Iris Aerial employs
            state-of-the-art technology to deliver unparalleled accuracy in data
            capture, ensuring your enterprise's requirements are met with unmatched
            precision.
          </p>
        </div>
        <div className="reason-item">
          <img src={speedIcon} alt="Speed Icon" className="reason-icon" />
          <p>
            <strong>Speed Meets Excellence:</strong><br/> Experience lightning-fast mapping
            and surveying services from Iris Aerial that outperform traditional
            methods, saving you time and resources without compromising quality.
          </p>
        </div>
        <div className="reason-item">
          <img src={efficiencyIcon} alt="Efficiency Icon" className="reason-icon" />
          <p>
            <strong>Efficiency Amplified:</strong><br/> Harness the power of advanced drone
            technology and streamlined processes with Iris Aerial to achieve faster
            project turnarounds and elevated operational efficiency.
          </p>
        </div>
        <div className="reason-item">
          <img src={costIcon} alt="Cost Icon" className="reason-icon" />
          <p>
            <strong>Cost-Effective Solutions:</strong> <br/>With extensive industry
            experience, Iris Aerial ensures you get exceptional results tailored to
            your project's needs, maximizing value without breaking the budget.
          </p>
        </div>
        <div className="reason-item">
          <img src={sustainableIcon} alt="Sustainability Icon" className="reason-icon" />
          <p>
            <strong>Sustainable Practices:</strong><br/> We use eco-friendly and sustainable
            practices to minimize environmental impact while delivering exceptional
            results.
          </p>
        </div>
        <div className="reason-item">
          <img src={aiIcon} alt="AI Icon" className="reason-icon" />
          <p>
            <strong>Artificial Intelligence:</strong> <br/>We leverage AI, machine learning,
            and cloud-based platforms to provide smarter, faster, and more efficient
            drone solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
