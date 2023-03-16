import React, { useState } from "react";
import "./ItemCard.css";
import unlike from "../../images/unliked.svg";
import like from "../../images/liked.svg";

export default function ItemCard({ item, setIsItemModalOpen, setClickedItem, onCardLike, currentUser, clickedItem }) {
  
  const [isLiked, setIsLiked] = useState(false);
  
  const handleCardClick = () => {
    setIsItemModalOpen({ isOpen: true, clickedItem: item });
    setClickedItem(item);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onCardLike({ id: item.id, isLiked: !isLiked });
  };


  const cardIsLikedByCurrentUser = clickedItem && clickedItem.user.id === currentUser.id;

  const cardLikeButtonClassName = `card__like-button ${
    cardIsLikedByCurrentUser && isLiked ? "card__like-button_active" : ""
  } ${!currentUser ? "card__like-button_hidden" : ""}`;



  return (
    <li className="card">
      <div className="card__image-title-wrapper">
        <div className="card__title-likes">
          <div className="card__title-box">
            <h2 className="card__title">{item.name}</h2>
          </div>
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}>
            <img
              className="card__likes"
              src={isLiked ? like : unlike}
              alt="card likes"
            />
          </button>
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
