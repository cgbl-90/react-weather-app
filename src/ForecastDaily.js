import React, { useState } from "react";
import axios from "axios";

/*  
  Request a new API key at https://openweathermap.org/  (Daily)
  Sample request: http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d7b2fb74167b7413c4800d2bd61bddc1
*/

export default function ForecastDaily(id) {
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const dailycall = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}`;
  const [dailyWeatherData, setDailyWeatherData] = useState([]);

  function setWeather() {
    axios.get(dailycall).then(function (props) {
      for (let i = 0; i < 14; i++) {
        setDailyWeatherData([
          {
            id: i,
            temperature: props.data.list[i].main.temp,
            feelsLike: props.data.list[i].main.feels_like,
            description: props.data.list[i].weather[0].description,
            icon: `https://openweathermap.org/img/wn/${props.data.list[i].weather[0].icon}@2x.png`,
          },
        ]);
      }
    });
  }

  return (
    <div className="col">
      <h4 > Monday </h4>
      <span className="small_icon"> 🌧️ </span>
      <h4> 26 </h4>
      <h4> C </h4>
    </div>
  );
}
