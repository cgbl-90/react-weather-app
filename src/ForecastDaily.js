import React from "react";

export default function ForecastDaily(id) {
  const apiKey = "d7b2fb74167b7413c4800d2bd61bddc1";
  const call = `api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}`;

  //api.openweathermap.org/data/2.5/weather?q=524901&appid=d7b2fb74167b7413c4800d2bd61bddc1
  
  return (
    <div className="card">
      <h4> Monday </h4>
      <span> 🌧️ </span>
      <h4> 26 </h4>
      <h4> C </h4>
    </div>
  );
}
