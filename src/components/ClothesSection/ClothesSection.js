import "./ClothesSection.css";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";


export default function ClothesSection({
  setIsItemModalOpen,
  setIsFormModalOpen,
  setClickedItem,
  filteredApiItems,
  onCardLike,
  currentUser,
  clickedItem,
  newIsLiked,
  setNewIsLiked,
}) {
  const handleAddClothesClick = () => {
    setIsFormModalOpen({ isOpen: true });
  };

  /*
  const filteredItems = apiItems.filter(
    (item) => item.weather === currentWeatherCard
  );
  */

  const currentUserItems = filteredApiItems.filter(
    (item) => item.id === currentUser.id
  );

  return (
    <div className="profile__clothes">
      <div className="profile__clothes-header">
        <p className="profile__clothes-title">Your items</p>
        <p
          className="profile__clothes-add-button"
          onClick={handleAddClothesClick}
        >
          + Add new
        </p>
      </div>

      <div className="cards__list">
        {currentUserItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            setIsItemModalOpen={setIsItemModalOpen}
            setClickedItem={setClickedItem}
            onCardLike={() => {
              onCardLike({
                id: item._id,
                isLiked: item.likes.includes(currentUser._id),
                currentUser,
              });
            }}
            currentUser={currentUser}
            clickedItem={clickedItem}
            newIsLiked={newIsLiked}
            setNewIsLiked={setNewIsLiked}
          />
        ))}
      </div>
    </div>
  );
}
