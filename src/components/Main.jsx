import React from "react";
import Nature from "./Nature/Nature";
import WeatherForecast from "./WeatherForecast";
import Pets from "./Pets/Pets";


const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Pets />

        <WeatherForecast />

        <Nature />
        <WeatherForecast />
      </main>
    </div>
  )
}

export default Main