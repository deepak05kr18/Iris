import React from "react";
import "./clients.css";

import clientLogo1 from "../../../components/Images/Logo/Anand_Raj-removebg-preview.png";
import clientLogo2 from "../../../components/Images/Logo/Arki Logo[1].png";
import clientLogo3 from "../../../components/Images/Logo/CEG logo[1].png";
import clientLogo4 from "../../../components/Images/Logo/CR-removebg-preview.png";
import clientLogo5 from "../../../components/Images/Logo/DMIA-removebg-preview.png";
import clientLogo6 from "../../../components/Images/Logo/East_Rail-removebg-preview.png";
import clientLogo8 from "../../../components/Images/Logo/Manikaran Logo[1].png";
import clientLogo9 from "../../../components/Images/Logo/NR-removebg-preview.png";
import clientLogo10 from "../../../components/Images/Logo/Royal-removebg-preview.png";
import clientLogo11 from "../../../components/Images/Logo/Vedanta-removebg-preview.png";
import clientLogo12 from "../../../components/Images/Logo/ecomen.jpeg";
import clientLogo13 from "../../../components/Images/Logo/WhatsApp Image 2025-02-12 at 16.38.35_f7475348.jpg";

const ClientLogos = () => {
  const clients = [
    { id: 1, src: clientLogo1, alt: "Client 1" },
    { id: 2, src: clientLogo2, alt: "Client 2" },
    { id: 3, src: clientLogo3, alt: "Client 3" },
    { id: 4, src: clientLogo4, alt: "Client 4" },
    { id: 5, src: clientLogo5, alt: "Client 5" },
    { id: 6, src: clientLogo6, alt: "Client 6" },
    { id: 8, src: clientLogo8, alt: "Client 8" },
    { id: 9, src: clientLogo9, alt: "Client 9" },
    { id: 10, src: clientLogo10, alt: "Client 10" },
    { id: 11, src: clientLogo11, alt: "Client 11" },
    { id: 12, src: clientLogo12, alt: "Client 12" },
    { id: 13, src: clientLogo13, alt: "Client 13" },

  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="client-logos-container">
      <h2 className="clients-heading">Our Clients</h2>
      <div className="logos-scroll-container">
        <div className="logos-wrapper">
          {duplicatedClients.map((client) => (
            <img
              key={client.id + Math.random()}
              src={client.src}
              alt={client.alt}
              className="client-logo"
            />
          ))}
        </div>
        <div className="fade fade-left" />
        <div className="fade fade-right" />
      </div>
    </div>
  );
};

export default ClientLogos;
