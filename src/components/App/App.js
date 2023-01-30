import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import "./App.css";

import { location } from "../../utils/constants";
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
  cardWeatherFilter,
} from "../../utils/weatherApi";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentWeatherCard, setCurrentWeatherCard] = useState({});

  const [isItemModalOpen, setIsItemModalOpen] = useState({
    isOpen: false,
    clickedItem: null,
  });

  const [isFormModalOpen, setIsFormModalOpen] = useState({
    isOpen: false,
  });

  const closeModalOnButtonClick = () => {
    setIsFormModalOpen({ isOpen: false });
  };

  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    const APIkey = "bd819e389592868e5cd65868e265238f";
    getForecastWeather(location, APIkey)
      .then((data) => {
        const weather = filterDataFromWeatherAPI(data);
        setCurrentWeather(weather);

        const weatherCard = cardWeatherFilter(data);
        setCurrentWeatherCard(weatherCard);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <Header
        currentWeather={currentWeather}
        setIsFormModalOpen={setIsFormModalOpen}
      />
      <Main
        currentWeather={currentWeather}
        currentWeatherCard={currentWeatherCard}
        setIsItemModalOpen={setIsItemModalOpen}
        setClickedItem={setClickedItem}
      />
      <Footer />
      <ItemModal
        clickedItem={clickedItem}
        isItemModalOpen={isItemModalOpen}
        setIsItemModalOpen={setIsItemModalOpen}
      />
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
    </div>
  );
}
