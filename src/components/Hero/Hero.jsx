import React from "react";
import "../../styles/styles.scss"; // головний файл стилів
import bgImage from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">Weather dashboard</h1>
          <p className="hero-subtitle">
            Create your personal list of favorite cities and always be aware of the weather.
          </p>
          <p className="hero-date">October 2023 <br /> Friday, 13th</p>

          <div className="search-box">
            <input type="text" placeholder="Search location..." />
            <button>🔍</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
