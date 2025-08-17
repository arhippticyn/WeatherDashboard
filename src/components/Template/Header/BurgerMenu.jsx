import React from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import logo from "../../../image/forecastlogo.svg";
import Button from "../Button";
import logoUser from "../../../image/user.svg";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
<header className={`mobile-header ${isOpen ? "show" : "ul-hidden"}`}>
            <nav className="mobile-header-top">
                <img src={logo} alt="logo" className="mobile-header-top__img" />
                    <h2 className="mobile-header-top__menu" onClick={toggleMenu}>
          Menu <GoChevronDown style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "0.3s" }} />
        </h2>
            </nav>

            <div className="mobile-header-down">
                <ul className="mobile-header-down-lists">
                    <li className="mobile-header-down-lists__list">Who we are</li>
                    <li className="mobile-header-down-lists__list">Contacts</li>
                    <li className="mobile-header-down-lists__list">Menu</li>
            </ul>

            <div className="mobile-header-down-right">

                <img src={logoUser} alt="user" className="mobile-header-down-right__user" />
                <Button text={'Sign Up'} style={'mobile-header-down-right__btn'} />    
            </div>
            </div>
        </header>
  )
}

export default BurgerMenu;