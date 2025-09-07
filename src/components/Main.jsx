import React, { useState } from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";
import WeatherForecast from "./WeatherForecast";
import CardsCharact from "./Cards/CardsCharact";
import News from "./News/News";
import Hero from "./Hero/Hero";
import { Cards } from "./Cards/Cards";
const Main = ({ searchValue }) => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <News />
        <Cards query={searchValue}></Cards>
        <Nature />
        <Graph
          data={[
            10, 20, 30, 20, 10, 20, 40, 50, 20, 30, 10, 30, 20, 10, 20, 40, 50,
            20, 30, 10,
          ]}
        ></Graph>
        <CardsCharact city="Kyiv" />
        <WeatherForecast />
      </main>
    </div>
  );
};

export default Main;
