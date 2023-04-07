import React, { useState} from "react";
import "./ItemCard.css";
import unlike from "../../images/unliked.svg";
import like from "../../images/liked.svg";

export default function ItemCard({
  item,
  setIsItemModalOpen,
  setClickedItem,
  onCardLike,
  currentUser,
  clickedItem,
  newIsLiked,
  setNewIsLiked
}) {
  //const [isLiked, setIsLiked] = useState(item.likes.includes(currentUser.id));

  const [isLiked, setIsLiked] = useState(item.likes.some(user => user.id === currentUser.id));
  


  const handleCardClick = () => {
    setIsItemModalOpen({ isOpen: true, clickedItem: item });
    setClickedItem(item);
  };

  /*
  const handleLikeClick = () => {
    onCardLike({ id: item._id, isLiked: !isLiked });
  };
  */

  /*
  const handleLikeClick = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    console.log(isLiked);

    onCardLike({ id: item._id, isLiked: isLiked});
  }
  */

  /*
  const handleLikeClick = () => {
    const newIsLiked = !item.isLiked;
    setIsLiked(newIsLiked);
    console.log(isLiked);
    onCardLike({ id: item._id, isLiked: newIsLiked });
  };
  */

  const handleLikeClick = () => {

    console.log(isLiked);
    setIsLiked(!isLiked);
    setNewIsLiked(!isLiked);
    console.log(isLiked);


    //console.log(newIsLiked);
    
    onCardLike({ id: item._id, isLiked: !isLiked });
  };

  //const cardIsLikedByCurrentUser = clickedItem && clickedItem._id === currentUser.id;
  //const cardIsLikedByCurrentUser = item.likes.includes(currentUser.id);

  /*const cardLikeButtonClassName = `card__like-button ${
    cardIsLikedByCurrentUser && isLiked ? "card__like-button_active" : ""
  } ${!currentUser ? "card__like-button_hidden" : ""}`;
  */

  /*
  const cardLikeButtonClassName = `card__like-button ${
    cardIsLikedByCurrentUser || isLiked ? "card__like-button_active" : ""
  } ${!currentUser ? "card__like-button_hidden" : ""}`;
*/

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
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
