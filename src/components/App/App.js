import React, { useState, useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

import Profile from "../Profile/Profile";

import Api from "../../utils/api";
import Auth from "../../utils/auth";

import "./App.css";

import { location } from "../../utils/constants";
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
  cardWeatherFilter,
} from "../../utils/weatherApi";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const api = new Api();
const auth = new Auth();

export default function App() {
  //Manages opening of ItemModal
  const [isItemModalOpen, setIsItemModalOpen] = useState({
    isOpen: false,
    clickedItem: null,
  });

  //Uses the img and name elements of ItemCard to render the img and name on the ItemModal
  const [clickedItem, setClickedItem] = useState(null);

  //Manages opening of AddItemModal
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

  const token = localStorage.getItem("jwt");
  console.log(token);
  // localStorage.removeItem("jwt");

  /*
  useEffect(() => {
    api
      .getItems(token)
      .then((data) => setApiItems(data))
      .catch((err) => console.log(err));
  }, []);
  */

  useEffect(() => {
    if (token) {
      api
        .getItems()
        .then((data) => {
          setApiItems(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const filteredApiItems = apiItems.filter(
    (item) => item.weather === currentWeatherCard
  );

  const deleteItem = (itemId) => {
    api
      .deleteItem(itemId)
      .then(() => {
        setApiItems(apiItems.filter((item) => item._id !== itemId));
        setIsItemModalOpen({ isOpen: false });
        console.log(apiItems);
      })
      .catch((err) => console.log(err));
  };

  const addItem = (name, imageUrl, weather) => {
    api
      .addItem(name, imageUrl, weather)
      .then((newItem) => {
        setApiItems([...apiItems, newItem.data]);
        setIsFormModalOpen({ isOpen: false });
      })
      .catch((err) => console.log(err));
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  //Manages opening of LoginModal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState({
    isOpen: false,
  });

  //Manages opening of RegisterModal
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState({
    isOpen: false,
  });

  //Manages opening of EditProfileModal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState({
    isOpen: false,
  });

  useEffect(() => {
    if (token) {
      auth
        .getUser()
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
          //console.log(currentUser);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSignUp = (name, avatar, email, password) => {
    auth
      .signup(name, avatar, email, password)
      .then((res) => {
        auth
          .signin(email, password)
          .then(() => {
            setIsRegisterModalOpen({ isOpen: false });
            setIsLoggedIn(true);
            setCurrentUser(res);
            localStorage.setItem("jwt", res.token);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const handleSignIn = (email, password) => {
    auth
      .signin(email, password)
      .then((res) => {
        setIsLoginModalOpen({ isOpen: false });
        setIsLoggedIn(true);
        //setCurrentUser(res);
        localStorage.setItem("jwt", res.token);
        auth.getUser().then((data) => {
          setCurrentUser(data);
        });
        api
          .getItems()
          .then((data) => setApiItems(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  /*
   const currentUserItems = filteredApiItems.filter(
     (item) => item.id === currentUser.id
   );
   */

  
   /*
  useEffect(() => {
    console.log(apiItems);
  }, [apiItems]);
*/

  const handleSignOut = (evt) => {
    evt.preventDefault();
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  //const [name, setName] = useState(currentUser.name);
  //const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleUpdateUser = (name, avatar) => {
    auth
      .updateUser(name, avatar)
      .then((res) => {
        setIsProfileModalOpen({ isOpen: false });
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
const [likedItems, setLikedItems] = useState([]);

const onCardLike = ({ id, isLiked }) => {
  const updatedItems = apiItems.map((item) => {
    if (item.id === id) {
      return { ...item, isLiked };
    }
    return item;
  });

  setApiItems(updatedItems);

  if (isLiked) {
    api
      .addCardlike(id, token)
      .then(() => {
        setLikedItems([...likedItems, id]);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .removeCardlike(id, token)
      .then(() => {
        setLikedItems(likedItems.filter((itemId) => itemId !== id));
      })
      .catch((err) => console.log(err));
  }
};

*/

  const [newIsLiked, setNewIsLiked] = useState(false);

  
  const onCardLike = ({ id, isLiked }) => {
    //console.log(newIsLiked);

    const updatedItems = apiItems.map((item) =>
      item._id === id
        ? {
            ...item,
            likes: isLiked
              ? [...item.likes, currentUser._id]
              : item.likes.filter((userId) => userId !== currentUser._id),
          }
        : item
    );





    newIsLiked
      ? api
          .addCardlike(id, token)
          .then(() => {
            setApiItems(updatedItems);
            console.log("added");
          })
          .catch((err) => console.log(err))
      : api
          .removeCardlike(id, token)
          .then(() => {
            setApiItems(updatedItems);
            console.log("removed");
          })
          .catch((err) => console.log(err));
  };
  




  /*
const onCardLike = ({ id, isLiked }) => {
  //onst cardIsLikedByCurrentUser = cardItem.likes.includes(currentUser.id);
  //console.log(id);



const updatedItems = apiItems.map((item) =>
  item._id === id
    ? {
        ...item,
        likes: isLiked
          ? [...item.likes, currentUser._id]
          : item.likes.filter((userId) => userId !== currentUser._id),
      }
    : item
);







  //console.log(updatedItems);

  //setIsLiked(!isLiked);

  newIsLiked
    ? api
        .addCardlike(id, token)
        .then((updatedCard) => {
          setApiItems((cards) => cards.map((c) => (c._id === id ? updatedCard : c)) );
        })
        .catch((err) => console.log(err))
    : api
        .removeCardlike(id, token)
        .then((updatedCard) => {
          setApiItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard : c))
          );
        })
        .catch((err) => console.log(err));
};
*/

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <HashRouter>
            <Header
              currentWeather={currentWeather}
              setIsFormModalOpen={setIsFormModalOpen}
              setIsRegisterModalOpen={setIsRegisterModalOpen}
              setIsLoginModalOpen={setIsLoginModalOpen}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
            <Switch>
              <Route exact path={"/"}>
                <Main
                  currentWeather={currentWeather}
                  setIsItemModalOpen={setIsItemModalOpen}
                  setClickedItem={setClickedItem}
                  filteredApiItems={filteredApiItems}
                  onCardLike={onCardLike}
                  currentUser={currentUser}
                  clickedItem={clickedItem}
                  newIsLiked={newIsLiked}
                  setNewIsLiked={setNewIsLiked}
                />
              </Route>
              <ProtectedRoute path={"/profile"} isLoggedIn={isLoggedIn}>
                <Profile
                  setIsItemModalOpen={setIsItemModalOpen}
                  setIsFormModalOpen={setIsFormModalOpen}
                  setClickedItem={setClickedItem}
                  filteredApiItems={filteredApiItems}
                  setIsProfileModalOpen={setIsProfileModalOpen}
                  handleSignOut={handleSignOut}
                  onCardLike={onCardLike}
                  currentUser={currentUser}
                  clickedItem={clickedItem}
                  newIsLiked={newIsLiked}
                  setNewIsLiked={setNewIsLiked}
                />
              </ProtectedRoute>
            </Switch>
          </HashRouter>
          <Footer />
          <ItemModal
            clickedItem={clickedItem}
            isItemModalOpen={isItemModalOpen}
            setIsItemModalOpen={setIsItemModalOpen}
            deleteItem={deleteItem}
            currentUser={currentUser}
          />
          <AddItemModal
            isFormModalOpen={isFormModalOpen}
            setIsFormModalOpen={setIsFormModalOpen}
            addItem={addItem}
          />
          <LoginModal
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            handleSignIn={handleSignIn}
          />
          <RegisterModal
            isRegisterModalOpen={isRegisterModalOpen}
            setIsRegisterModalOpen={setIsRegisterModalOpen}
            handleSignUp={handleSignUp}
          />
          <EditProfileModal
            isProfileModalOpen={isProfileModalOpen}
            setIsProfileModalOpen={setIsProfileModalOpen}
            handleUpdateUser={handleUpdateUser}
            currentUser={currentUser}
            //setName={setName}
            //setAvatar={setAvatar}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}
