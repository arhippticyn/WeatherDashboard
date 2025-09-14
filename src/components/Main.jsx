import React, { useRef, useState } from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";
import WeatherForecast from "./WeatherForecast";
import CardsCharact from "./Cards/CardsCharact";
import News from "./News/News";
import Hero from "./Hero/Hero";
import { Cards } from "./Cards/Cards";

const Main = ({ searchValue }) => {
  const [graphData, setGraphData] = useState(null);
  const [weeklyCity, setWeeklyCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const descrRef = useRef(null);

  const handleSeeMoreClick = (city) => {
    setSelectedCity((prevCity) => (prevCity === city ? null : city));
  };

  const handleWeeklyClick = (city) => {
    setWeeklyCity(city);
  };

  const deleteCardDescr = () => {
    setWeeklyCity(null);
    setSelectedCity(null);
    setGraphData(null);
  };

  return (
    <div className="main-wrapper">
      <main className="main">
        <Cards
          setGraphData={setGraphData}
          graphData={graphData}
          query={searchValue}
          setWeeklyCity={handleWeeklyClick}
          onSeeMoreClick={handleSeeMoreClick}
          selectedCity={selectedCity}
          onDelete={deleteCardDescr}
        />

        <div className="cards__description" ref={descrRef}>
          {selectedCity && <CardsCharact city={selectedCity} />}

          {graphData && <Graph data={graphData} />}

          {weeklyCity && <WeatherForecast city={weeklyCity} />}
        </div>
        <News />
        <Nature />
      </main>
    </div>
  );
};

export default Main;
