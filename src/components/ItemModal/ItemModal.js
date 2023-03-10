import React from "react";
import "./ItemModal.css";
//import testImage from "../../images/test_image.png"

export default function ItemModal({
  clickedItem,
  isItemModalOpen,
  setIsItemModalOpen,
  deleteItem
}) {
  const handleButtonClick = () => {
    setIsItemModalOpen({ isOpen: false });
  };

  const handleCardDelete = () => {
    setIsItemModalOpen({ isOpen: false });
    deleteItem(clickedItem.id);
  };

  return (
    <div
      className={`modal__preview ${
        isItemModalOpen.isOpen && "modal__preview-opened"
      }`}
    >
      <div className="modal__preview-container">
        <button
          type="button"
          className="modal__close-button"
          aria-label="exit button"
          id="previewExitButton"
          onClick={() => handleButtonClick()}
        ></button>

        {clickedItem && (
          <img
            className="modal__preview-image"
            alt={clickedItem.name}
            src={clickedItem.imageUrl}
          />
        )}

        <div className="modal__preview-description">
          <li className="modal__preview-title-delete-button">
            {clickedItem && (
              <h3 className="modal__preview-title">{clickedItem.name} </h3>
            )}
            <h3
              className="modal__preview-delete-button"
              onClick={() => handleCardDelete()}
            >
              Delete item
            </h3>
          </li>
          {clickedItem && (
            <h3 className="modal__preview-weather">
              {"Weather: " + clickedItem.weather}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
