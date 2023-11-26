import React, { useState, useEffect } from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import module from "./Product.module.css";
import { TailSpin } from "react-loader-spinner";

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
  const [sortOptions, setSortOptions] = useState("Default");

  const fetchProducts = async (category) => {
    setIsLoading(true);

    const apiUrl =
      category === "All"
        ? `http://localhost:8081/api/categories/${props.category}`
        : `http://localhost:8081/api/categories/${props.category}/sources/${category}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      let sortedProducts = [...data];

      switch (sortOptions) {
        case "Default":
          // No sorting needed for "Default" option
          break;
        case "Low to High":
          sortedProducts.sort((a, b) =>
            comparePrices(getProductPrice(a), getProductPrice(b))
          );
          break;
        case "High to Low":
          sortedProducts.sort((a, b) =>
            comparePrices(getProductPrice(b), getProductPrice(a))
          );
          break;
        default:
          break;
      }

      setDisplayedProducts(sortedProducts);
      setActiveCategory(category);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to get the price from a product, considering variations in data structure
  const getProductPrice = (product) => {
    if (product.price !== undefined) {
      return parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0;
    } else if (product.originalPrice !== undefined) {
      return parseFloat(product.originalPrice.replace(/[^0-9.-]+/g, "")) || 0;
    } else if (
      product.prices !== undefined &&
      Array.isArray(product.prices) &&
      product.prices.length > 0
    ) {
      return parseFloat(product.prices[0].replace(/[^0-9.-]+/g, "")) || 0;
    } else if (
      product.Price !== undefined &&
      Array.isArray(product.Price) &&
      product.Price.length > 0
    ) {
      const priceValue = product.Price[0].split(":")[1]?.trim();
      return parseFloat(priceValue.replace(/[^0-9.-]+/g, "")) || 0;
    } else {
      return 0; // Default value, adjust as needed
    }
  };

  // Function to compare prices, handling potential non-numeric values
  const comparePrices = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
      return 0;
    } else if (isNaN(a)) {
      return 1;
    } else if (isNaN(b)) {
      return -1;
    } else {
      return a - b;
    }
  };

  const onCategoryChange = (category) => {
    setActiveCategory(category);
    setSortOptions("Default");
    fetchProducts(category);
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory, props.category, sortOptions]);

  return (
    <div className={module.product}>
      <div className={module.product__name}>
        <h1>{props.category}</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className={module.product__name}>
              <p className="mb-0 me-3">Sort Options</p>
              <select
                className="form-select form-select-lg mb-2"
                aria-label=".form-select-lg example"
                value={sortOptions}
                onChange={(e) => setSortOptions(e.target.value)}
              >
                <option value="Default">Default</option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <ProductsFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className={module.container}>
        {isLoading ? (
          <div className={module.loaderContainer}>
            <TailSpin type="Puff" color="#808080" height={50} width={50} />
          </div>
        ) : (
          <div className={module.product__cards}>
            <ProductsList
              products={displayedProducts}
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
