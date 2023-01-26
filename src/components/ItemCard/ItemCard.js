import React, { useState } from "react";
import "./ItemCard.css";
import ItemModal from "../ItemModal/ItemModal";

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
  isModalOpen,
  setIsModalOpen,
}) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleCardClick = (item) => {
    setIsModalOpen({ isOpen: true, clickedItem: item });
    setClickedItem(item);
  };

  return (
    <section className="cards">
      <h3 className="suggested__wear">
        {"Today is " +
          currentWeather.temperature +
          " °F / You may want to wear:"}
      </h3>

      <ul className="cards__list">
        {defaultClothingItems.map((item) => (
          <li className="card">
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
      <div className={`modal__preview ${isModalOpen.isOpen && "modal__preview-opened"}`}>
        <ItemModal
          currentWeatherCard={currentWeatherCard}
          clickedItem={clickedItem}
        />
      </div>
    </section>
  );
}
