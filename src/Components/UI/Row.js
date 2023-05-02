import React from "react";
import "./Row.css";


const Row = () => {

    return (
        <>
            <div className="row">
                <div className="row__menu">
                    <button className="row__option__button">
                        {/* <i className="bi bi-list"></i> */}
                        {/* add both icon and All text in same line */}
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
        </>
    );
};

export default Row;