// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import ProfileImage from '/src/assets/images/profile.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <img src={ProfileImage} alt="Lilian Nduku" className="hero-image" />
      <h1 className="hero-title">Lilian Nduku</h1>
      <p className="hero-tagline">Telecommunication & IT Student | Tech Enthusiast</p>
      <div className="hero-buttons">
        <a href="#projects" className="hero-button primary">View My Work</a>
        <a href="/shp-portfolio/src/assets/resume/resume.pdf" className="hero-button secondary">Download Resume</a>
      </div>
    </section>
  );
};

export default Hero;