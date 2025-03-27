// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import AboutUs from './pages/About/AboutUsPage';
import Services from './pages/Services/ServicesPage';
import ContactUs from './pages/Contact_us/ContactUsPage';
import Technologies from './pages/Technologies/technology';
import Products from './pages/Products/products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'; 

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is inside Router */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
