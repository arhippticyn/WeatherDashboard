import React from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";
import WeatherForecast from "./WeatherForecast";
import CardsCharact from "./Cards/CardsCharact"
import News from "./News/News";
import Hero from "./Hero/Hero"

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <News />
        <Nature />
        <CardsCharact city="Kyiv" />
        <WeatherForecast />
      </main>
    </div>
  );
};

export default Main;

