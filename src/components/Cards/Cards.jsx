import React, { useEffect, useState } from "react";
import { CardsItem } from "./CardsItem";
import sun from "../../image/sun.png";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

axios.defaults.baseURL = WEATHER_BASE_URL;

export const Cards = ({
  query,
  setGraphData,
  setWeeklyCity,
  onSeeMoreClick,
  selectedCity,
  onDelete,
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(() => {
    try {
      const stored = localStorage.getItem("cards");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Error parsing localStorage cards:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      const liked = cards.filter((c) => c.liked);
      localStorage.setItem("cards", JSON.stringify(liked));
    } catch (e) {
      console.error("Error writing localStorage cards:", e);
    }
  }, [cards]);

  useEffect(() => {
    if (!query) return;

    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/forecast`, {
          params: {
            q: query,
            units: "metric",
            appid: WEATHER_API_KEY,
          },
        });

        const temps = response.data.list;
        const currentHour = new Date().getHours();

        const closestTemp =
          temps.find((item) => {
            const forecastHour = new Date(item.dt_txt).getHours();
            return forecastHour >= currentHour;
          }) || temps[0];

        const cityId =
          response.data.city?.id ??
          `${response.data.city.name}_${response.data.city.country}`;

        const newCard = {
          id: cityId,
          city: response.data.city.name,
          country: response.data.city.country,
          time: new Date(closestTemp.dt_txt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: closestTemp.dt_txt,
          imgSrc: sun,
          imgAlt: "Sun",
          temp: `${Math.round(closestTemp.main.temp)}℃`,
          liked: false,
        };

        setCards((prevCards) => {
          const existing = prevCards.find((c) => c.id === newCard.id);
          const updatedCard = existing
            ? { ...newCard, liked: existing.liked }
            : newCard;

          const updated = [
            updatedCard,
            ...prevCards.filter((c) => c.id !== newCard.id),
          ];
          return updated.slice(0, 6);
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("City not found or API error");
        setLoading(false);
      }
    };

    fetchCards();
  }, [query]);

  const handleLike = (id) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, liked: !c.liked } : c))
    );
  };

  const handleDelete = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    onDelete();
  };

  const handleRefresh = async (id, city) => {
    try {
      const response = await axios.get(`/forecast`, {
        params: {
          q: city,
          units: "metric",
          appid: WEATHER_API_KEY,
        },
      });
      const temps = response.data.list;
      const currentHour = new Date().getHours();

      const closestTemp =
        temps.find((item) => {
          const forecastHour = new Date(item.dt_txt).getHours();
          return forecastHour >= currentHour;
        }) || temps[0];

      const updatedData = {
        time: new Date(closestTemp.dt_txt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: closestTemp.dt_txt,
        temp: `${Math.round(closestTemp.main.temp)}℃`,
      };

      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
      );
    } catch (err) {
      console.error("Refresh error:", err);
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Loading...</div>}
      <ul className="cards__list">
        {cards.map((card) => (
          <CardsItem
            key={card.id}
            {...card}
            setGraphData={setGraphData}
            onWeeklyClick={setWeeklyCity}
            onSeeMoreClick={onSeeMoreClick}
            selectedCity={selectedCity}
            onDelete={() => handleDelete(card.id)}
            onLike={() => handleLike(card.id)}
            onRefresh={() => handleRefresh(card.id, card.city)}
          />
        ))}
      </ul>
    </>
  );
};
