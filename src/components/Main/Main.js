import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";

export default function Main({
  currentWeather,
  setIsItemModalOpen,
  setClickedItem
}) {
  return (
    <>
      <WeatherCard currentWeather={currentWeather} />
      <ItemCard
        currentWeather={currentWeather}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
    </>
  );
}
