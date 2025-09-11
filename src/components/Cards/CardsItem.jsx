import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

export default function CardsItem({
  city,
  country,
  time,
  date,
  imgSrc,
  imgAlt,
  temp,
  onWeeklyClick,
}) {
  return (
    <li className="cards__item item">
      <div className="item__location location">
        <h2 className="location__city">{city}</h2>
        <h2 className="location__country">{country}</h2>
      </div>

      <h2 className="item__temperature">{time}</h2>

      <div className="item__buttons buttons">
        <button className="buttons__hourly button">Hourly forecast</button>
        <button
          className="buttons__weekly button"
          onClick={() => onWeeklyClick(city)}   
        >
          Weekly forecast
        </button>
      </div>

      <p className="item__date date">{date}</p>
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
        <button className="control__more button">See more</button>
        <button className="contorl__delete delete">
          <CiTrash className="delete__icon" />
        </button>
      </div>
    </li>
  );
}
