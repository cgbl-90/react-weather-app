import React, { useState } from "react";
import axios from "axios";

export default function WeatherDescription() {
  const [city, setCity] = useState(" ");
  const [temp, setTemp] = useState(" ");
  const [desc, setDesc] = useState(" ");
  const [hum, setHum] = useState(" ");
  const [wind, setWind] = useState(" ");
  const [icon, setIcon] = useState(" ");
  const call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7b2fb74167b7413c4800d2bd61bddc1&&units=metric`;

  function setWeather() {
    axios.get(call).then(function (props) {
      setTemp(`Temperature: ${props.data.main.temp}`);
      setDesc(`Description: ${props.data.weather[0].description}`);
      setHum(`Humidity: ${props.data.main.humidity}`);
      setWind(`Wind: ${props.data.wind.speed}`);
      setIcon(
        `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
      );
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    if (city.length > 0) setWeather();
  }

  return (
    <div>
      <div>
        <form onSubmit={searchCity}>
          <input type="text" placeholder="city" onChange={updateCity} />
          <button type="submit" className="btn">
            SEARCH
          </button>
        </form>
      </div>
      <div>
        <img src={icon} alt="Weather today" />
      </div>
      <div>
        <h4>
          {temp} <br />
          {desc} <br />
          {hum} <br />
          {wind}
        </h4>
      </div>
    </div>
  );
}
