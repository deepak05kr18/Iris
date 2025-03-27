import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure CSS is loaded

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Row: Company, Quick Links, Services, Technologies, Products */}
        <div className="footer-row">
          <div className="footer-column company">
           
            <h2>Iris Innovations</h2>
            <p>
              A top-rated survey and engineering consultancy specializing
              in advanced technology and design across multiple sectors.
            </p>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><a href="#">Irrigation</a></li>
              <li><a href="#">Mining</a></li>
              <li><a href="#">Roads</a></li>
              <li><a href="#">Water</a></li>
              <li><a href="#">Urban & Rural</a></li>
              <li><a href="#">Railways</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Technologies</h2>
            <ul>
              <li><a href="#">Lidar</a></li>
              <li><a href="#">Photogrammetry</a></li>
              <li><a href="#">Satellite</a></li>
              <li><a href="#">AVSM</a></li>
              <li><a href="#">DGPS/ETS</a></li>
              <li><a href="#">Hydrology</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Products</h2>
            <ul>
              <li><a href="#">Smart Rail Monitor</a></li>
              <li><a href="#">Smart Road Monitor</a></li>
              <li><a href="#">Drones</a></li>
            </ul>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Second Row: Contact Us (Left), Locations (Middle), Follow Us (Right) */}
        <div className="footer-row">
          <div className="footer-column contact">
            <h2>Contact Us</h2>
            <p><FaEnvelope className="icon" /> support@example.com</p>
            <p><FaPhone className="icon" /> +123 456 7890</p>
          </div>

          <div className="footer-column locations">
            <h2>Locations</h2>
            <p><FaMapMarkerAlt className="icon" /> Delhi, India</p>
          </div>

          <div className="footer-column follow-us">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#"><FaFacebook className="icon facebook" /></a>
              <a href="#"><FaLinkedin className="icon linkedin" /></a>
              <a href="#"><FaTwitter className="icon twitter" /></a>
            </div>
          </div>
        </div>

        <br />
        <hr />

        {/* Copyright Section */}
        <div className="copyright">
          <p>© 2024 Iris Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
