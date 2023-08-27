// ProductFilter.js

import React from "react";

const ProductFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="col my-3 text-center">
      <div className="position-sticky">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-outline-dark m-1 btn-sm ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ProductFilter;
