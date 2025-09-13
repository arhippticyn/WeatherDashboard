import React, { useState } from "react";
import logo from "../../image/forecastlogo.svg";
import Button from "../Template/Button";
import logoUser from "../../image/user.svg";
import { GoChevronDown } from "react-icons/go";
import BurgerMenu from "./BurgerMenu";
import AuthModal from "../AuthModal/AuthModal";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleMenu = () => {
        setMenu(prev => !prev)
    };
    const toggleAuthModal = () => {
        setIsAuthModalOpen(prev => !prev);
    };


    return (
        <div className="header-wrapper">
            <header className="header">
                <nav className="header-nav">
                    <div className="header-nav-image"><img src={logo} alt="logo" className="header-nav-image__img" /></div>

                    <h2 onClick={toggleMenu} className="header-nav__menu active">Menu <GoChevronDown /></h2>

                    <ul className="header-nav-lists">
                        <li className="header-nav-lists__list">Who we are</li>
                        <li className="header-nav-lists__list">Contacts</li>
                        <li className="header-nav-lists__list">Menu</li>
                    </ul>

                    <Button text={'Sign Up'} style='header-nav__btn' onClick={toggleAuthModal} />

                    <img src={logoUser} alt="user" className="header-nav__user" />
                </nav>
            </header>

            <BurgerMenu isOpen={menu} toggleMenu={toggleMenu} />
            {isAuthModalOpen && <AuthModal toggleAuthModal={toggleAuthModal} />}
        </div>
    )
}

export default Header;