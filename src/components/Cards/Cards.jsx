import React, { useEffect, useState } from "react";
import { CardsItem } from "./CardsItem";
import sun from "../../image/sun.png";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

axios.defaults.baseURL = WEATHER_BASE_URL;

export const Cards = ({ query, setGraphData, graphData }) => {
  const [error, setError] = useState("");
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [temperatures, setTemperatures] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchCards = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `/forecast?q=${query}&units=metric&appid=${WEATHER_API_KEY}`
        );

        console.log(response);
        setContents(response);

        const temps = response.data.list;

        const currentHour = new Date().getHours();

        const closestTemp = temps.find((item) => {
          const forecastHour = new Date(item.dt_txt).getHours();
          return forecastHour >= currentHour;
        });

        const newTemps = closestTemp ? [closestTemp] : [temps[0]];
        setTemperatures(newTemps);

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
          const newCards = [...prevCards];

          if (newCards.length >= 3) {
            newCards.pop();
          }

          return [newCard, ...newCards];
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
      }
    };

    fetchCards();
  }, [query]);

  return (
    <>
      <ul className="cards__list">
        {cards.map((card, index) => {
          return (
            <CardsItem
              key={index}
              city={card.city}
              country={card.country}
              time={card.time}
              date={card.date}
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              temp={card.temp}
            ></CardsItem>
          );
        })}

      </ul>
    </>
  );
};
