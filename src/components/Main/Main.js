import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";

export default function Main({
  currentWeather,
  currentWeatherCard,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <>
      <WeatherCard currentWeather={currentWeather} />
      <ItemCard
        currentWeather={currentWeather}
        currentWeatherCard={currentWeatherCard}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
