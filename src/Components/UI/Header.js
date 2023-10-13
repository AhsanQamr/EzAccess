import React, { useState, useEffect } from "react";
import logo from "../../Assets/3.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("name");
    console.log(`username ${userName}`);
    if (token) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);





  return (
    <>
      <div className="header__main">
        <Link to={"/"}>
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <Link to = {"/products"} style={{textDecoration: 'none', width: '40rem'}}>
        <div className="header__search">
          <form className="search__form">
            <input
              className="header__searchInput"
              type="text"
              placeholder="Type your query here..."
            />
            <button type="submit" className="search__button">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        </Link>
        <div className="header__nav">
          <div className="header__icon">
            <i class="bi bi-bag-heart-fill"></i>
          </div>
          <div className="header__option">
            <span
              className="header__optionLineOne"
              style={{
                fontSize: isLoggedIn ? "16px" : "inherit",
                whiteSpace: "pre-line",
              }}
            >
              {isLoggedIn ? `Hello, \n ${userName}` : "Hi User"}
            </span>

            <Link to="/login" style={{ textDecoration: "none" }}>
              <button
                className={`header__optionLineTwo ${
                  isLoggedIn ? "hidden" : ""
                }`}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
