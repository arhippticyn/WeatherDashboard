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
  selectedCity
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchCards = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `/forecast?q=${query}&units=metric&appid=${WEATHER_API_KEY}`
        );

        const temps = response.data.list;
        const currentHour = new Date().getHours();

        const closestTemp = temps.find((item) => {
          const forecastHour = new Date(item.dt_txt).getHours();
          return forecastHour >= currentHour;
        }) || temps[0];

        const newCard = {
          city: response.data.city.name,
          country: response.data.city.country,
          time: new Date(closestTemp.dt_txt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          date: new Date(closestTemp.dt_txt).toLocaleDateString([], {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }),
          imgSrc: sun,
          imgAlt: "Sun",
          temp: `${Math.round(closestTemp.main.temp)}℃`,
        };

        setCards((prevCards) => {
          const updated = [newCard, ...prevCards.filter(card => card.city !== newCard.city)];
          return updated.slice(0, 3); 
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("City not found or API error");
      }
    };

    fetchCards();
  }, [query]);

  return (
    <ul className="cards__list">
      {cards.map((card, index) => (
        <CardsItem
          key={index}
          {...card}
          setGraphData={setGraphData}
          onWeeklyClick={setWeeklyCity}
          onSeeMoreClick={onSeeMoreClick}
          selectedCity={selectedCity}
        />
      ))}
    </ul>
  );
};
