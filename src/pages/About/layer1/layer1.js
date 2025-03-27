import React from "react";
import "./layer1.css"; // Importing CSS for styling
import img1 from "../../../components/Images/Background/together.jpg";

const Layer1 = () => {
  return (
    <section
      className="layer_1"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="layer_1-overlay"></div>
      <div className="layer_1-content">
        <h1>Together Towards Tomorrow</h1>
      </div>
    </section>
  );
};

export default Layer1;
