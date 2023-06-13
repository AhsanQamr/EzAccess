import NormalCard from "./Cards/NormalCard"
import module from './Product.module.css'

const Product = (props) => {

    // add product name and cards using tailwind css
    return ( 
        <>
            <div className={module.product}>
                <div className={module.product__name}>
                    <h1>{props.category}</h1>
                </div>
                <div className={module.product__cards}>
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                    <NormalCard />
                </div>
            </div>


        </>
    );
}

export default Product;