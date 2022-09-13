import React, { useState } from "react";
import axios from "axios";
import "./WeatherDescription.css";
import MonthDayHour from "./MonthDayHour";
import Forecast from "./Forecast";
import ForecastHourlyDaily from "./ForecastHourlyDaily";

/*  
  Request a new API key at https://openweathermap.org/  
  Sample request: https://api.openweathermap.org/data/2.5/weather?q=London&appid=d7b2fb74167b7413c4800d2bd61bddc1
*/

export default function WeatherDescription(defaultCity) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(" ");
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  const geocall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  function setWeather() {
    axios.get(call).then(function (props) {
      setWeatherData({
        temperature: props.data.main.temp,
        description: props.data.weather[0].description,
        humidity: props.data.main.humidity,
        wind: props.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
        country: props.data.sys.country,
        id: props.data.id,
      });
    });
  }

  function searchMyCity(event) {
    event.preventDefault();
    axios.get(geocall).then(function (props) {
      setWeatherData({
        temperature: props.data.main.temp,
        description: props.data.weather[0].description,
        humidity: props.data.main.humidity,
        wind: props.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
        country: props.data.sys.country,
        id: props.data.id,
      });
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    if (city.length === 0) setCity(defaultCity);
    setWeather();
  }

  return (
    <div class="container">
      <div className="col">
        <h3>
          <MonthDayHour />
        </h3>
        <form onSubmit={searchCity}>
          <input type="text" placeholder="city" onChange={updateCity} />
          <button type="submit" className="btn">
            SEARCH
          </button>
        </form>
        <form onSubmit={searchMyCity}>
          <button type="submit" className="btn">
            LOCATE ME
          </button>
        </form>
        <Forecast var={weatherData} />
      </div>
      <ForecastHourlyDaily id={weatherData.id} />
    </div>
  );
}
