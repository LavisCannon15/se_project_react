import "./SideBar.css";
import React from "react";

import avatarImage from "../../images/user_avatar.svg";

export default function SideBar() {
  return (
    <li className="profile__user-info">
      <p className="profile__user-name">
        InsertNameHere
        <img
          className="profile__user-avatar"
          src={avatarImage}
          alt="User avatar"
        />
      </p>
    </li>
  );
}
