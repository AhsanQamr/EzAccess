import React from "react";
import "./NormalCard.css";
const NormalCard = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card__image">
                        <img src="https://images.priceoye.pk/samsung-galaxy-a13-pakistan-priceoye-55vz9-270x270.webp" alt="image1" className="card-image" />
                    </div>
                    <div className="product__detail">
                        <span className="product__name">Samsung Galaxy A13</span>
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
                                <span className="discount__price">Rs 10,000</span>
                                <div className="discount__box">
                                <span className="original__price">Rs 12,000</span>
                                <span className="discount__percent">20% off</span>
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

export default NormalCard;