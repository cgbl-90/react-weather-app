import React, { useState } from "react";
import axios from "axios";

/*  
  Request a new API key at https://openweathermap.org/  (Daily)
  Sample request: http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d7b2fb74167b7413c4800d2bd61bddc1
*/

export default function ForecastDaily(id) {
  /*
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const dailycall = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}`;
  const [dailyWeatherData, setDailyWeatherData] = useState("");
  const [reply, setReply] = useState("");

  if (id !== undefined) {
  
    axios.get(dailycall).then(function (props) {
      for (let i = 0; i < 14; i++) {
        setDailyWeatherData(
          [{
            id: i,
            dt: props.data.list[i].dt,
            temperature: props.data.list[i].main.temp,
            feelsLike: props.data.list[i].main.feels_like,
            description: props.data.list[i].weather[0].description,
            icon: `./icons/${props.data.list[i].weather[0].icon}.png`,
          }]
        );
      }
    }
    
    for (let i = 0; i < 14; i++) {
      reply = reply + (
        `<div className="card">
          <h6>${dailyWeatherData[i].temperature}</h6>
          <h4>${dailyWeatherData[i].temperature}</h4>
          <h5>feels like ${dailyWeatherData[i].feelsLike}</h5>
          <h5>${dailyWeatherData[i].description}</h5>
          <img className="small_icon" src=${dailyWeatherData[i].icon}> </img>
        </div>`
      )
    };
    
    return reply;
  
  }
  */
  console.log(id);
  return "LOL";
}
