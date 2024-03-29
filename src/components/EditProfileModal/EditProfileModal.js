import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./EditProfileModal.css";

export default function EditProfileModal({
  isProfileModalOpen,
  setIsProfileModalOpen,
  handleUpdateUser,
  currentUser,
  //setName,
  //setAvatar,
}) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

   useEffect(() => {
     if (currentUser && currentUser.name) {
       setName(currentUser.name);
     }
     if (currentUser && currentUser.avatar) {
      setAvatar(currentUser.avatar);
     }
   }, [currentUser]);



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser(name, avatar);
  };

  const closeModalOnButtonClick = () => {
    setIsProfileModalOpen({ isOpen: false });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="editProfileForm"
      buttonText="Save changes"
      onClose={closeModalOnButtonClick}
      isFormModalOpen={isProfileModalOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__form-fieldset">
        <label className="modal__label">
          <h3 className="modal__form-input-title">Name*</h3>
          <input
            type="text"
            className="modal__form-input modal__form-input-name"
            name="name"
            placeholder="Name"
            id="EditProfile-name"
            required
            value={name}
            onChange={handleNameChange}
          />
          <span className="modal__error" id="EditProfile-addName-error"></span>
        </label>

        <label className="modal__label">
          <h3 className="modal__form-input-title">Avatar</h3>
          <input
            type="url"
            className="modal__form-input modal__form-input-link"
            name="link"
            placeholder="Avatar URL"
            id="EditProfile-addLink"
            required
            value={avatar}
            onChange={handleAvatarChange}
          />
          <span className="modal__error" id="EditProfile-addLink-error"></span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
