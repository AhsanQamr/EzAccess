// Product.js

import React, { useEffect, useState } from "react";
import module from "./Product.module.css";
import ProductsList from "./ProductsList";
import ProductsFilter from "./ProductsFilter";

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

  // const onCategoryChange = (category) => {
  //   setActiveCategory(category);
  // };

  const fetchProducts = async (category) => {
    const apiUrl =
      category === "All"
        ? `http://localhost:8080/api/${props.category}`
        : `http://localhost:8080/api/${category}/${props.category}`;
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


  const dataToSend = Array.isArray(displayedProducts) ? displayedProducts : [];

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
          <ProductsList products={dataToSend} category={props.category} />
        </div>
      </div>
      
    </div>
  );
};

export default Product;



  // if (activeCategory !== "All") {
  //   displayedProducts = displayedProducts.filter(product => {
  //     console.log("Product:", product);
  //     if (product && product.Category) {
  //       console.log("Product category:", product.Category);
  //       console.log("Active category:", activeCategory);
  //       return product.category === activeCategory.toLowerCase();
  //     }
  //     return false;
  //   });
  // }


    //let displayedProducts = [];

  // if (props.category === "laptops") {
  //   displayedProducts = Array.isArray(props.laptops) ? props.laptops : [];
  // } else if (props.category === "mobiles") {
  //   displayedProducts = Array.isArray(props.product) ? props.product : [];
  // } else if (props.category === "tablets") {
  //   displayedProducts = Array.isArray(props.tablets) ? props.tablets : [];
  // } else if (props.category === "watches") {
  //   displayedProducts = Array.isArray(props.watches) ? props.watches : [];
  // } else if (props.category === "accessories") {
  //   displayedProducts = Array.isArray(props.accessories) ? props.accessories : [];
  // }

