import React from "react";
import "./clients.css";

import clientLogo1 from "../../../components/Images/Logo/Anand_Raj-removebg-preview.png";
import clientLogo3 from "../../../components/Images/Logo/CEG logo[1].png";
import clientLogo4 from "../../../components/Images/Logo/CR-removebg-preview.png";
import clientLogo15 from "../../../components/Images/Logo/DMIA-removebg-preview.png";
import clientLogo6 from "../../../components/Images/Logo/East_Rail-removebg-preview.png";
import clientLogo7 from "../../../components/Images/Logo/50hertz_Logo.png";
import clientLogo9 from "../../../components/Images/Logo/NR-removebg-preview.png";
import clientLogo10 from "../../../components/Images/Logo/Royal-removebg-preview.png";
import clientLogo11 from "../../../components/Images/Logo/Vedanta-removebg-preview.png";
import clientLogo12 from "../../../components/Images/Logo/ecomen.jpeg";
import clientLogo13 from "../../../components/Images/Logo/WhatsApp Image 2025-02-12 at 16.38.35_f7475348.jpg";
import clientLogo14 from "../../../components/Images/Logo/logo1.jpeg";
import clientLogo5 from "../../../components/Images/Logo/logo2.jpeg";
import clientLogo16 from "../../../components/Images/Logo/logo3.jpeg";

const ClientLogos = () => {
  const clients = [
    { id: 1, src: clientLogo1, alt: "Client 1" },
    { id: 3, src: clientLogo3, alt: "Client 3" },
    { id: 4, src: clientLogo4, alt: "Client 4" },
    { id: 5, src: clientLogo5, alt: "Client 5" },
    { id: 6, src: clientLogo6, alt: "Client 6" },
    { id: 7, src: clientLogo7, alt: "Client 7" },
    { id: 9, src: clientLogo9, alt: "Client 9" },
    { id: 10, src: clientLogo10, alt: "Client 10" },
    { id: 11, src: clientLogo11, alt: "Client 11" },
    { id: 12, src: clientLogo12, alt: "Client 12" },
    { id: 13, src: clientLogo13, alt: "Client 13" },
    { id: 14, src: clientLogo14, alt: "Client 14" },
    { id: 15, src: clientLogo15, alt: "Client 15" },
    { id: 16, src: clientLogo16, alt: "Client 16" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="client-logos-container">
      <h2 className="clients-heading">Clientele</h2>
      <div className="logos-scroll-container">
        <div className="logos-wrapper">
          {duplicatedClients.map((client, index) => (
            <div key={`${client.id}-${index}`} className="logo-container">
              <img
                src={client.src}
                alt={client.alt}
                className="client-logo"
              />
            </div>
          ))}
        </div>
        <div className="fade fade-left" />
        <div className="fade fade-right" />
      </div>
    </div>
  );
};

export default ClientLogos;