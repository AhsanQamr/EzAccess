// Product.js

import React, { useEffect, useState } from "react";
import module from "./Product.module.css";
import ProductsList from "./ProductsList";
import ProductsFilter from "./ProductsFilter";
import ContainerCards from "../UI/Cards/ContainerCards";

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

  const fetchProducts = async (category) => {
    const apiUrl =
      category === "All"
        ? `http://localhost:8081/api/${props.category}`
        : `http://localhost:8081/api/${category}/${props.category}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(`${category} data:`, data);
      setDisplayedProducts(data);
      setActiveCategory(category); // Update the active category after fetching
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onCategoryChange = (category) => {
    setActiveCategory(category);
    fetchProducts(category);
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory, props.category]);

  var dataToSend = [];
  if (activeCategory === "Priceoye" && props.category === "accessories") {
    dataToSend = displayedProducts.accessories;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
    console.log("dataToSend:", dataToSend);
  } else if (activeCategory === "Shophive" && props.category === "mobiles") {
    dataToSend = displayedProducts.mobiles;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
    console.log("dataToSend:", dataToSend);
  } else if (activeCategory === "Shophive" && props.category === "laptops") {
    dataToSend = displayedProducts.laptops;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
    console.log("dataToSend:", dataToSend);
  } else if (activeCategory === "Shophive" && props.category === "watches") {
    dataToSend = displayedProducts.watches;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
    console.log("dataToSend:", dataToSend);
  } else if (activeCategory === "Qmart" && props.category === "mobiles") {
    dataToSend = displayedProducts.mobiles;
    dataToSend = Array.isArray(dataToSend) ? dataToSend : [];
    console.log("dataToSend:", dataToSend);
  }
  
  
  else {
    dataToSend = Array.isArray(displayedProducts) ? displayedProducts : [];
  }

  console.log("dataToSend:", dataToSend);

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
        <div className={module.product__cards}>
          <ProductsList products={dataToSend} category={props.category} activeCategory = {activeCategory} />
        </div>
      </div>
    </div>
  );
};

export default Product;
