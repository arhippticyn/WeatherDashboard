import React from "react";
import CardsItem from "./CardsItem";
import sun from "../../image/sun.png";

export default function Cards({setGraphData, graphData}) {
  return (
    <>
      <ul className="cards__list">
        <CardsItem
          city={"Prague"}
          country={"Czech Republic"}
          time={"14:00"}
          date={"13.10.2023 | Friday"}
          imgSrc={sun}
          imgAlt={"Sun"}
          temp={"22℃"}
          setGraphData={setGraphData}
          graphData={graphData}
        ></CardsItem>
        <CardsItem
          city={"Prague"}
          country={"Czech Republic"}
          time={"14:00"}
          date={"13.10.2023 | Friday"}
          imgSrc={sun}
          imgAlt={"Sun"}
          temp={"22℃"}
          setGraphData={setGraphData}
          graphData={graphData}
        ></CardsItem>{" "}
        <CardsItem
          city={"Prague"}
          country={"Czech Republic"}
          time={"14:00"}
          date={"13.10.2023 | Friday"}
          imgSrc={sun}
          imgAlt={"Sun"}
          temp={"22℃"}
          setGraphData={setGraphData}
          graphData={graphData}
        ></CardsItem>
      </ul>
    </>

  );
}
