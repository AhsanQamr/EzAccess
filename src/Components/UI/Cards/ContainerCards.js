import React, { useState, useEffect } from "react";
import "./ContainerCards.css";
import { Link } from "react-router-dom";
import NormalCard from "./NormalCard";
import { TailSpin } from 'react-loader-spinner';

const ContainerCards = (props) => {
  const [data, setData] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/categories/Mobiles/sources/Daraz");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await fetch("http://localhost:5000/inference/apple");
        const data = await response.json();
        console.log("data", data);
        getMatchingProductsFromDB({data});
      } catch (error) {
        console.error('Error fetching recommended:', error);
      }
    };

    fetchRecommended();
  }, []); 

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/categories/Laptops/sources/Daraz");
        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };
    fetchLaptops();
  }, []);


  const getMatchingProductsFromDB = async (dataResponse) => {
    try {
      const response = await fetch("http://localhost:8081/api/allproducts");
      const allProducts = await response.json();
    
      const textValues = Object.values(dataResponse.data);
      const matchingProducts = allProducts.filter(product => {
        // Assuming productName is a key in your product object
        const productNameLower = product.productName.toLowerCase();
        return textValues.some(value => productNameLower.includes(value.toLowerCase()) || value.toLowerCase().includes(productNameLower));
      });

      if (matchingProducts.length < 4) {
        // Fetch additional products from the 8081 port and add them to the recommended list
        const additionalResponse = await fetch("http://localhost:8081/api/allproducts");
        const additionalProducts = await additionalResponse.json();
        
        // Add the additional products to the matchingProducts array
        matchingProducts.push(...additionalProducts.slice(0, 6 - matchingProducts.length));
      }
  
      setRecommended(matchingProducts);


    
      console.log("data response: ", dataResponse);
      console.log("matching products:", matchingProducts);
    
      setRecommended(matchingProducts);
    } catch (error) {
      console.error("Error fetching DB items:", error);
    }
  };
  
  
  
  
  
  
  

  const title = props.title;
  const mobilesArray = Array.isArray(data) ? data : [];
  const laptopArray = Array.isArray(laptops) ? laptops : [];
  const recommendedArray = Array.isArray(recommended) ? recommended : [];
  console.log("recommended items:", recommended)
  console.log("recommended array", recommendedArray)

  if (loading) {
    return (
      <div className="loaderContainer" style={{ textAlign: 'center', marginTop: '50px', margin: '0 auto' }}>
        <TailSpin
          type="Puff"
          color="#808080"
          height={50}
          width={50}
        />
      </div>
    );
  }

  if (title === "Mobiles") {
    return (
      <div className="main__container">
        <div className="container__title">
          <h1>{props.title}</h1>
          <Link to="/mobiles">
            <a href="/">View More</a>
          </Link>
        </div>
        <div className="container__card">
          {mobilesArray.slice(6, 12).map((item) => (
            <NormalCard
              key={item._id}
              id={item._id}
              name={item.productName}
              current_price={item.price}
              original_price={item.originalPrice}
              image={item.productImg}
              discount={item.discount}
              category={item.category}
              source={item.source}
            />
          ))}
        </div>
      </div>
    );
  }

  if (title === "Laptops") {
    return (
      <div className="main__container">
        <div className="container__title">
          <h1>{props.title}</h1>
          <Link to="/laptops">
            <a href="/">View More</a>
          </Link>
        </div>
        <div className="container__card">
          {laptopArray.slice(12, 18).map((item) => (
            <NormalCard
              key={item._id}
              id={item._id}
              name={item.productName}
              current_price={item.price}
              original_price={item.originalPrice}
              image={item.productImg}
              discount={item.discount}
              category={item.category}
              source={item.source}
            />
          ))}
        </div>
      </div>
    );
  }

  if (title === "Recommended") {
    return (
      <div className="main__container">
        <div className="container__title">
          <h1>{props.title}</h1>
          <a href="/">View More</a>
        </div>
        <div className="container__card">
          {recommendedArray.map((item) => (
            <NormalCard
              key={item._id}
              id={item._id}
              name={item.productName}
              current_price={item.price}
              original_price={item.originalPrice}
              image={item.productImg}
              discount={item.discount}
              category={item.category}
              source={item.source}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default ContainerCards;
