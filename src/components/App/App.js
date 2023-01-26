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

  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    clickedItem: null,
  });

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
      <Header currentWeather={currentWeather} setIsModalOpen={setIsModalOpen} />
      <Main
        currentWeather={currentWeather}
        setIsModalOpen={setIsModalOpen}
        setClickedItem={setClickedItem}
      />
      <Footer />
      <ItemModal
        clickedItem={clickedItem}
        currentWeatherCard={currentWeatherCard}
        isModalOpen={isModalOpen}
      />
      <ModalWithForm isModalOpen={isModalOpen} />
    </div>
  );
}
