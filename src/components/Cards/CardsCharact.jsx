import { useEffect, useState } from "react";
import axios from "axios";
import pressure from "./iconsCard/pressure.png";
import temp from "./iconsCard/temp.png";
import visibility from "./iconsCard/visibility.png";
import wind from "./iconsCard/wind.png";
import cloud from "./iconsCard/cloud.png";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_API_URL;

axios.defaults.baseURL = WEATHER_BASE_URL;

export default function CardsCharact({ city }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
      );
      setData(response.data);
    } catch (error) {
      setError("Не вдалося завантажити погоду", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Завантаження...</p>
      </div>
    );
  }

  if (error) return <p className="error">{error}</p>;
  if (!data) return null;

  const items = [
    {
      label: "Feels like",
      value: `${Math.round(data.main.feels_like)}°C`,
      icon: temp,
    },
    { label: "Humidity", value: `${data.main.humidity}%`, icon: cloud },
    { label: "Pressure", value: `${data.main.pressure} hPa`, icon: pressure },
    { label: "Wind speed", value: `${data.wind.speed} m/s`, icon: wind },
    {
      label: "Visibility",
      value: `${data.visibility / 1000} km`,
      icon: visibility,
    },
  ];

  return (
    <div className="weather-container">
      {items.map((item, index) => (
        <div key={index} className="weather-card">
          <img src={item.icon} alt={item.label} className="weather-icon" />
          <p className="label">{item.label}</p>
          <p className="value">{item.value}</p>
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
