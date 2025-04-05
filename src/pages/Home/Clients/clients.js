import React from "react";
import "./clients.css";

// Import the images directly into your React component
import clientLogo1 from "../../../components/Images/Logo/Anand Raj.jpg";
import clientLogo2 from "../../../components/Images/Logo/CR.jpg";
import clientLogo3 from "../../../components/Images/Logo/DMIA.jpg";
import clientLogo4 from "../../../components/Images/Logo/East Rail.jpg";
import clientLogo5 from "../../../components/Images/Logo/NR.jpg";
import clientLogo6 from "../../../components/Images/Logo/Royal.jpg";
import clientLogo7 from "../../../components/Images/Logo/s2f.jpg";
import clientLogo8 from "../../../components/Images/Logo/SRK.png";
import clientLogo9 from "../../../components/Images/Logo/Vedanta.jpg";

const ClientLogos = () => {
  const clients = [
    { id: 1, src: clientLogo1, alt: "Client 1"  },
    { id: 2, src: clientLogo2, alt: "Client 2"  },
    { id: 3, src: clientLogo3, alt: "Client 3"  },
    { id: 4, src: clientLogo4, alt: "Client 4"  },
    { id: 5, src: clientLogo5, alt: "Client 5"  },
    { id: 6, src: clientLogo6, alt: "Client 6"  },
    { id: 7, src: clientLogo7, alt: "Client 7"  },
    { id: 8, src: clientLogo8, alt: "Client 8"  },
    { id: 9, src: clientLogo9, alt: "Client 9"  },
  ];

  // Duplicate the client logos to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="client-logos-container">
      <h2 className="clients-heading">Our Clients</h2> {/* Added heading */}
      <div className="logos-wrapper">
        {duplicatedClients.map(client => (
            <img
              src={client.src}
              alt={client.alt}
              className="client-logo"
            />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
