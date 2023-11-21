import React from 'react';

const PriceComparison = ({ product1, product2 }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Price Comparison</h1>
      <div className="row mt-3">
        {/* Product 1 details */}
        <div className="col-md-6">
          <h2 className="text-center">Product 1</h2>
          <div className="card">
            <img
              src={product1.productImg}
              className="card-img-top"
              alt={product1.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product1.productName}</h5>
              <p className="card-text">Category: {product1.category}</p>
              <p className="card-text">Price: {product1.currentPrice}</p>
              <p className="card-text">
                Original Price: {product1.originalPrice}
              </p>
              <p className="card-text">Discount: {product1.discount}</p>
              <p className="card-text">Source: {product1.source}</p>
            </div>
          </div>
        </div>

        {/* Product 2 details */}
        <div className="col-md-6">
          <h2 className="text-center">Product 2</h2>
          <div className="card">
            <img
              src={product2.productImg}
              className="card-img-top" 
              alt={product2.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product2.productName}</h5>
              <p className="card-text">Category: {product2.category}</p>
              <p className="card-text">Price: {product2.price}</p>
              <p className="card-text">
                Original Price: {product2.originalPrice}
              </p>
              <p className="card-text">Discount: {product2.discount}</p>
              <p className="card-text">Source: {product2.source}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price comparison table */}
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Price Comparison</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Details</th>
                <th>Product 1</th>
                <th>Product 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td>${product1.price}</td>
                <td>${product2.price}</td>
              </tr>
              <tr>
                <td>Original Price</td>
                <td>${product1.original_price}</td>
                <td>${product2.original_price}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>{product1.discount}</td>
                <td>{product2.discount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
