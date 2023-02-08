import React, { useState, useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";

import Profile from "../Profile/Profile";

import Api from "../../utils/api";

import "./App.css";

import { location } from "../../utils/constants";
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
  cardWeatherFilter,
} from "../../utils/weatherApi";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

 const api = new Api();

export default function App() {
  //Manages opening of ItemModal
  const [isItemModalOpen, setIsItemModalOpen] = useState({
    isOpen: false,
    clickedItem: null,
  });

  //Uses the img and name elements of ItemCard to render the img and name on the ItemModal
  const [clickedItem, setClickedItem] = useState(null);

  //Manages opening of modalwithform
  const [isFormModalOpen, setIsFormModalOpen] = useState({
    isOpen: false,
  });

  //Retrives Temperature from WeatherAPI
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentWeatherCard, setCurrentWeatherCard] = useState({});

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

//Changes the temperature unit string when the switch in the header is pressed
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };



    const [apiItems, setApiItems] = useState([]);

    useEffect(() => {
      api
        .getItems()
        .then((data) => setApiItems(data))
        .catch((err) => console.log(err))
    }, []);

     const filteredApiItems = apiItems.filter(
       (item) => item.weather === currentWeatherCard
     );

     const deleteItem = (itemId) => {
       api
         .deleteItem(itemId)
         .then(() => {
           setApiItems(apiItems.filter((item) => item.id !== itemId));
         })
         .catch((err) => console.log(err));
     };


     const addItem = (name, imageUrl, weather) => {
       api
         .addItem(name, imageUrl, weather)
         .then((newItem) => {
           setApiItems([...apiItems, newItem]);
         })
         .catch((err) => console.log(err));
     };

     


     

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <HashRouter>
          <Header
            currentWeather={currentWeather}
            setIsFormModalOpen={setIsFormModalOpen}
          />
          <Switch>
            <Route exact path={"/"}>
              <Main
                currentWeather={currentWeather}
                setIsItemModalOpen={setIsItemModalOpen}
                setClickedItem={setClickedItem}
                filteredApiItems={filteredApiItems}
              />
            </Route>
            <Route path={"/profile"}>
              <Profile
                setIsItemModalOpen={setIsItemModalOpen}
                setClickedItem={setClickedItem}
                filteredApiItems={filteredApiItems}
              />
            </Route>
          </Switch>
        </HashRouter>
        <Footer />
        <ItemModal
          clickedItem={clickedItem}
          isItemModalOpen={isItemModalOpen}
          setIsItemModalOpen={setIsItemModalOpen}
          deleteItem={deleteItem}
        />
        <AddItemModal
          isFormModalOpen={isFormModalOpen}
          setIsFormModalOpen={setIsFormModalOpen}
          addItem={addItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
