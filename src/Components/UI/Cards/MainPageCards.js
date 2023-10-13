import React from "react";
import module from "./NormalCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//import "./NormalCard.css";
const MainPageCards = (props) => {
  console.log(props);

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

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked((prev) => !prev)
  };

  console.log(`Database: ${props.database}`)

  return (
    <>
      <Link to={`/${props.database}/${props.category}/${props.id}`} className={module.__link}>
        <div className={module.__container}>
          <div className={module.__card}>
            <div className={module.__card__image}>
              <img
                src={props.image}
                alt="image1"
                className={module.__card_img}
              />
            </div>
            <div className={module.__product__detail__}>
              <span className={module.__product__name}>
                {props.name.slice(0, 22)}...
              </span>
              <div className={module.__brand__name}>
                <span className={module.__brand__name}>Daraz</span>
              </div>
              <div className={module.__card__buttons}>
                <div className={module.__price}>
                  <span className={module.__discount__price}>
                    Rs {current_price}
                  </span>
                  <div className={module.__discount__box}>
                    <span className={module.__original__price}>
                      Rs {Math.floor(props.original_price)}
                    </span>
                    <span className={module.__discount__percent}>
                      {props.discount}
                    </span>
                  </div>
                </div>
                <div className={module.__btn__box}>
                  <button
                    onClick={handleLikeButton}
                    className={`${module.__like__button}  ${module.__btn}`}
                  >
                  {isLiked ? <i class="bi bi-heart-fill"></i> : <i class="bi bi-heart"></i>}
                    {/* <i class="bi bi-heart"></i> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainPageCards;
