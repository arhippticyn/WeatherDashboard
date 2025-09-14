import React, { use, useEffect, useRef } from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Hero = ({ query, setQuery, onSearch }) => {
  const [date, setDate] = useState(new Date());
  const inputRef = useRef(null);

  const clearInput = () => {
    inputRef.current.value = "";
  };

  useEffect(() => {
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    const timer = setTimeout(() => setDate(new Date()), msUntilMidnight);
    return () => clearTimeout(timer);
  }, [date]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayName = days[date.getDay()];
  const day = date.getDate();

  const getDaySuffix = (n) => {
    if (n % 10 === 1 && n % 100 !== 11) return "st";
    if (n % 10 === 2 && n % 100 !== 12) return "nd";
    if (n % 10 === 3 && n % 100 !== 13) return "rd";
    return "th";
  };

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-content-title">Weather dashboard</h1>

          <div className="hero__date">
            <div className="hero-content-down">
              <p className="hero-content-subtitle">
                Create your personal list of favorite cities and always be aware
                of the weather.
              </p>
              <hr />
              <p className="hero-content-date">
                {month} {year} <br /> {dayName}, {day}
                {getDaySuffix(day)}
              </p>
            </div>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search location..."
              ref={inputRef}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              onClick={() => {
                onSearch();
                clearInput();
              }}
            >
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
