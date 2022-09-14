import React, { useState } from "react";
import axios from "axios";
import "./WeatherDescription.css";
import MonthDayHour from "./MonthDayHour";
import ForecastDaily from "./ForecastDaily";

/*  
  Request a new API key at https://openweathermap.org/  (Today)
  Sample request: https://api.openweathermap.org/data/2.5/weather?q=London&appid=d7b2fb74167b7413c4800d2bd61bddc1
*/

export default function WeatherDescription(defaultCity) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(" ");
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const [lastCity, setLastCity] = useState(" ");
  const lat = Navigator.lat;
  const lon = Navigator.lon;
  const call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  const geocall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  var fahrenheit = Number;
  var celcius = Number;
  let convert = true;

  function setWeather() {
    axios.get(call).then(function (props) {
      setWeatherData({
        temperature: props.data.main.temp,
        description: props.data.weather[0].description,
        humidity: props.data.main.humidity,
        wind: props.data.wind.speed,
        icon: props.data.weather[0].icon,
        country: props.data.sys.country,
        id: props.data.id,
      });
      fahrenheit = (props.data.main.temp * 9) / 5 + 32;
      celcius = props.data.main.temp * 9;
      console.log(fahrenheit);
    });
    setLastCity(city);
  }

  function searchMyCity(event) {
    event.preventDefault();
    axios.get(geocall).then(function (props) {
      setWeatherData({
        temperature: props.data.main.temp,
        description: props.data.weather[0].description,
        humidity: props.data.main.humidity,
        wind: props.data.wind.speed,
        icon: props.data.weather[0].icon,
        country: props.data.sys.country,
        id: props.data.id,
      });
      fahrenheit = (props.data.main.temp * 9) / 5 + 32;
      console.log(fahrenheit);
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    setWeather();
  }

  function convertGrad(value) {
    convert = value;
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
            {convert === true ? (
              <h2>{weatherData.temperature}</h2>
            ) : (
              <h2>{fahrenheit}</h2>
            )}
            <button
              type="submit"
              className="btn btn-right"
              onClick={convertGrad(true)}
            >
              °C
            </button>
            <button
              type="submit"
              className="btn btn-right"
              onClick={convertGrad(false)}
            >
              °F
            </button>
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
          <button type="submit" className="btn" onClick={searchMyCity}>
            <span className="material-symbols-outlined">location_on</span>
          </button>
        </form>
      </div>

      <div className="col">
        <ForecastDaily id={weatherData.id} />
      </div>
    </div>
  );
}
