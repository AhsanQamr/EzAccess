import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import "./Row.css";

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
                        <button className="row__option__button">
                            Mobiles
                        </button>
                    </div>
                    <div className="row__option">
                        <button className="row__option__button">
                            Laptops
                        </button>
                    </div>
                    <div className="row__option">   
                        <button className="row__option__button">
                            Tablets
                        </button>
                    </div>
                    <div className="row__option">
                        <button className="row__option__button">
                            Watches
                        </button>
                    </div>
                </div>
            </div>
            {/* <SideBar /> */}
        </>
    );
};

export default Row;