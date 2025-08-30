import React from "react";
import pressure from "./iconsCard/pressure.png";
import temp from "./iconsCard/temp.png";
import visibility from "./iconsCard/visibility.png";
import wind from "./iconsCard/wind.png";
import cloud from "./iconsCard/cloud.png";

export default function CardsCharact({ data }) {
    if (!data) return null;

    const items = [
        { label: "Feels like", value: `${Math.round(data.main.feels_like)}°C`, icon: temp },
        { label: "Humidity", value: `${data.main.humidity}%`, icon: cloud },
        { label: "Pressure", value: `${data.main.pressure} hPa`, icon: pressure },
        { label: "Wind speed", value: `${data.wind.speed} m/s`, icon: wind },
        { label: "Visibility", value: `${data.visibility / 1000}`, icon: visibility },
    ];

    return (
        <div className="weather-container">
            

            {items.map((item, index) => (
                <div key={index} className="weather-card">
                    <p className="label">{item.label}</p>
                    <p className="value">{item.value}</p>
                    <img src={item.icon} alt={item.label} className="weather-icon" />
                </div>
            ))}

            <div className="weather-card">
                <p className="label">Min °C</p>
                <p className="value">{Math.round(data.main.temp_min)}°C</p>
                <p className="label">Max °C</p>
                <p className="value">{Math.round(data.main.temp_max)}°C</p>
            </div>
        </div>
    );
}
