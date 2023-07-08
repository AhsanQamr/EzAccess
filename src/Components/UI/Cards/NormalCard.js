import React from "react";
import "./NormalCard.css";
import { Link } from "react-router-dom";

const NormalCard = (props) => {
  let price = Math.floor(props.current_price);
  const priceString = price.toString();
  const priceLength = priceString.length;
  const priceArray = priceString.split("");
  const priceArrayWithCommas = [];
  for (let i = 0; i < priceLength; i++) {
    if ((priceLength - i) % 3 === 0 && i !== 0) {
      priceArrayWithCommas.push(",");
    }
    priceArrayWithCommas.push(priceArray[i]);
  }

  const current_price = priceArrayWithCommas.join("");


  return (
    // add comma after 3 digits of price

    <>
      <div className="container">
        <div className="card">
          <div className="card__image">
            <img src={props.image} alt="image1" className="card-img" />
          </div>
          <div className="product__detail">
            <span className="product__name">{props.name.slice(0, 22)}...</span>
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
                <span className="discount__price">Rs {current_price}</span>
                <div className="discount__box">
                  <span className="original__price">
                    Rs {Math.floor(props.original_price)}
                  </span>
                  <span className="discount__percent">{props.discount}</span>
                </div>
              </div>
              <div className="btn__box">
                <button className="like__button btn">
                  <i class="bi bi-emoji-heart-eyes"></i>
                </button>
                <Link to={`/${props.category}/${props.id}`}>
                <button
                  className="view__button btn"
                >
                  <i class="bi bi-eye"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalCard;
