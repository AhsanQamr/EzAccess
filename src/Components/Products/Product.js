// // Product.js

import React, { useState, useEffect } from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import module from "./Product.module.css";
import { TailSpin } from 'react-loader-spinner'

const Product = (props) => {
  const categories = [
    "All",
    "Daraz",
    "Priceoye",
    "Symbios",
    "Shophive",
    "Qmart",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  const fetchProducts = async (category) => {
    setIsLoading(true); // Set loading state to true while fetching

    const apiUrl =
      category === "All"
        ? `http://localhost:8081/api/categories/${props.category}`
        : `http://localhost:8081/api/categories/${props.category}/sources/${category}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(`${category} data:`, data);
      setDisplayedProducts(data);
      setActiveCategory(category);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching
    }
  };

  const onCategoryChange = (category) => {
    setActiveCategory(category);
    fetchProducts(category);
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory, props.category]);

  let dataToSend = [];

  if (activeCategory === "Priceoye" && props.category === "Accessories") {
    dataToSend = displayedProducts.accessories;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
  } else if (activeCategory === "Qmart" && props.category === "Mobiles") {
    dataToSend = displayedProducts.mobiles;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
  } else {
    dataToSend = Array.isArray(displayedProducts) ? displayedProducts : [];
  }

  return (
    <div className={module.product}>
      <div className={module.product__name}>
        <h1>{props.category}</h1>
      </div>

      <ProductsFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className={module.container}>
        {isLoading ? (
        <div className={module.loaderContainer}>
          <TailSpin
            type="Puff" // Choose a loader type
            color="#808080" // Set the loader color
            height={50} // Set the loader height
            width={50} // Set the loader width
          />
          </div>
        ) : (
          <div className={module.product__cards}>
            <ProductsList
              products={dataToSend}
              category={props.category}
              activeCategory={activeCategory}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
