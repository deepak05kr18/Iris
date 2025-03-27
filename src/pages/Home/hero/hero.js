import React, { useState } from "react";
import "./hero.css";  // Importing CSS for styling
import img1 from "../../../components/Images/Background/hero3.jpg";
import img2 from "../../../components/Images/Background/hero1.jpg";
import img3 from "../../../components/Images/Background/hero2.webp";




const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: img2, title: "We’re so glad you're here", description: "Our mission is to provide you with top-notch geospatial solutions and modern surveying services with state-of-the-art technologies." },
    { image: img1, title: "Your challenge is our passion", description: "We strive to deliver results that exceed your expectations." },
    { image: img3, title: "Innovative Solutions", description: "Empowering businesses with cutting-edge technologies." }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Move to next slide, and loop to the first
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length); // Move to previous slide, and loop back to the last one
  };

  return (
    <section className="hero">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="nav-arrow right" onClick={goToNextSlide}>
        &gt;
      </button>

      {/* Left Arrow (Appears when right arrow is clicked) */}
      {currentSlide > 0 && (
        <button className="nav-arrow left" onClick={goToPreviousSlide}>
          &lt;
        </button>
      )}
    </section>
  );
};

export default HeroBanner;
