import React from "react";
import "./ItemModal.css";
//import testImage from "../../images/test_image.png"


export default function ItemModal({ clickedItem, currentWeatherCard, isItemModalOpen, setIsItemModalOpen }) {
      const handleButtonClick = () => {
        setIsItemModalOpen({ isOpen: false });
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
            src={clickedItem.link}
          />
        )}

        <div className="modal__preview-description">
          {clickedItem && (
            <h3 className="modal__preview-title">{clickedItem.name}</h3>
          )}
          <h3 className="modal__preview-weather">
            {"Weather:" + " " + currentWeatherCard}
          </h3>
        </div>
      </div>
    </div>
  );
}
