import React, { useState, useEffect } from "react";
import "./ContainerCards.css";
import { Link } from "react-router-dom";
import NormalCard from "./NormalCard";
import { TailSpin } from 'react-loader-spinner';

const ContainerCards = (props) => {
  const [data, setData] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/categories/Mobiles/sources/Daraz"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/categories/Laptops/sources/Daraz"
        );
        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };
    fetchLaptops();
  }, []);

  const title = props.title;
  const mobilesArray = Array.isArray(data) ? data : [];
  const laptopArray = Array.isArray(laptops) ? laptops : [];

  if (loading) {
    // Show loader while data is being fetched
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
      <>
        <div className="main__container">
          <div className="container__title">
            <h1>{props.title}</h1>
            <Link to="/mobiles">
              <a href="/">View More</a>
            </Link>
          </div>
          <div className="container__card">
            {mobilesArray.slice(6, 12).map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </>
    );
  }

  if (title === "Laptops") {
    return (
      <>
        <div className="main__container">
          <div className="container__title">
            <h1>{props.title}</h1>
            <Link to="/laptops">
              <a href="/">View More</a>
            </Link>
          </div>
          <div className="container__card">
            {laptopArray.slice(12, 18).map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </>
    );
  }

  const recommended = [
    ...mobilesArray.slice(9, 13),
    ...laptopArray.slice(20, 24),
  ];

  if (title === "Recommended") {
    const recommendedArray = Array.isArray(recommended) ? recommended : [];
    return (
      <>
        <div className="main__container">
          <div className="container__title">
            <h1>{props.title}</h1>
            <a href="/">View More</a>
          </div>
          <div className="container__card">
            {recommendedArray.slice(0, 7).map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default ContainerCards;
