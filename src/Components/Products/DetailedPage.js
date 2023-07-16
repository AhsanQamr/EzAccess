import React from "react";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";


const DetailedPage = () => {

    const {category,id} = useParams();
    console.log(category,id);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchMobile = async () => {
            const response = await fetch(`http://localhost:8080/daraz/products/${category}/${id}`);
            console.log(response);
            const data = await response.json();

            setProducts(data);
        };
        fetchMobile();
    }, [category,id]);

    console.log(products);


    // design detailed page with simple css
    return (
        <>
            <div className="detailed_container">
                <div className="detailed_image">
                    <img src={products.productImg} alt="product" />
                </div>
                <div className="detailed_info">
                    <h1>{products.title}</h1>
                    <div className="detailed_price">
                        <h2>Rs. {products.originalPrice}</h2>
                    </div>
                    <div className="detailed_description">
                        <p>{products.description}</p>
                    </div>
                    <div className="detailed_button">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedPage;

