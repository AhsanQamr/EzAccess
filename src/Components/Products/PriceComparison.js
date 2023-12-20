import React, { useState } from "react";

const PriceComparison = ({ product1, product2 }) => {
  // State for accordion 1
  const [accordion1Open, setAccordion1Open] = useState(true);

  // State for accordion 2
  const [accordion2Open, setAccordion2Open] = useState(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Comparison</h1>
      <div className="row mt-3">
        {/* Product 1 details */}
        <div className="col-md-6">
          <h2 className="text-center">Product 1</h2>
          <div className="card">
            <img
              src={product1.productImg}
              className="card-img-top"
              style={{ width: "250px" }}
              alt={product1.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product1.productName}</h5>
              <p className="card-text">Category: {product1.category}</p>
              <p className="card-text">Price: {product1.price}</p>
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
              style={{ width: "250px" }}
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
                <td>{product1.price}</td>
                <td>{product2.price}</td>
              </tr>
              <tr>
                <td>Original Price</td>
                <td>{product1.originalPrice}</td>
                <td>{product2.originalPrice}</td>
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

      {/* Accordion for Product 1 description */}
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Additional Details - Product 1</h2>
        </div>

        <div className="col-md-12">
          <div className="accordion" id="description_accordion_p1">
            <div className="accordion-item">
              <h2 className="accordion-header" id="description_heading_p1">
                <button
                  className={`accordion-button ${accordion1Open ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setAccordion1Open(!accordion1Open)}
                >
                  Description - Product 1
                </button>
              </h2>
              <div
                id="description_collapse_p1"
                className={`accordion-collapse collapse ${accordion1Open ? "show" : ""}`}
                aria-labelledby="description_heading_p1"
                data-bs-parent="#description_accordion_p1"
              >
                <div className="accordion-body">
                  <p>{product1.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="col-md-12">
          <div className="accordion" id="description_accordion_p1">
            <div className="accordion-item">
              <h2 className="accordion-header" id="description_heading_p1">
                <button
                  className={`accordion-button ${accordion1Open ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setAccordion1Open(!accordion1Open)}
                >
                  Sentiment - Product 1
                </button>
              </h2>
              <div
                id="description_collapse_p1"
                className={`accordion-collapse collapse ${accordion1Open ? "show" : ""}`}
                aria-labelledby="description_heading_p1"
                data-bs-parent="#description_accordion_p1"
              >
                <div className="accordion-body">
                  <p>{product1.sentiment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion for Product 2 description */}
      <div className="row mt-5 mb-5">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Additional Details - Product 2</h2>
        </div>

        <div className="col-md-12">
          <div className="accordion" id="description_accordion_p2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="description_heading_p2">
                <button
                  className={`accordion-button ${accordion2Open ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setAccordion2Open(!accordion2Open)}
                >
                  Description - Product 2
                </button>
              </h2>
              <div
                id="description_collapse_p2"
                className={`accordion-collapse collapse ${accordion2Open ? "show" : ""}`}
                aria-labelledby="description_heading_p2"
                data-bs-parent="#description_accordion_p2"
              >
                <div className="accordion-body">
                  <p>{product2.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="col-md-12">
          <div className="accordion" id="description_accordion_p2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="description_heading_p2">
                <button
                  className={`accordion-button ${accordion2Open ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setAccordion2Open(!accordion2Open)}
                >
                  Sentiment - Product 2
                </button>
              </h2>
              <div
                id="description_collapse_p2"
                className={`accordion-collapse collapse ${accordion2Open ? "show" : ""}`}
                aria-labelledby="description_heading_p2"
                data-bs-parent="#description_accordion_p2"
              >
                <div className="accordion-body">
                  <p>{product2.sentiment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
