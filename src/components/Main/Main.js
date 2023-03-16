import { useContext, useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";


import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import "./Main.css";

export default function Main({
  currentWeather,
  setIsItemModalOpen,
  setClickedItem,
  filteredApiItems,
  onCardLike,
  currentUser,
  clickedItem
}) {
  

  const CardList = ({
    filteredApiItems,
    setIsItemModalOpen,
    setClickedItem,
    onCardLike,
    currentUser,
    clickedItem,
  }) => (
    <div className="cards__list">
      {filteredApiItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          setIsItemModalOpen={setIsItemModalOpen}
          setClickedItem={setClickedItem}
          onCardLike={onCardLike}
          currentUser={currentUser}
          clickedItem={clickedItem}
        />
      ))}
    </div>
  );

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const currentTemp = () => {
    return currentTemperatureUnit === "F"
      ? currentWeather.temperatureF
      : currentWeather.temperatureC;
  };

  return (
    <>
      <WeatherCard currentWeather={currentWeather} />

      <h3 className="suggested__wear">
        {"Today is " +
          currentTemp() +
          " °" +
          currentTemperatureUnit +
          "/ You may want to wear:"}
      </h3>

      <CardList
        filteredApiItems={filteredApiItems}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
        onCardLike={onCardLike}
        currentUser={currentUser}
        clickedItem={clickedItem}
      />
    </>
  );
}
