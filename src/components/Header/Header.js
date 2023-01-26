import React, { useState } from "react";
import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import avatarImage from "../../images/user_avatar.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({
  currentWeather,
  isModalOpen,
  setIsModalOpen,
}) {
  //const [clickedItem, setClickedItem] = useState(null);

  const handleButtonClick = () => {
    setIsModalOpen({ isOpen: true, clickedItem: null });
  };

  return (
    <header className="app__header">
      <div className="header__content">
        <div className="header__logo-date-location">
          <p className="header__logo">wtwr°</p>
          <p className="header__date-location">
            {currentDate + ", " + currentWeather.city}
          </p>
        </div>
        <div className="header__user-menu">
          <li>
            <p
              className="header__clothes-button"
              onClick={() => handleButtonClick()}
            >
              +Add clothes
            </p>
          </li>
          <li>
            <p className="header__user-info">
              InsertNameHere
              <img src={avatarImage} alt=" " className="header__user-avatar" />
            </p>
          </li>
        </div>
      </div>

      <div className={`modal ${isModalOpen.isOpen && "modal__opened"}`}>
        <ModalWithForm />
      </div>
    </header>
  );
}
