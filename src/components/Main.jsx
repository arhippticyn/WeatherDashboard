import React from "react";
import Nature from "./Nature/Nature";
import Graph from "./Graph/Graph";

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Nature />
        <Graph
          data={[
            10, 20, 30, 20, 10, 20, 40, 50, 20, 30, 10, 30, 20, 10, 20, 40, 50,
            20, 30, 10,
          ]}
        ></Graph>
      </main>
    </div>
  );
};

export default Main;
