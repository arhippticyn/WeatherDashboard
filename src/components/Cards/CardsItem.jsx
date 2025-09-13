import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_API_URL;

export const CardsItem = ({
  city,
  country,
  time,
  date,
  imgSrc,
  imgAlt,
  temp,
  setGraphData,
  onWeeklyClick,
  selectedCity,
}) => {
  const handleHourlyClick = async () => {
    try {
      const response = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: WEATHER_API_KEY,
          units: "metric",
        },
      });
      const hourlyTemps = response.data.list.slice(0, 24).map((item) => item.main.temp);
      setGraphData(hourlyTemps);
    } catch (error) {
      console.error("Ошибка при загрузке прогноза:", error);
    }
  };

  const formatDate = () => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString()} | ${dateObj.toLocaleDateString('en-US', { weekday: 'short' })}`;
  };

  return (
    <li className="cards__item item">
      <div className="item__location location">
        <h2 className="location__city">{city}</h2>
        <h2 className="location__country">{country}</h2>
      </div>

      <h2 className="item__temperature">{time}</h2>

      <div className="item__buttons buttons">
        <button className="buttons__hourly button" onClick={handleHourlyClick}>
          Hourly forecast
        </button>
        <button className="buttons__weekly button" onClick={() => onWeeklyClick(city)}>
          Weekly forecast
        </button>
      </div>

      <p className="item__date date">{formatDate()}</p>

      <div className="item__main">
        <div className="main__img-container img-Container">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h2 className="main__temp">{temp}</h2>
      </div>

      <div className="item__btns-control control">
        <button className="control__refresh refresh">
          <IoIosRefresh className="refresh__icon" />
        </button>
        <button className="control__like like">
          <FaRegHeart className="like__icon" />
        </button>
        <button className="control__more button" >
          See more
        </button>
        <button className="contorl__delete delete">
          <CiTrash className="delete__icon" />
        </button>
      </div>
    </li>
  );
};
