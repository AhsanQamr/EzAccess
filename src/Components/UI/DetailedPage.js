import React from "react";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";


const DetailedPage = () => {

    const {category,id} = useParams();
    console.log(category,id);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchMobile = async () => {
            const response = await fetch(`http://localhost:8080/daraz/${category}/${id}`);
            const data = await response.json();

            setProducts(data);
        };
        fetchMobile();
    }, [category,id]);

    console.log(products);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={products.productImg} alt="image1" />
                        <h1>{products.name}</h1>
                        <h2>{products.currentPrice}</h2>
                        <h3>{products.originalPrice}</h3>
                        <h4>{products.discount}</h4>
                        <h5>{products.brandName}</h5>
                        <p>{products.description}</p>
                        </div>                            
                </div>    
            </div>
        </>
    );
};

export default DetailedPage;

