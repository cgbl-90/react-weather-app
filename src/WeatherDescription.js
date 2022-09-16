import React, { useState } from "react";
import axios from "axios";
import "./WeatherDescription.css";
import MonthDayHour from "./MonthDayHour";

/*  
  Request a new API key at https://openweathermap.org/ 
  https://api.openweathermap.org/data/2.5/forecast?q=london&appid=d7b2fb74167b7413c4800d2bd61bddc1&&units=metric -> London

*/

export default function WeatherDescription() {
  const [city, setCity] = useState(String);
  const [lastCity, setLastCity] = useState(String);
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const call = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&&units=metric`;
  const [weatherData, setWeatherData] = useState({});

  function setWeather() {
    axios.get(call).then((props) => {
      setWeatherData({
        temperature: props.data.list[0].main.temp,
        description: props.data.list[0].weather[0].description,
        humidity: props.data.list[0].main.humidity,
        wind: props.data.list[0].wind.speed,
        icon: props.data.list[0].weather[0].icon,
        country: props.data.city.country,
        lists: props.data.list,
      });
    });
    setLastCity(city);
    console.log(weatherData.lists);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    setWeather();
  }

  return (
    <div className="container">
      <div className="col">
        <h6>
          <MonthDayHour />
        </h6>
        <div className="box">
          <span className="cityClass">
            <h1>{lastCity}</h1>
          </span>
          <img
            className="fluid_icon"
            src={require(`./icons/${weatherData.icon}.png`)}
            alt="Weather today"
          />
          <span className="weatherSpan">
            <span>
              <h2>
                {weatherData.temperature !== undefined
                  ? Math.round(weatherData.temperature) + "°C"
                  : " "}
              </h2>
            </span>
          </span>
          <h3 className="vertical">{weatherData.description}</h3>
        </div>
        <h6>
          Humidity: {weatherData.humidity} — Wind speed: {weatherData.wind}m/s
        </h6>
        <form>
          <input
            type="text"
            placeholder="Indicate city..."
            onChange={updateCity}
          />
          <button type="submit" className="btn" onClick={searchCity}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
      <div className="col grid">
        {weatherData.temperature !== undefined
          ? weatherData.lists.slice(1, 16).map((day, index) => {
              return (
                <div key={index} className="cards">
                  <p>
                    <MonthDayHour value={day.dt} />
                  </p>
                  <h4>{Math.round(day.main.temp)}°C</h4>
                  <img
                    className="small_icon"
                    src={require(`./icons/${day.weather[0].icon}.png`)}
                    alt="Weather today"
                  />
                  <span class="smallest">
                    <strong>{day.main.temp_max}</strong>| {day.main.temp_min}
                  </span>
                </div>
              );
            })
          : " "}
      </div>
    </div>
  );
}
