import React from "react";

export default function ForecastDaily(weatherData) {
  return (
    <div>
      <img class="fluid_icon" src={weatherData.icon} alt="Weather today" />
      <h2 class="vertical">{weatherData.temperature}</h2>
      <h3>{weatherData.description}</h3>
      <h3>{weatherData.humidity}</h3>
      <h3>{weatherData.wind}</h3>
    </div>
  );
}
