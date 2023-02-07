import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./AddItemModal.css";

export default function AddItemModal({
  isFormModalOpen,
  closeModalOnButtonClick,
}) {
  return (
    <ModalWithForm
      title="New garment"
      name="addClothesForm"
      buttonText="Add garment"
      onClose={closeModalOnButtonClick}
      isFormModalOpen={isFormModalOpen}
    >
      <fieldset className="modal__form-fieldset">
        <label className="modal__label">
          <h3 className="modal__form-input-title">Name</h3>
          <input
            type="text"
            className="modal__form-input modal__form-input-name"
            name="name"
            placeholder="Name"
            id="name"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="modal__error" id="addName-error"></span>
        </label>

        <label className="modal__label">
          <h3 className="modal__form-input-title">Image</h3>
          <input
            type="url"
            className="modal__form-input modal__form-input-link"
            name="link"
            placeholder="Image URL"
            id="addLink"
            required
          />
          <span className="modal__error" id="addLink-error"></span>
        </label>
      </fieldset>

      <fieldset className="modal__form-fieldset modal__form-fieldset_type_checkbox">
        <h3 className="modal__form-input-title">Select the weather type:</h3>

        <div className="modal__form-input_checkbox">
          <input
            type="checkbox"
            className="modal__form-input modal__form-input_type_checkbox"
            name="Hot"
            id="hotCheckbox"
          />
          <label htmlFor="hotCheckbox" className="modal__form-checkbox-name">
            Hot
          </label>
        </div>

        <div className="modal__form-input_checkbox">
          <input
            type="checkbox"
            className="modal__form-input modal__form-input_type_checkbox"
            name="Warm"
            id="warmCheckbox"
          />
          <label htmlFor="warmCheckbox" className="modal__form-checkbox-name">
            Warm
          </label>
        </div>

        <div className="modal__form-input_checkbox">
          <input
            type="checkbox"
            className="modal__form-input modal__form-input_type_checkbox"
            name="Cold"
            id="coldCheckbox"
          />
          <label htmlFor="coldCheckbox" className="modal__form-checkbox-name">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
