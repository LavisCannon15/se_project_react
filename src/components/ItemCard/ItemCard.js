import React from "react";
import "./ItemCard.css";

export default function ItemCard({ item, setIsItemModalOpen, setClickedItem }) {
  const handleCardClick = () => {
    setIsItemModalOpen({ isOpen: true, clickedItem: item });
    setClickedItem(item);
  };

  return (
    <li className="card">
      <div className="card__image-title-wrapper">
        <div className="card__title-box">
          <h2 className="card__title">{item.name}</h2>
        </div>
        <img
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
          onClick={handleCardClick}
        />
      </div>
    </li>
  );
}
