import React from "react";
import Nature from "./Nature/Nature";
import WeatherForecast from "./WeatherForecast";
import CardsCharact from "./Cards/CardsCharact"

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Nature />
        <WeatherForecast />
        <CardsCharact />
      </main>
    </div>
  )
}

export default Main