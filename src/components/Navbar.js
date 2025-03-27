import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  
import logo from "./Images/Logo/Alogo.jpeg";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    // Toggle the menu when hamburger is clicked
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
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

            {/* Menu list */}
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/technologies">Technologies</Link></li>
                <li><Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
