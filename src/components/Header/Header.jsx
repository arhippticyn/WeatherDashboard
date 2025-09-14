import React, { useState } from "react";
import logo from "../../image/forecastlogo.svg";
import Button from "../Template/Button";
import logoUser from "../../image/user.svg";
import { GoChevronDown } from "react-icons/go";
import BurgerMenu from "./BurgerMenu";

const Header = ({ username, setUsername, setIsHidden }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const logout = function () {
    localStorage.setItem("currentUser", JSON.stringify({}));

    setUsername("");
    setIsHidden(false);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <nav className="header-nav">
          <div className="header-nav-image">
            <img src={logo} alt="logo" className="header-nav-image__img" />
          </div>

          <h2 onClick={toggleMenu} className="header-nav__menu active">
            Menu <GoChevronDown />
          </h2>

          <ul className="header-nav-lists">
            <li className="header-nav-lists__list">
              <a href="#">Who we are</a>
            </li>
            <li className="header-nav-lists__list">
              <a href="#">Contacts</a>
            </li>
            <li className="header-nav-lists__list">
              <a href="#">Menu</a>
            </li>
          </ul>

          <Button
            text={`${username ? username : "Sign Up"}`}
            style="header-nav__btn"
            onClick={logout}
          />

          <img src={logoUser} alt="user" className="header-nav__user" />
        </nav>
      </header>

      <BurgerMenu
        logout={logout}
        isOpen={menu}
        toggleMenu={toggleMenu}
        username={username}
      />
    </div>
  );
};

export default Header;
