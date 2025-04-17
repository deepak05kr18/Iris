import React, { useState, useEffect, useCallback } from "react";
import "./hero.css";
import img1 from "../../../components/Images/Background/Satellite.jpg";
import img2 from "../../../components/Images/Background/hero1.webp";
import img3 from "../../../components/Images/Background/hero2.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("right");

  const slides = [
    { 
      image: img2, 
      title: "We're so glad you're here", 
      description: "Our mission is to provide you with top-notch geospatial solutions and modern surveying services with state-of-the-art technologies." 
    },
    { 
      image: img1, 
      title: "Your challenge is our passion", 
      description: "We strive to deliver results that exceed your expectations." 
    },
    { 
      image: img3, 
      title: "Innovative Solutions", 
      description: "Empowering businesses with cutting-edge technologies." 
    }
  ];

  // Memoize the next slide function to prevent unnecessary recreations
  const goToNextSlide = useCallback(() => {
    setTransitionDirection("right");
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPreviousSlide = useCallback(() => {
    setTransitionDirection("left");
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000);
    return () => clearInterval(interval);
  }, [goToNextSlide]); // Fixed the dependency warning by including goToNextSlide

  const goToSlide = (index) => {
    setTransitionDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? "active" : 
            index === (currentSlide + 1) % slides.length ? "next" : 
            index === (currentSlide - 1 + slides.length) % slides.length ? "prev" : ""
          } ${transitionDirection}`}
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
        <FaChevronRight className="arrow-icon" />
      </button>
      <button className="nav-arrow left" onClick={goToPreviousSlide}>
        <FaChevronLeft className="arrow-icon" />
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;