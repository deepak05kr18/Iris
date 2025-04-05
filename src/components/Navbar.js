import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from "./Images/Logo/Alogo.jpeg";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    // Toggle the menu when the hamburger is clicked
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu when a link is clicked (for mobile view)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="navbar-logo">
                <Link to="/" onClick={handleLinkClick}>
                    <img src={logo} alt="Company Logo" />
                </Link>
                <div className="logo-text">
                    Iris Aerial Innovations
                </div>
            </div>

            {/* Hamburger menu icon for mobile */}
            <div className="navbar-menu-icon" onClick={handleMenuToggle}>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
                <div className={isMenuOpen ? "bar open" : "bar"}></div>
            </div>

            {/* Navbar Menu */}
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
                <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
                <li><Link to="/technologies" onClick={handleLinkClick}>Technologies</Link></li>
                <li><Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
