import { useState, useEffect } from "react";

const ProductFilter = (props) => {
    const [filter, setFilter] = useState(props.product);
    const [activeButton, setActiveButton] = useState(null);
  
    const filterProduct = (category) => {   
        const updateList = props.product.filter((x) => x.category === category);
        console.log(updateList);
        setFilter(updateList);
        setActiveButton(category);
    }
  
    useEffect(() => {
        setFilter(props.product);
        setActiveButton(null);
    }, [props.product]);


    return (
        <>
            <div className="col my-3 " style={{textAlign: 'center'}}>
            <div className="position-sticky">
                <button className={`btn btn-outline-dark m-1 btn-sm ${!activeButton ? "active" : ""}`} onClick={() => {setFilter(props.product); setActiveButton(null);}}>All</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "Daraz" ? "active" : ""}`} onClick={() => filterProduct("Daraz")}>Daraz</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "men's clothing" ? "active" : ""}`} onClick={() => filterProduct("Priceoye")}>Priceoye</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "jewelery" ? "active" : ""}`} onClick={() => filterProduct("Qmart")}>Qmart</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "electronics" ? "active" : ""}`} onClick={() => filterProduct("Shophive")}>Shophive</button>
                <button className={`btn btn-outline-dark m-1 btn-sm ${activeButton === "electronics" ? "active" : ""}`} onClick={() => filterProduct("Symbios")}>Symbios</button>
            </div>
            <hr />
        </div>

        </>
    );
}

export default ProductFilter;