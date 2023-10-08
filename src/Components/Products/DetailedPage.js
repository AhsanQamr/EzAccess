import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./DetailedPage.css";
import { Button } from "bootstrap";

const DetailedPage = () => {
  const { dbName, collectionName, productId } = useParams();
  console.log(dbName, collectionName, productId);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMobile = async () => {
      const response = await fetch(
        `http://localhost:8080/api/${dbName}/${collectionName}/${productId}`
      );
      console.log(
        `http://localhost:8080/api/${dbName}/${collectionName}/${productId}`
      );
      console.log(response);
      const data = await response.json();

      setProducts(data);
    };
    fetchMobile();
  }, [dbName, collectionName, productId]);

  console.log(products);

  switch (dbName) {
    case "Daraz":
  }

  // design detailed page with simple css
  return (
    <>
      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={products.productImg}
              alt={products.name}
              className="img-fluid"
              style={{ height: "20rem" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h3>{products.name}</h3>
            <p className="text-muted">Brand: {products.brandName}</p>
            <div className="row">
              <div className="col">
                <p className="text-muted">Website: {dbName}</p>
              </div>
              <div className="col">
                <p className="text-muted">Category: {products.Category}</p>
              </div>
            </div>
            <h4>Rs {products.currentPrice}</h4>
            <div className="row">
              <div className="col-auto">
                <span className="text-muted">
                  <s>Rs 99.99</s>
                </span>
              </div>
              <div className="col-auto">
                <span className="text-success">
                  <h6>12%</h6>
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{marginTop: "0.5rem"}}>
              <span className="badge badge-pill badge-success text-bg-warning">
                InStock
              </span>
            </div>
            <button
              className="btn btn-lg btn-dark"
              style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
            >
              Visit Website
            </button>
          </div>

          <p style={{ marginTop: "3rem" }}>{products.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailedPage;
