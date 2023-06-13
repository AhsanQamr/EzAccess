import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import "./Row.css";
import { Link } from "react-router-dom";

const Row = () => {
    

    return (
        <>
            <div className="row">
                <div className="row__menu">
                
                    <button className="row__option__button" >
                        <span>
                            <i className="bi bi-list"></i>
                            <span className="small__text">All</span>
                        </span>
                    </button>
                </div>
                <div className="row__container">
                    <div className="row__option">
                    <Link to="/mobiles">
                        <button className="row__option__button">
                            Mobiles
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/laptops">
                        <button className="row__option__button">
                            Laptops
                        </button>
                    </Link>
                    </div>
                    <div className="row__option"> 
                    <Link to="/tablets">  
                        <button className="row__option__button">
                            Tablets
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/watches">
                        <button className="row__option__button">
                            Watches
                        </button>
                    </Link>
                    </div>
                    <div className="row__option">
                    <Link to="/accessories">
                        <button className="row__option__button">
                            Accessories
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
            {/* <SideBar /> */}
        </>
    );
};

export default Row;