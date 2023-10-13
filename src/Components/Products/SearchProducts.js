import React from 'react';

function SearchProducts() {
  return (
    <div className="text-center mt-5">
      <h1>Search Products</h1>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Products"
                aria-label="Search Products"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProducts;
