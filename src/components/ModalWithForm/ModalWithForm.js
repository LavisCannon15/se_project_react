import React from "react";
import "./ModalWithForm.css";

export default function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__container">
        <form className="modal__form" id="addCardForm">
          <button
            type="button"
            className="modal__exit-button"
            aria-label="exit button"
            id="addExitButton"
          ></button>

          <fieldset className="modal__form-fieldset">
            <h3 className="modal__form-title">New garment</h3>
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
            <h3 className="modal__form-input-title">
              Select the weather type:
            </h3>

            <div className="modal__form-input_checkbox">
              <input
                type="checkbox"
                className="modal__form-input modal__form-input_type_checkbox"
                name="Hot"
                id="hotCheckbox"
              />
              <label
                htmlFor="hotCheckbox"
                className="modal__form-checkbox-name"
              >
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
              <label
                htmlFor="warmCheckbox"
                className="modal__form-checkbox-name"
              >
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
              <label
                htmlFor="coldCheckbox"
                className="modal__form-checkbox-name"
              >
                Cold
              </label>
            </div>
          </fieldset>

          <fieldset className="modal__form-fieldset">
            <button
              type="submit"
              className="modal__form-button modal__form-button_disabled"
              id="addCreateButton"
              disabled
            >
              Add garment
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
