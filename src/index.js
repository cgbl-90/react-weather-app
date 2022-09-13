import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherDescription from "./WeatherDescription";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WeatherDescription defaultCity="Santo Domingo" />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
