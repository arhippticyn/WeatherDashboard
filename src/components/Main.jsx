import React from "react";
import Nature from "./Nature/Nature";
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
        <WeatherForecast />
      </main>
    </div>
  )
}

export default Main