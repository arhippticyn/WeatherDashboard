import { useEffect, useState } from "react";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_API_URL;

axios.defaults.baseURL = WEATHER_BASE_URL;

const WeatherForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
        );
        setForecast(response.data.list);
      } catch (err) {
        console.error("Ошибка загрузки прогноза:", err);
        setError("Не удалось загрузить прогноз для этого города.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${days[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    }`;
  };

  const groupForecastByDay = () => {
    const grouped = {};
    forecast.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!grouped[date]) {
        grouped[date] = {
          date: item.dt_txt,
          min: item.main.temp,
          max: item.main.temp,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        };
      } else {
        grouped[date].min = Math.min(grouped[date].min, item.main.temp);
        grouped[date].max = Math.max(grouped[date].max, item.main.temp);
      }
    });
    return Object.values(grouped).slice(0, 6);
  };

  return (
    <div className="weather">
      {loading && <p>Загрузка прогноза...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && forecast.length > 0 && (
        <>
          <h2 className="weather__title">
            5-day forecast for <span>{city}</span>
          </h2>
          <div className="weather__list">
            {groupForecastByDay().map((item, index) => (
              <div key={index} className="weather__card">
                <p className="weather__date">{formatDate(item.date)}</p>
                <div className="weather__temps">
                  <img
                    className="weather__icon"
                    src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt={item.description}
                  />
                  <p>
                    {Math.round(item.max)}°C / {Math.round(item.min)}°C
                  </p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherForecast;
