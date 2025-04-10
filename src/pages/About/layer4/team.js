import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./team.css";
import img1 from "../../../components/Images/Team/Resize image project-6.png";
import img2 from "../../../components/Images/Team/Deep.png";
import img3 from "../../../components/Images/Team/yashwant_resized_1300x900.jpeg";
import img4 from "../../../components/Images/Team/Soumya.png";
import img5 from "../../../components/Images/Team/arshil.jpg";
import img6 from "../../../components/Images/Team/manku.jpg";
import img7 from "../../../components/Images/Team/prerna.jpg";

const teamMembers = [
  { name: "Nikhil Saini", role: "CEO & Founder", img: img1 },
  { name: "Deep Kumar", role: "Co-Founder and CTO", img: img2 },
  { name: "Yashwant Singh", role: "Vice President Global", img: img3 },
  { name: "Saumya Verma", role: "Senior Associate", img: img4 },
  { name: "Arshil Raza", role: "Business Development Executive", img: img5 },
  { name: "Mayank Giri", role: "Business Analyst", img: img6 },
  { name: "Prerna Prachi", role: "Business Development Executive", img: img7 },
];

const Team = () => {
  const sliderRef = useRef(null);
  const cardWidth = 300; // Width of each team card + margin

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
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
        <div className="team-carousel" ref={sliderRef}>
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
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