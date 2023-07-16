import NormalCard from "../UI/Cards/NormalCard";
import React from "react";

const ProductsList = (products) => {

    let finalArray = [];

    if(products.category === "accessories") {
        finalArray = products.accessoriesarray;
    }
    if(products.category === "watches") {
        finalArray = products.watchesarray;
    }
    if(products.category === "tablets") {
        finalArray = products.tabletsarray;
    }
    if(products.category === "laptops") {
        finalArray = products.laptoparray;
    }
    if(products.category === "mobiles") {
        finalArray = products.mobilesarray;
    }


    const MAX_ITEMS = 40;
    let current_price = 0;
    return (
        <>
          {finalArray.slice(0, MAX_ITEMS).map((item) => {

            if (products.category === "mobiles"){
              current_price = item.currentPrice;
            }
            else{
              current_price = item.price;
            }

            return (
              <NormalCard
                key={item._id}
                id={item._id}
                name={item.name}
                original_price={item.originalPrice}
                current_price={current_price}
                image={item.productImg}
                discount={item.discount}
                category={products.category}
              />
            );
          })}
        </>
      );

    };

export default ProductsList;