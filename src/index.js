import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherDescription from "./WeatherDescription";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WeatherDescription defaultCity="Santo Domingo" />
    <Footer />
  </React.StrictMode>
);
