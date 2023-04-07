import { useContext, useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import "./Main.css";

export default function Main({
  currentWeather,
  setIsItemModalOpen,
  setClickedItem,
  filteredApiItems,
  onCardLike,
  currentUser,
  clickedItem,
  newIsLiked,
  setNewIsLiked
}) {
  const currentUserItems = filteredApiItems.filter(
    (item) => item.id === currentUser.id
  );

  /*
  const currentUserItems = filteredApiItems.map((item) => ({
    ...item,
    isLiked: item.likes.includes(currentUser.id),
  }));
  */

  //const [isLiked, setIsLiked] = useState(false);

  //const [isLiked, setIsLiked] = useState(item.likes.includes(currentUser.id));

  /*
    const handleCardLike = (itemId, isLiked) => {

        const newIsLiked = !isLiked;
        console.log(isLiked);
      setIsLiked(!isLiked);
      onCardLike({ id: itemId, isLiked: isLiked });

    };
    */

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const currentTemp = () => {
    return currentTemperatureUnit === "F"
      ? currentWeather.temperatureF
      : currentWeather.temperatureC;
  };

  return (
    <>
      <WeatherCard currentWeather={currentWeather} />

      <h3 className="suggested__wear">
        {"Today is " +
          currentTemp() +
          " °" +
          currentTemperatureUnit +
          "/ You may want to wear:"}
      </h3>

      <div className="cards__list">
        {currentUserItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            setIsItemModalOpen={setIsItemModalOpen}
            setClickedItem={setClickedItem}
            onCardLike={() => {
              onCardLike(
                {
                  id: item._id,
                  isLiked: item.likes.some((user) => user.id === currentUser.id)
                },
                currentUser
              );
            }}
            currentUser={currentUser}
            clickedItem={clickedItem}
            newIsLiked={newIsLiked}
            setNewIsLiked={setNewIsLiked}
          />
        ))}
      </div>
    </>
  );
}
