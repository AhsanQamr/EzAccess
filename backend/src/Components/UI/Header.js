import React from "react";
import logo from "../../Assets/3.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {

    const SignInClickHandler = () => {
        <NavLink to={"/Login"} />
    }

    return (
      <>
        <div className="header">
          <img className="header__logo" src={logo} alt="logo" />
          <div className="header__search">
            <form className="search__form">
              <input
                className="header__searchInput"
                type="search"
                placeholder="Search..."
              />
              <button type="submit" className="search__button">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="header__nav">
            <div className="header__icon">
              <i class="bi bi-bag-heart-fill"></i>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello, Guest
              </span>
              <button className="header__optionLineTwo"  onClick={SignInClickHandler}>
                    Sign In
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Header;