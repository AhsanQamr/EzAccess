import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import module from "./DetailedPage.module.css";
import ProductDescription from "./ProductDescription";

const DetailedPage = () => {
  const { dbName, collectionName, productId } = useParams();
  console.log(dbName, collectionName, productId);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMobile = async () => {
      const response = await fetch(
        `http://localhost:8081/api/${dbName}/${collectionName}/${productId}`
      );
      console.log(
        `http://localhost:8081/api/${dbName}/${collectionName}/${productId}`
      );
      console.log(response);
      const data = await response.json();

      setProducts(data);
    };
    fetchMobile();
  }, [dbName, collectionName, productId]);

  console.log(products);

  let price = Math.floor(products.current_price);
  const priceString = price.toString();
  const priceLength = priceString.length;
  const priceArray = priceString.split("");
  const priceArrayWithCommas = [];

  for (let i = 0; i < priceLength; i++) {
    if ((priceLength - i) % 3 === 0 && i !== 0) {
      priceArrayWithCommas.push(",");
    }
    priceArrayWithCommas.push(priceArray[i]);
  }

  switch (dbName) {
    case "Daraz":
      var inStock = products.inStock;

      if (inStock === true) {
        inStock = "In Stock";
      } else {
        inStock = "Out of Stock";
      }

      let currentPrice = products.currentPrice
        if(products.Category === "mobiles"){
          currentPrice = products.currentPrice
        } else{
          currentPrice = products.price
        }


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
                <h4>Rs {currentPrice}</h4>
                <div className="row">
                  <div className="col-auto">
                    <span className="text-muted">
                      <s>Rs {products.originalPrice}</s>
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-success">
                      <h6>{products.discount}</h6>
                    </span>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginTop: "0.5rem" }}
                >
                  <span className="badge badge-pill badge-success text-bg-warning">
                    {inStock}
                  </span>
                </div>
                <button
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
                  onClick={() => window.open(products.productUrl)}
                >
                  Visit Website
                </button>
                <hr style={{ marginTop: "1rem" }}></hr>
              </div>
              <div className="row">
                <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                  <h4>Sentiment Scores:</h4>
                    <ul>
                    {Object.entries(products).map(([key, value], index) => {
          if (key === 'SentimentScore' && typeof value === 'object') {
            return Object.entries(value).map(([label, score]) => (
              <li key={label}>
                {label}: {score}
              </li>
            ));
          }
          return null; // Handle cases where SentimentScore is not present or not an object
        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12" style={{ marginTop: "1.4rem" }}>
                <ProductDescription descriptionData={products.description} />
              </div>
            </div>
          </div>
        </>
      );
      break;
    case "Priceoye":
      var inStock = products.Stock;
      return (
        <>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={products["Product Image"]}
                  alt={products.name}
                  className="img-fluid"
                  style={{ height: "20rem" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <h3>{products["Product Name"]}</h3>
                <p className="text-muted">Brand: Samsung</p>
                <div className="row">
                  <div className="col">
                    <p className="text-muted">Website: {dbName}</p>
                  </div>
                  <div className="col">
                    <p className="text-muted">Category: {products.Category}</p>
                  </div>
                </div>
                <h4>{products["Current Price"]}</h4>
                <div className="row">
                  <div className="col-auto">
                    <span className="text-muted">
                      <s>{products["Original Price"]}</s>
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-success">
                      <h6>{products.Discount}</h6>
                    </span>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginTop: "0.5rem" }}
                >
                  <span className="badge badge-pill badge-success text-bg-warning">
                    {inStock}
                  </span>
                </div>
                <button
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
                  onClick={() => window.open(products.ProductLinks)}
                >
                  Visit Website
                </button>
                <hr style={{ marginTop: "1rem" }}></hr>
              </div>
              <div className="row">
                <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Available Colors</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Available Colors"]) ? (
                        products["Available Colors"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No Colors available</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="col-10 mt-3 ">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Available Storage</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Available Storage"]) ? (
                        products["Available Storage"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No Storage data</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Product Features</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Product Description"]) ? (
                        products["Product Description"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No product description available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12" style={{ marginTop: "1.4rem" }}>
                <ProductDescription
                  descriptionData={products["Product Features"]}
                />
              </div>
            </div>
          </div>
        </>
      );
      break;
    case "Shophive":
      return (
        <>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={products.image}
                  alt={products.name}
                  className="img-fluid"
                  style={{ height: "20rem" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <h3>{products.Title}</h3>
                <p className="text-muted">Brand: {products.Brand}</p>
                <div className="row">
                  <div className="col">
                    <p className="text-muted">Website: {dbName}</p>
                  </div>
                  <div className="col">
                    <p className="text-muted">Category: {products.Category}</p>
                  </div>
                </div>
                <div>
                  {products.Price && products.Price.length >= 1 ? (
                    <>
                      {products.Price.length === 1 ? (
                        <p>{products.Price[0]}</p>
                      ) : (
                        <>
                          <h4>{products.Price[0]}</h4>
                          <div className="row">
                            <div className="col-auto">
                              <span className="text-muted">
                                <s>{products.Price[1]}</s>
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <p>No prices available</p>
                  )}
                </div>

                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginTop: "0.5rem" }}
                >
                  <span className="badge badge-pill badge-success text-bg-warning">
                    {products.inStock}
                  </span>
                </div>
                <button
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
                  onClick={() => window.open(products.product_url)}
                >
                  Visit Website
                </button>
                <hr style={{ marginTop: "1rem" }}></hr>
              </div>
              <div className="row">
                <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Available Colors</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Colors"]) ? (
                        products["Colors"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No Colors available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12" style={{ marginTop: "1.4rem" }}>
                <ProductDescription descriptionData={products.Description} />
              </div>
            </div>
          </div>
        </>
      );
      break;
    case "Qmart":
      return (
        <>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={products.Image}
                  alt={products.name}
                  className="img-fluid"
                  style={{ height: "20rem" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <h3>{products.Title}</h3>
                <p className="text-muted">Brand: {products.Brand}</p>
                <div className="row">
                  <div className="col">
                    <p className="text-muted">Website: {dbName}</p>
                  </div>
                  <div className="col">
                    <p className="text-muted">Category: {products.Category}</p>
                  </div>
                </div>
                <div>
                  {products.Price && products.Price.length >= 1 ? (
                    <>
                      {products.Price.length === 1 ? (
                        <p>{products.Price[0]}</p>
                      ) : (
                        <>
                          <h4>{products.Price[0]}</h4>
                          <div className="row">
                            <div className="col-auto">
                              <span className="text-muted">
                                <s>{products.Price[1]}</s>
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <p>No prices available</p>
                  )}
                </div>
                  {/* <div className="col-auto">
                    <span className="text-success">
                      <h6>{products.discount}</h6>
                    </span>
                  </div> */}
                <button
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
                  onClick={() => window.open(products.Link)}
                >
                  Visit Website
                </button>
                <hr style={{ marginTop: "1rem" }}></hr>
              </div>
              <div className="row">
              <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Available Colors</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Colors"]) ? (
                        products["Colors"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No Colors available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-10 mt-3">
                  <div className="rounded p-3 border bg-light">
                    <h4>
                      <strong>Product Features</strong>
                    </h4>
                    <ul>
                      {Array.isArray(products["Short Description"]) ? (
                        products["Short Description"].map((color, index) => (
                          <li key={index}>{color}</li>
                        ))
                      ) : (
                        <li>No Colors available</li>
                      )}
                    </ul>
                  </div>
                </div>
              <div className="col-12" style={{ marginTop: "1rem" }}>
                <ProductDescription descriptionData={products["Additional Information"]} />
              </div>
            </div>
          </div>
        </>
      );

      break;
    case "Symbios":
      return (
        <>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={products.img_url}
                  alt={products.name}
                  className="img-fluid"
                  style={{ height: "20rem" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <h3>{products.name}</h3>
                <p className="text-muted">Brand: {products.brand}</p>
                <div className="row">
                  <div className="col">
                    <p className="text-muted">Website: {dbName}</p>
                  </div>
                  <div className="col">
                    <p className="text-muted">Category: {products.Category}</p>
                  </div>
                </div>
                <h4>{products.price_new}</h4>
                <div className="row">
                  <div className="col-auto">
                    <span className="text-muted">
                      <s>{products.price_old}</s>
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-success">
                      <h6>{products.off}</h6>
                    </span>
                  </div>
                </div>
                {/* <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginTop: "0.5rem" }}
                >
                  <span className="badge badge-pill badge-success text-bg-warning">
                    {inStock}
                  </span>
                </div> */}
                <button
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "2rem", padding: "0.5rem 9rem" }}
                  onClick={() => window.open(products.product_url)}
                >
                  Visit Website
                </button>
                <hr style={{ marginTop: "1rem" }}></hr>
              </div>
              <div className="col-12" style={{ marginTop: "1.4rem" }}>
                <ProductDescription descriptionData={products.description} />
              </div>
            </div>
          </div>
        </>
      );
      break;
  }
};

export default DetailedPage;
