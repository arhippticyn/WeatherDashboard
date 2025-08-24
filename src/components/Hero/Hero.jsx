import React from "react";
import { FiSearch } from "react-icons/fi"; 


const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-content-title">Weather dashboard</h1>
          <p className="hero-content-subtitle">
            Create your personal list of favorite cities and always be aware of the weather.
          </p>
          <p className="hero-content-date">
            October 2023 <br /> Friday, 13th
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search location..." />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
