import React from "react";
import CardsItem from "./CardsItem";
import sun from "../../image/sun.png";

export default function Cards({ onWeeklyClick }) {
  return (
    <ul className="cards__list">
      <CardsItem
        city={"Prague"}
        country={"Czech Republic"}
        time={"14:00"}
        date={"13.10.2023 | Friday"}
        imgSrc={sun}
        imgAlt={"Sun"}
        temp={"22℃"}
        onWeeklyClick={onWeeklyClick}
      />
      <CardsItem
        city={"Kyiv"}
        country={"Ukraine"}
        time={"15:00"}
        date={"13.10.2023 | Friday"}
        imgSrc={sun}
        imgAlt={"Sun"}
        temp={"19℃"}
        onWeeklyClick={onWeeklyClick}
      />
      <CardsItem
        city={"London"}
        country={"UK"}
        time={"13:00"}
        date={"13.10.2023 | Friday"}
        imgSrc={sun}
        imgAlt={"Sun"}
        temp={"17℃"}
        onWeeklyClick={onWeeklyClick}
      />
    </ul>
  );
}
