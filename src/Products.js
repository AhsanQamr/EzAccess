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
      const response = await fetch("http://localhost:8080/daraz/getMobiles");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);


  useEffect(() => {
    const fetchLaptops = async () => {
      const response = await fetch("http://localhost:8080/daraz/getLaptops");
      const data = await response.json();

      setLaptops(data);
    };
    fetchLaptops();
  }, []);
  console.log(laptops);

  useEffect(() => {
    const fetchTablets = async () => {
      const response = await fetch("http://localhost:8080/daraz/getTablets");
      const data = await response.json();

      setTablets(data);
    };
    fetchTablets();
  }, []);

  useEffect(() => {
    const fetchWatches = async () => {
      const response = await fetch("http://localhost:8080/daraz/getWatches");
      const data = await response.json();

      setWatches(data);
    };
    fetchWatches();
  }, []);

  useEffect(() => {
    const fetchAccessories = async () => {
      const response = await fetch("http://localhost:8080/daraz/getAccessories");
      const data = await response.json();

      setAccessories(data);
    };
    fetchAccessories();
  }, []);






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