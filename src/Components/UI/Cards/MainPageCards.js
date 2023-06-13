import React from "react";
import "./NormalCard.css";
const MainPageCards = (props) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card__image">
                        <img src={props.image} alt="image1" className="card-img" />
                    </div>
                    <div className="product__detail">
                        <span className="product__name">{props.name.slice(0,25)}...</span>
                        <div className="product__rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <div className="brand__name">
                                <span className="brand__name">Daraz</span>
                            </div>
                        <div className="card__buttons">
                            <div className="price">
                                <span className="discount__price">Rs {props.current_price}</span>
                                <div className="discount__box">
                                <span className="original__price">Rs {props.original_price}</span>
                                <span className="discount__percent">{props.discount}</span>
                                </div>
                            </div>
                            <div className="btn__box">
                            <button className="like__button btn">
                                <i class="bi bi-emoji-heart-eyes"></i>
                            </button>
                            <button className="view__button btn">
                                <i class="bi bi-eye"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPageCards;