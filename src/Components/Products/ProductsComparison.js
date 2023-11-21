import React, { useState, useEffect } from "react";
import PriceComparison from "./PriceComparison"; // Assuming the file is in the same directory

const ProductsComparison = () => {
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [selectedProduct2, setSelectedProduct2] = useState(null);
  const [productList1, setProductList1] = useState([]);
  const [productList2, setProductList2] = useState([]);

  const fetchData = async (searchQuery, setProductList) => {
    try {
      // Check if searchQuery is not empty before making the API call
      if (searchQuery.trim() !== "") {
        const response = await fetch(
          `http://localhost:8081/api/search/${searchQuery}`
        );
        const data = await response.json();
        console.log("Data:", data, "Search Query:", searchQuery);
        console.log("data", data);
        setProductList(data || []);
      } else {
        // If searchQuery is empty, clear the product list
        setProductList([]);
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  const handleProductChange = (event, setProduct, setProductList) => {
    const input = event.target.value;
    console.log(`input ${input}`);
    setProduct(input);

    // Fetch data only if the input is not empty
    if (input.trim() !== "") {
      fetchData(input, setProductList);
    } else {
      // If input is empty, clear the product list
      setProductList([]);
    }
  };

  const handleProductClick = (product, setProduct) => {
    setProduct(product);
  };
  
  const handleCompareClick = () => {
    // Log the product names for debugging
    console.log("Product 1 Name:", product1);
    console.log("Product 2 Name:", product2);
  
    // Set the selected products for PriceComparison
    const selectedProduct1 = productList1.find((p) => {
      console.log("Comparing with Product 1:", p.productName);
      return p.productName.toLowerCase() === product1.toLowerCase();
    });
  
    const selectedProduct2 = productList2.find((p) => {
      console.log("Comparing with Product 2:", p.productName);
      return p.productName.toLowerCase() === product2.toLowerCase();
    });
  
    // Log the selected products for debugging
    console.log("Selected Product 1:", selectedProduct1);
    console.log("Selected Product 2:", selectedProduct2);
  
    setSelectedProduct1(selectedProduct1 || null);
    setSelectedProduct2(selectedProduct2 || null);
  };
  

  useEffect(() => {
    fetchData(product1, setProductList1);
  }, [product1]);

  useEffect(() => {
    fetchData(product2, setProductList2);
  }, [product2]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products Comparison</h1>
      <div className="row">
        {/* Product 1 form */}
        <div className="col-md-5 pr-md-3 mb-4">
          <form>
            <div className="form-group">
              <label htmlFor="product1">Product 1</label>
              <input
                type="text"
                className="form-control"
                id="product1"
                placeholder="Enter product 1 name"
                value={product1}
                onChange={(e) =>
                  handleProductChange(e, setProduct1, setProductList1)
                }
              />
              <div
                className="product-list-container overflow-auto"
                style={{ maxHeight: "200px" }} // Adjust the height as needed
              >
                {productList1.length > 0 && (
                  <ul className="list-group">
                    {productList1.map((product) => (
                      <li
                        key={product.id}
                        className="list-group-item d-flex justify-content-between align-items-center position-relative"
                        onClick={() => handleProductClick(product.productName, setProduct1)}
                      >
                        <img
                          src={product.productImg} // Replace with actual image source
                          alt={product.productName}
                          className="img-fluid mr-3"
                          style={{ maxWidth: "50px", maxHeight: "50px" }}
                        />
                        <span className="product-name">{product.productName}</span>
                        <span className="badge bg-dark text-white position-absolute end-0 translate-middle-y">
                          {product.source}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Vertical line */}
        <div className="col-md-2 d-flex align-items-center">
          <hr className="my-4" style={{ borderColor: "#000000" }} />
        </div>

        {/* Product 2 form */}
        <div className="col-md-5 pl-md-3 mb-4">
          <form>
            <div className="form-group">
              <label htmlFor="product2">Product 2</label>
              <input
                type="text"
                className="form-control"
                id="product2"
                placeholder="Enter product 2 name"
                value={product2}
                onChange={(e) =>
                  handleProductChange(e, setProduct2, setProductList2)
                }
              />
              <div
                className="product-list-container overflow-auto"
                style={{ maxHeight: "200px" }} // Adjust the height as needed
              >
                {productList2.length > 0 && (
                  <ul className="list-group">
                    {productList2.map((product) => (
                      <li
                        key={product.id}
                        className="list-group-item d-flex justify-content-between align-items-center position-relative"
                        onClick={() => handleProductClick(product.productName, setProduct2)}
                      >
                        <img
                          src={product.productImg} // Replace with actual image source
                          alt={product.productName}
                          className="img-fluid mr-3"
                          style={{ maxWidth: "50px", maxHeight: "50px" }}
                        />
                        <span className="product-name">{product.productName}</span>
                        <span className="badge bg-dark text-white position-absolute end-0 translate-middle-y">
                          {product.source}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn btn-lg btn-secondary"
            style={{ padding: "0.5rem 5rem" }}
            onClick={handleCompareClick}
            
          >
            Compare
          </button>
        </div>
      </div>
            {/* PriceComparison component */}
            {console.log(selectedProduct1)}
            {selectedProduct1 && selectedProduct2 && (
        <PriceComparison product1={selectedProduct1} product2={selectedProduct2} />
      )}
    </div>
  );
};

export default ProductsComparison;
