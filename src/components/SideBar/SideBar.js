import "./SideBar.css";
import React from "react";

import avatarImage from "../../images/user_avatar.svg";

export default function SideBar({
  setIsProfileModalOpen,
  handleSignOut
}) {


   const handleEditProfileClick = () => {
     setIsProfileModalOpen({ isOpen: true });
   };


  return (
    <div className="profile__menu">
      <li className="profile__user-info">
        <p className="profile__user-name">
          <img
            className="profile__user-avatar"
            src={avatarImage}
            alt="User avatar"
          />
          InsertNameHere
        </p>
      </li>

      <li>
        <p className="profile__change-info" onClick={handleEditProfileClick}>
          Change profile data
        </p>
      </li>
      <li>
        <p className="profile__logout" onClick={handleSignOut}>Log out</p>
      </li>
    </div>
  );
}
