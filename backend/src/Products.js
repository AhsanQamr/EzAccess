import React from "react";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Row from "./Components/UI/Row";
import Product from "./Components/UI/Product";

function Products(props) {
    return (
        <>
          <div className="App">
            <Header />
            <Row />
            <Product category = {props.category} />
            <Footer />
          </div>
        </>
      );
}

export default Products;