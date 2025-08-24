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
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=uk&appid=${API_KEY}`
      );
      setForecast(data.list);
    } catch (error) {
      console.error("Помилка завантаження погоди:", error);
      setError("Не вдалося знайти прогноз для цього міста 😢");
    } finally {
      setLoading(false);
    }
  };

  // Завантажуємо прогноз при першому рендері
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Форматуємо дату
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const day = days[date.getDay()];
    const number = date.getDate();
    return `${day}, ${number}`;
  };

  // Беремо лише один прогноз на день — о 12:00
  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="weather">
      <h2 className="weather__title">Прогноз погоди на 5 днів</h2>

      {/* Форма пошуку */}
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

      {/* Стан завантаження */}
      {loading && <p className="weather__loading">Завантаження погоди...</p>}

      {/* Вивід помилки */}
      {error && <p className="weather__error">{error}</p>}

      {/* Вивід прогнозу */}
      <div className="weather__list">
        {dailyForecast.map((item) => (
          <div key={item.dt} className="weather__card">
            <p className="weather__date">{formatDate(item.dt_txt)}</p>
            <p className="weather__temp">{Math.round(item.main.temp)}°C</p>
            <p className="weather__desc">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
