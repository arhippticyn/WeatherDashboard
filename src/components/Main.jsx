import React from "react";
import Nature from "./Nature/Nature";
import WeatherForecast from "./WeatherForecast";

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <WeatherForecast />
        <Nature />
      </main>
    </div>
  )
}

export default Main