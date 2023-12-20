// ProductPopup.js
import React from "react";

const ProductPopup = ({ productDetails, onClose }) => {
  return (
    <div className="popup">
      {/* Display product details */}
      <h2>{productDetails.name}</h2>
      <p>Category: {productDetails.category}</p>
      {/* Add more details as needed */}
      
      {/* Close button */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductPopup;