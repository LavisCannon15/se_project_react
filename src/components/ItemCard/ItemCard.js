import React, { useState } from "react";
import "./ItemCard.css";

import { defaultClothingItems } from "../../utils/clothingItems";

/*
export default function ItemCard() {
  return (
    <section className="cards">
      <ul className="cards__list">
          <li className="card">
            <h2 className="card__title">T-shirt</h2>
            <img className="card__image" src=" " alt="" />
          </li>
      </ul>
    </section>
  );
}*/

export default function ItemCard({
  currentWeather,
  currentWeatherCard,
  setIsItemModalOpen,
  setClickedItem,
}) {
  const handleCardClick = (item) => {
    setIsItemModalOpen({ isOpen: true, clickedItem: item });
    setClickedItem(item);
  };

  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === currentWeatherCard
  );

  return (
    <section className="cards">
      <h3 className="suggested__wear">
        {"Today is " +
          currentWeather.temperature +
          " °F / You may want to wear:"}
      </h3>

      <ul className="cards__list">
        {filteredItems.map((item) => (
          <li className="card" key={item._id}>
            <div className="card__image-title-wrapper">
              <div className="card__title-box">
                <h2 className="card__title">{item.name}</h2>
              </div>
              <img
                className="card__image"
                src={item.link}
                alt={item.name}
                onClick={() => handleCardClick(item)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
