import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import module from "./NormalCard.module.css";
import no_img from "../../../Assets/no-image.png";

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
  //const current_price = priceArrayWithCommas.join("");
  var current_price = ""
  if (props.activeCategory === "Daraz") {
    current_price = `Rs ${priceArrayWithCommas.join("")}`;
  } else if (props.activeCategory === "Priceoye") {
    if (props.current_price === "No Current Price") {
      current_price = "-";
    } else {
    current_price = props.current_price;
    }
  } else if (props.activeCategory === "Symbios") {
    current_price = `Rs ${props.current_price}`
  } else if (props.activeCategory === "Shophive") {
    if (props.current_price === "No Price Found") {
      current_price = "-";
    }
      else {
        current_price = `${props.current_price}`
      }
  } else if (props.activeCategory === "Qmart") {
    if (props.current_price === "No Price Found") {
      current_price = "-";
    }
      else {
        current_price = `${props.current_price}`
      }
  } else if (props.activeCategory === "All") {
    if (props.current_price.includes("Rs")){
      current_price = props.current_price;
    } else {
      current_price = `Rs ${props.current_price}`
      }
  }

  var original_price = ""
  if (props.activeCategory === "Daraz") {
    original_price = `Rs ${Math.floor(props.original_price)}`;
  } else if (props.activeCategory === "Priceoye") {
    if (props.original_price === "No Original Price") {
      original_price = "-";
    } else {
    original_price = props.original_price;
    }
  } else if (props.activeCategory === "Symbios") {
    original_price = props.original_price;
  } else if (props.activeCategory === "Shophive") {
    if (props.original_price === "No Price Found") {
      original_price = "-";
    } else
        original_price = props.original_price;
  } else if (props.activeCategory === "Qmart") {
    if (props.original_price === "No Price Found") {
      original_price = "-";
    } else
        original_price = props.original_price;
  } else if (props.activeCategory === "All") {
    if (props.original_price.includes("Rs")){
      original_price = props.original_price;
    } else {
      original_price = `Rs ${props.original_price}`
      }

  }
  
  const encodedImage = encodeURI(props.image);

  let Availibility = ""
  if (props.activeCategory === "Daraz") {
    Availibility = "-";
  } else if (props.activeCategory === "Priceoye") {
    Availibility = props.Stock;
  } else if (props.activeCategory === "Symbios") {
    Availibility = "-";
  } else if (props.activeCategory === "Shophive") {
    Availibility = props.Availibility;
  } else if (props.activeCategory === "Qmart") {
    Availibility = "-";
  } else{
    Availibility = "-";
  }



  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButton = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  console.log(`currentCategory:${props.category}`)

  

  return (
    // add comma after 3 digits of price

    <>
      <Link to={`/${props.activeCategory}/${props.category}/${props.id}`} className={module.__link} >
        <div className={module.__container}>
          <div className={module.__card}>
            <div className={module.__card__image}>
              <img
                src={encodedImage}
                alt="image1"
                loading="lazy"
                className={module.__card_img}
                onError={(e) => {
                  console.error("image not found" + e.error);
                  e.target.src = no_img;
                }}
              />
            </div>
            <div className={module.__product__detail__}>
              <span className={module.__product__name}>
                {props.name ? props.name.slice(0, 22) : "Product Name"}...
              </span>
              <div className={module.__brand__name}>
                <span className={module.__brand__name}>
                  {props.activeCategory}
                </span>
              </div>
              <div className={module.__card__buttons}>
                <div className={module.__price}>
                  <span className={module.__discount__price}>
                    {current_price}
                  </span>
                  <div className={module.__discount__box}>
                    <span className={module.__original__price}>
                      {original_price}
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
                    {isLiked ? (
                      <i class="bi bi-heart-fill"></i>
                    ) : (
                      <i class="bi bi-heart"></i>
                    )}
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

export default NormalCard;
