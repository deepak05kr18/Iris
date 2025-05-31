import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import "../styles/Footer.css"; 
import img1 from '../components/Images/Logo/iris_logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Row */}
        <div className="footer-row">
          <div className="footer-column company">
            <div className="logo-container">
              <img src={img1} alt="Iris Aerial Innovations Logo"/>
              <div className="logo-text">
                <span className="iris-text">Iris Aerial Innovations Pvt Ltd</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><Link to="/services">Irrigation</Link></li>
              <li><Link to="/services">Mining</Link></li>
              <li><Link to="/services">Water</Link></li>
              <li><Link to="/services">Roads</Link></li>
              <li><Link to="/services">Urban & Rural</Link></li>
              <li><Link to="/services">Railways</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Technologies</h2>
            <ul>
              <li><Link to="/technologies">Lidar</Link></li>
              <li><Link to="/technologies">Photogrammetry</Link></li>
              <li><Link to="/technologies">Satellite</Link></li>
              <li><Link to="/technologies">AVSM</Link></li>
              <li><Link to="/technologies">DGPS/ETS</Link></li>
              <li><Link to="/technologies">Hydrology</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Products</h2>
            <ul>
              <li><Link to="/products">Smart Rail Monitor</Link></li>
              <li><Link to="/products">Smart Road Monitor</Link></li>
            </ul>
          </div>
        </div>

        <br />
        <hr className="divider" />
        <br />

        <div className="footer-row">
          <div className="footer-column contact">
            <h2>Contact Us</h2>
            <div className="contact-item">
              <div className="icon1"><FaEnvelope className="icon" /></div>
              <div className="contact-text">
                info@irisaerial.in<br />
                global@irisaerial.in
              </div>
            </div>
            <div className="contact-item">
              <div className="icon1"><FaPhone className="icon" /></div>
              <div className="contact-text">
                +91 9599115441<br />
                +1 (903) 781-1119
              </div>
            </div>
          </div>

          <div className="footer-column locations">
            <h2>Locations</h2>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div className="contact-text">
                B-142, Sector 8, Dwarka 110077, New Delhi, India
              </div>
            </div>
          </div>

          <div className="footer-column follow-us">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.youtube.com/channel/UC67VnwwK-1c17aKdLPc9Y8Q" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/iris-aerial-innovations-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>
              <a href="https://www.instagram.com/irisaerial.in?igsh=MTE3ZmUwbnIxOXNrbA==" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <br />
        <hr className="divider" />

        <div className="copyright-container">
          <div className="copyright-left">
            © 2025 Iris Aerial Innovations. All rights reserved.
          </div>
          <div className="copyright-right">
            <span>Developed and maintained by </span>
            <a 
              href="https://www.linkedin.com/in/deepak-kumar-257b83254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="deecode"
            >
              <FaCode className="code-icon" /><strong>DeeCode</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;