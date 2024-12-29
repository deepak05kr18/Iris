import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  
import logo from "./Images/Logo/iris_logo.jpeg";

function Navbar() {
    // State to manage the toggle of the menu on mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu when hamburger is clicked
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
                <div className="logo-text">
                    Iris Aerial Innovations
                </div>
            </div>

            {/* Hamburger icon for small screens */}
            <div className="navbar-menu-icon" onClick={handleMenuToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Menu list, conditional className to toggle visibility */}
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact-us">Technologies</Link></li>
                <li><Link to="/contact-us">Gallery</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
