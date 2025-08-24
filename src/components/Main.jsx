import React from "react";
import Nature from "./Nature/Nature";
import WeatherForecast from "./WeatherForecast";

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Nature />
        <WeatherForecast />
      </main>
    </div>
  )
}

export default Main