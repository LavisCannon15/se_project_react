import {Link} from "react-router-dom";

import "./Header.css";

import avatarImage from "../../images/user_avatar.svg";
import Logo from "../../images/wtwr_logo.svg";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({ currentWeather, setIsFormModalOpen }) {
  //const [clickedItem, setClickedItem] = useState(null);

  const handleButtonClick = () => {
    setIsFormModalOpen({ isOpen: true });
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-date-location">
            <Link to={"/"}>
              <img className="header__logo" src={Logo} alt="wtwr logo" />
            </Link>
          <p className="header__date-location">
            {currentDate + ", " + currentWeather.city}
          </p>
        </div>
        <div className="header__user-menu">
          <li>
            <ToggleSwitch />
          </li>
          <li>
            <p
              className="header__clothes-button"
              onClick={() => handleButtonClick()}
            >
              +Add clothes
            </p>
          </li>
          <li>
              <Link to={"/profile"} className="header__profile-link">
                <p className="header__user-info">
                  InsertNameHere
                  <img
                    src={avatarImage}
                    alt="user avatar"
                    className="header__user-avatar"
                  />
                </p>
              </Link>
          </li>
        </div>
      </div>
    </header>
  );
}
