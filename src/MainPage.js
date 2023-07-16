import React from "react";
import Home from "./Components/UI/Home";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Row from "./Components/UI/Row";

// this is main page which only includes header row and home and footer
// so that other pages styles are not affected

function MainPage() {

  return (
    <>
      <div className="App">
        <Header />
        <Row />
        <Home  />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;