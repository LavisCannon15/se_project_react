import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";

import { defaultClothingItems } from "../../utils/clothingItems";

export default function Main({
  currentWeather,
  currentWeatherCard,
  setIsItemModalOpen,
  setClickedItem,
}) {
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === currentWeatherCard
  );

  const CardList = ({ filteredItems, setIsItemModalOpen, setClickedItem }) => (
    <div className="cards__list">
      {filteredItems.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          setIsItemModalOpen={setIsItemModalOpen}
          setClickedItem={setClickedItem}
        />
      ))}
    </div>
  );

  return (
    <>
      <WeatherCard currentWeather={currentWeather} />

      <h3 className="suggested__wear">
        {"Today is " +
          currentWeather.temperature +
          " °F / You may want to wear:"}
      </h3>

      <CardList
        filteredItems={filteredItems}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
    </>
  );
}
