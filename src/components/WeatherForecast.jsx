import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherForecast() {
  const [city, setCity] = useState("Kyiv");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "51dc7fe66c4bebf36f6762b120eaa1ae";

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(data.list);
    } catch (error) {
      console.error("Помилка завантаження погоди:", error);
      setError("Не вдалося знайти прогноз для цього міста 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = days[date.getDay()];
    const number = date.getDate();
    const month = months[date.getMonth()];
    return `${day}, ${number} ${month}`;
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

    return Object.values(grouped).slice(0, 5); 
  };

  const dailyForecast = groupForecastByDay();

  return (
    <div className="weather">

      <div className="weather__search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введіть місто"
          className="weather__input"
        />
        <button onClick={fetchWeather} className="weather__button">
          Пошук
        </button>
      </div>

      {loading && <p className="weather__loading">Завантаження погоди...</p>}
      {error && <p className="weather__error">{error}</p>}
      <h2 className="weather__title">5-day forecast</h2>
      <div className="weather__list">
        {dailyForecast.map((item, index) => (
          <div key={index} className="weather__card">
            <p className="weather__date">{formatDate(item.date)}</p>
            <div className="weather__temps">
            <img
              className="weather__icon"
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
            />
              <p className="weather__temp-main">
                {Math.round(item.max)}°C / {Math.round(item.min)}°C
              </p>
            </div>
            <p className="weather__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
