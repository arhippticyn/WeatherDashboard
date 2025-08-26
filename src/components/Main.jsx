import React from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";
import WeatherForecast from "./WeatherForecast";
import Pets from "./Pets/Pets";
import Hero from "./Hero/Hero";

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Hero />
        <Pets />
        <Nature />
        <Graph
          data={[
            10, 20, 30, 20, 10, 20, 40, 50, 20, 30, 10, 30, 20, 10, 20, 40, 50,
            20, 30, 10,
          ]}
        ></Graph>
        <WeatherForecast />
      </main>
    </div>
  );
};

export default Main;
