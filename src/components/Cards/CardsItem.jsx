import React from "react";

export default function CardsItem({
  city,
  country,
  time,
  date,
  imgSrc,
  imgAlt,
  temp,
}) {
  return (
    <>
      <ul className="cards__list cards">
        <li className="cards__item item">
          <div className="item__location location">
            <h2 className="location__city">{city}</h2>
            <h2 className="location__country">{country}</h2>
          </div>

          <h2 className="item__temperature">{time}</h2>

          <div className="item__buttons buttons">
            <button className="button__hourly">Hourly forecast</button>
            <button className="button__weekly">Weekly forecast</button>
          </div>

          <p className="item__date date">{date}</p>
          <div className="item__main">
            <div className="main__img-container img-Container">
              <img src={imgSrc} alt={imgAlt} />
            </div>
            <h2 className="main__temp">{temp}</h2>
          </div>
        </li>
      </ul>
    </>
  );
}
