import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";

export default function Main({
  currentWeather,
  setIsModalOpen,
  setClickedItem
}) {
  return (
    <>
      <WeatherCard currentWeather={currentWeather} />
      <ItemCard
        currentWeather={currentWeather}
        setIsModalOpen={setIsModalOpen}
        setClickedItem={setClickedItem}
      />
    </>
  );
}
