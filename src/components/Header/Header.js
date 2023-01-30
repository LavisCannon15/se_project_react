import React, { useState } from "react";
import "./Header.css";

import avatarImage from "../../images/user_avatar.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({ currentWeather, setIsFormModalOpen }) {
  //const [clickedItem, setClickedItem] = useState(null);

  const handleButtonClick = () => {
    setIsFormModalOpen({ isOpen: true });
  };

  return (
    <header className="header">
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
    </header>
  );
}
