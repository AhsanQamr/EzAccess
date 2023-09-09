import React, {useEffect, useState} from "react";
import "./Row.css";
import { Link, useLocation } from "react-router-dom";

const Row = () => {

    const location = useLocation();

    const [activeButton, setActiveButton] = useState("mobiles");

    const handleActiveButton = (e) => {
        setActiveButton(e.target.value);
    }

      // Use the location pathname to determine the active button
  const getActiveButton = () => {
    const path = location.pathname;
    if (path === "/mobiles") return "mobiles";
    if (path === "/laptops") return "laptops";
    if (path === "/tablets") return "tablets";
    if (path === "/watches") return "watches";
    if (path === "/accessories") return "accessories";
    return "mobiles"; // Default active button
  };

  useEffect(() => {
    setActiveButton(getActiveButton());
    }, [location]);


    const isMainPage = window.location.pathname === "/";
    
    return (
        <>
            <div className="row__main">
                <div className="row__container">
                    <div className="row__option">
                    <Link to="/mobiles">
                        <button
                                className={`row__option__button ${
                                    activeButton === "mobiles"  && !isMainPage ? "active" : ""
                                }`}
                                onClick={handleActiveButton}
                                value="mobiles"
                            >
                                Mobiles
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/laptops">
                    <button
                                className={`row__option__button ${
                                    activeButton === "laptops" ? "active" : ""
                                }`}
                                onClick={handleActiveButton}
                                value="laptops"
                            >
                                Laptops
                        </button>
                    </Link>
                    </div>
                    <div className="row__option"> 
                    <Link to="/tablets">  
                        <button
                                className={`row__option__button ${
                                    activeButton === "tablets" ? "active" : ""
                                }`}
                                onClick={handleActiveButton}
                                value="tablets"
                            >
                                Tablets
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/watches">
                        <button
                                className={`row__option__button ${
                                    activeButton === "watches" ? "active" : ""
                                }`}
                                onClick={handleActiveButton}
                                value="watches"
                            >
                                Watches
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/accessories">
                        <button
                                className={`row__option__button ${
                                    activeButton === "accessories" ? "active" : ""
                                }`}
                                onClick={handleActiveButton}
                                value="accessories"
                            >
                                Accessories
                        </button>
                    </Link>
                    </div>
                    <Link to="/comparison">
                        <button className="row__option__btn">
                            Comparison
                        </button>
                    </Link>
                </div>
            </div>
            {/* <SideBar /> */}
        </>
    );
};

export default Row;