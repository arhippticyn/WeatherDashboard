import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/sass/index.scss";
import App from "./App.jsx";
import Graph from "./components/Graph/Graph.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
