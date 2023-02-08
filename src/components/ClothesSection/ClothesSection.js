import "./ClothesSection.css";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";


export default function ClothesSection({
  setIsItemModalOpen,
  setClickedItem,
  filteredApiItems
}) {
  const handleButtonClick = () => {
    setIsItemModalOpen({ isOpen: true });
  };

  /*
  const filteredItems = apiItems.filter(
    (item) => item.weather === currentWeatherCard
  );
  */

  const CardList = ({ filteredApiItems, setIsItemModalOpen, setClickedItem }) => (
    <div className="profile__clothes-cards-list">
      {filteredApiItems.map((item) => (
        <ItemCard
          key={item.id}
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
        filteredApiItems={filteredApiItems}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
    </div>
  );
}
