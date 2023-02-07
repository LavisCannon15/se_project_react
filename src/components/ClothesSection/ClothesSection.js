import "./ClothesSection.css";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

import { defaultClothingItems } from "../../utils/clothingItems";

export default function ClothesSection({
  currentWeatherCard,
  setIsFormModalOpen,
  setIsItemModalOpen,
  setClickedItem,
}) {
  const handleButtonClick = () => {
    setIsFormModalOpen({ isOpen: true });
  };

  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === currentWeatherCard
  );

  const CardList = ({ filteredItems, setIsItemModalOpen, setClickedItem }) => (
    <div className="profile__clothes-cards-list">
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
    <div className="profile__clothes">
      <div className="profile__clothes-header">
        <p className="profile__clothes-title">Your items</p>
        <p
          className="profile__clothes-add-button"
          onClick={handleButtonClick}
        >
          + Add new
        </p>
      </div>

      <CardList
        filteredItems={filteredItems}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
    </div>
  );
}
