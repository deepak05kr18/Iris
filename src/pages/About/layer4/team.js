import React from "react";
import "./team.css";
import img1 from '../../../components/Images/Team/Resize image project-6.png';

const teamMembers = [
  {
    name: "Nikhil",
    role: "CEO & Founder",
    img: img1,
  },
  {
    name: "Mollie Ross",
    role: "Art Director",
    img: img1,  },
  {
    name: "Dylan Adams",
    role: "Developer",
    img: img1,  },
  {
    name: "Jennifer Page",
    role: "Designer",
    img: img1,  },
];

const Team = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h1>The Faces Behind the Innovation</h1>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="column" key={index}>
            <div className="team-9">
              <div className="team-img">
                <img src={member.img} alt={`${member.name}`} />
              </div>
              <div className="team-content">
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
              </div>
              <div className="team-overlay">
                <p>Some text goes here that describes the team member.</p>
                <div className="team-social">
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
