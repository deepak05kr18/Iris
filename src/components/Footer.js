import React from "react";
import { FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure CSS is loaded

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Row: Company, Quick Links, Services, Technologies, Products */}
        <div className="footer-row">
          <div className="footer-column company">
           
            <h2>Iris Aerial Innovations</h2>
            <p>
              A top-rated survey and engineering consultancy specializing
              in advanced technology and design across multiple sectors.
            </p>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><a href="/services">Irrigation</a></li>
              <li><a href="/services">Mining</a></li>
              <li><a href="/services">Water</a></li>
              <li><a href="/services">Roads</a></li>
              <li><a href="/services">Urban & Rural</a></li>
              <li><a href="/services">Railways</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Technologies</h2>
            <ul>
              <li><a href="/technologies">Lidar</a></li>
              <li><a href="/technologies">Photogrammetry</a></li>
              <li><a href="/technologies">Satellite</a></li>
              <li><a href="/technologies">AVSM</a></li>
              <li><a href="/technologies">DGPS/ETS</a></li>
              <li><a href="/technologies">Hydrology</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Products</h2>
            <ul>
              <li><a href="/products">Smart Rail Monitor</a></li>
              <li><a href="/products">Smart Road Monitor</a></li>
              <li><a href="/products">Drones</a></li>
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
            <p><FaEnvelope className="icon" /> info@irisaerial.in</p>
            <p><FaPhone className="icon" />+91 9599115441</p>
          </div>

          <div className="footer-column locations">
            <h2>Locations</h2>
            <p><FaMapMarkerAlt className="icon" /> B-142, Sector 8, Dwarka 110077, New Delhi, India</p>
          </div>

          <div className="footer-column follow-us">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.youtube.com/channel/UC67VnwwK-1c17aKdLPc9Y8Q"><FaYoutube className="icon facebook" /></a>
              <a href="https://www.linkedin.com/company/iris-aerial-innovations-pvt-ltd/"><FaLinkedin className="icon linkedin" /></a>
              <a href="https://www.instagram.com/irisaerial.in?igsh=MTE3ZmUwbnIxOXNrbA=="><FaInstagram className="icon twitter" /></a>
            </div>
          </div>
        </div>

        <br />
        <hr />

        {/* Copyright Section */}
        <div className="copyright">
          <p>© 2024 Iris Arial Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
