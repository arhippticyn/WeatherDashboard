import React, { useState } from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";
import WeatherForecast from "./WeatherForecast";
import CardsCharact from "./Cards/CardsCharact"
import News from "./News/News";
import Hero from "./Hero/Hero";
import Cards from './Cards/Cards';

const Main = () => {
  const [graphData,setGraphData] = useState(null)

  return (
    <div className="main-wrapper">
      <main className="main">
        <Cards setGraphData={setGraphData} graphData={graphData} />        
        <CardsCharact city="Kyiv" />
        {graphData && <Graph data={graphData} />}
        <WeatherForecast />
        <News />
        <Nature />
      </main>
    </div>
  );
};

export default Main;

