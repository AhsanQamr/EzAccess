import React,{useState,useEffect} from "react";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import Row from "./Components/UI/Row";
import Product from "./Components/Products/Product";





function Products(props) {
  const [data, setData] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [watches, setWatches] = useState([]); 
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/mobiles");
      console.log(response);
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);


  useEffect(() => {
    const fetchLaptops = async () => {
      const response = await fetch("http://localhost:8080/api/laptops");
      const data = await response.json();

      setLaptops(data);
    };
    fetchLaptops();
  }, []);
  console.log(laptops);

  useEffect(() => {
    const fetchTablets = async () => {
      const response = await fetch("http://localhost:8080/api/tablets");
      const data = await response.json();

      setTablets(data);
    };
    fetchTablets();
  }, []);

  useEffect(() => {
    const fetchWatches = async () => {
      const response = await fetch("http://localhost:8080/api/watches");
      const data = await response.json();

      setWatches(data);
    };
    fetchWatches();
  }, []);

  useEffect(() => {
    const fetchAccessories = async () => {
      const response = await fetch("http://localhost:8080/api/accessories");
      const data = await response.json();

      setAccessories(data);
    };
    fetchAccessories();
  }, []);

  console.log(`category : ${props.category}`)



    return (
        <>
          <div className="App">
            <Header />
            <Row />
            <Product category = {props.category} product={data} laptops = {laptops} tablets = {tablets} watches={watches} accessories={accessories}  />
            <Footer />
          </div>
        </>
      );
}

export default Products;