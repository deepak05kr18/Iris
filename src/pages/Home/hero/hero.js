import React, { useState, useEffect, useCallback } from "react";
import "./hero.css";
import img1 from "../../../components/Images/Background/Satellite.jpg";
import img2 from "../../../components/Images/Background/hero1.webp";
import img3 from "../../../components/Images/Background/hero2.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img2,
      title: "Mapping the Future with Precision",
      description:
        "Our mission is to provide you with top-notch geospatial solutions and modern surveying services with state-of-the-art technologies.",
    },
    {
      image: img1,
      title: "Your challenge is our passion",
      description: "We strive to deliver results that exceed your expectations.",
    },
    {
      image: img3,
      title: "Innovative Solutions",
      description: "Empowering businesses with cutting-edge technologies.",
    },
  ];

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
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

      <button className="nav-arrow right" onClick={goToNextSlide}>
        <FaChevronRight className="arrow-icon" />
      </button>
      <button className="nav-arrow left" onClick={goToPreviousSlide}>
        <FaChevronLeft className="arrow-icon" />
      </button>

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
