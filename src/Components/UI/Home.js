import React from "react";
import Image1 from "../../Assets/amazon.jpg";
import "./Home.css";
import ContainerCards from "./Cards/ContainerCards";
import home_image from "../../Assets/home_img.png";
import BrandShop from "./BrandShop";


const Home = (props) => {
    return (
        <>
            <div className="home">        
            <img src={Image1} alt="image1" className="home__image" />
            {/* <NormalCard /> */}
            <hr/>
            <ContainerCards title="Recommended" />
            <hr />
            <hr />
            <img src={home_image} alt="home_image" className="home__image" />
            <ContainerCards title="Mobiles"   />
            <hr />
            <hr />
            <BrandShop />
            <hr />
            <hr />
            <ContainerCards title="Laptops" />
            </div>
        </>
    );
};

export default Home;
