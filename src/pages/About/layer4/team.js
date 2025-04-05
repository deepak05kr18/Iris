import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./team.css";
import img1 from "../../../components/Images/Team/Resize image project-6.png";
import img2 from "../../../components/Images/Team/Deep.png";
import img3 from "../../../components/Images/Team/yashwant_resized_1300x900.jpeg";
import img4 from "../../../components/Images/Team/Soumya.png";

const teamMembers = [
  { name: "Nikhil", role: "CEO & Founder", img: img1 },
  { name: "Deep Kumar", role: "Co-Founder and CTO", img: img2 },
  { name: "Yashwant Singh", role: "Vice President Global", img: img3 },
  { name: "Saumya Verma", role: "Senior Associate", img: img4 },
  
];

const Team = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="section-title">
        <h1>Meet Our Team</h1>
      </div>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <AiOutlineLeft size={25} />
        </button>
        <div className="row" ref={sliderRef}>
          {teamMembers.map((member, index) => (
            <div className="column" key={index}>
              <div className="team-9">
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-content">
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <AiOutlineRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Team;
