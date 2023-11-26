import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import NormalCard from "../UI/Cards/NormalCard";

function SearchProducts() {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  // Load recommended products when the component mounts
  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8081/api/categories/Mobiles`
        );
        const data = await response.json();
        setRecommendedProducts(data);
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // price filter
  


  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handler for search form submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8081/api/search/${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to filter search results based on source
  const filterProducts = () => {
    return searchResults.filter((product) =>
      filters.length === 0 ? true : filters.includes(product.source)
    );
  };

  // Handler for filter button click
  const handleFilterClick = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  // Filtered search results based on selected filters
  const filteredResults = filterProducts();

  return (
    <div className="mt-5">
      {/* Search form */}
      <h1 className="text-center">Search Products</h1>
      <div className="container mt-3">
        <form onSubmit={handleSearchSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products"
              aria-label="Search Products"
              aria-describedby="button-addon2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
        {/* Filter buttons */}
        
        {searchResults.length > 0 && (
          <div className="mt-3 text-center">
            {/* <span>Filter by Source:</span> */}
            {Array.from(
              new Set(searchResults.map((product) => product.source))
            ).map((source, index) => (
              <button
                key={index}
                className={`btn btn-outline-secondary mx-2 ${
                  filters.includes(source) ? "active" : ""
                }`}
                onClick={() => handleFilterClick(source)}
              >
                {source}
              </button>
            ))}
          </div>
        )}

        {/* Search results */}
        <div
          className="row row-cols-2 row-cols-md-3 g-3"
          style={{ marginTop: "20px" }}
        >
          {loading ? (
            <div className="loaderContainer" style={{ margin: "0 auto" }}>
              <TailSpin
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
              />
            </div>
          ) : (
            filteredResults.map((product, index) => (
              <div className="col mb-5" key={index}>
                <NormalCard
                  id={product._id}
                  name={product.productName}
                  current_price={product.price}
                  original_price={product.originalPrice}
                  image={product.productImg}
                  discount={product.discount}
                  category={product.category}
                  source={product.source}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Recommendations */}
      <hr className="hr" />
      <h5 className="text-center" style={{ marginTop: "20px", marginBottom: "30px" }}>
        Our recommendations
      </h5>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {recommendedProducts.slice(0, 4).map((result) => (
          <div className="" key={result._id}>
            <NormalCard
              id={result._id}
              name={result.productName}
              current_price={result.price}
              original_price={result.originalPrice}
              image={result.productImg}
              discount={result.discount}
              category={result.category}
              source={result.source}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchProducts;
