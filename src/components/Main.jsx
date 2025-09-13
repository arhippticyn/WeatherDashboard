import React, { useState } from "react";
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

  const handleSeeMoreClick = (city) => {
    setSelectedCity((prev) => (prev === city ? null : city));
  };


  return (
    <div className="main-wrapper">
      <main className="main">
        <Cards
          setGraphData={setGraphData}
          graphData={graphData}
          query={searchValue}
          setWeeklyCity={setWeeklyCity}
          onSeeMoreClick={handleSeeMoreClick}
          selectedCity={selectedCity}
        />

        <CardsCharact city={searchValue} />

        {graphData && <Graph data={graphData} />}

        {selectedCity && <WeatherForecast city={selectedCity} />}
        {weeklyCity && <WeatherForecast city={weeklyCity} />}
        <News />
        <Nature />
      </main>
    </div>
  );
};

export default Main;