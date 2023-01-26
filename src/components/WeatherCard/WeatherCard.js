import React from "react";
import "./WeatherCard.css";


export default function WeatherCard({currentWeather}) {
  return (
    <section className="weather__card">
      <li>
        <p className="weather__card-temperature">
          {currentWeather.temperature + " °F"} 
          </p>
      </li>

      <li></li>
    </section>
  );
}

