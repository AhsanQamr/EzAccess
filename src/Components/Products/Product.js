import module from "./Product.module.css";
import ProductsList from "./ProductsList";

const Product = (props) => {

  // Ensure product is an array before using slice
  if (props.category === "laptops") {
    const laptops = props.laptops;
    const laptopArray = Array.isArray(laptops) ? laptops : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.container}>
            <div className={module.product__cards}>
              <ProductsList laptoparray={laptopArray} category={props.category} />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (props.category === "mobiles") {
    //const mobiles = props.product;
    // Ensure product is an array before using slice
    const mobiles = props.product;
    console.log("mobiles", mobiles);
    const mobilesArray = Array.isArray(mobiles) ? mobiles : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            <ProductsList mobilesarray={mobilesArray} category={props.category} />
          </div>
        </div>
      </>
    );
  }

  if (props.category === "tablets") {
    const tablets = props.tablets;
    const tabletsArray = Array.isArray(tablets) ? tablets : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            <ProductsList tabletsarray={tabletsArray} category={props.category} />
          </div>
        </div>
      </>
    );
  }

  if (props.category === "watches") {
    const watches = props.watches;
    const watchesArray = Array.isArray(watches) ? watches : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            <ProductsList watchesarray={watchesArray} category={props.category} />
          </div>
        </div>
      </>
    );
  }

  if (props.category === "accessories") {
    const accessories = props.accessories;
    const accessoriesArray = Array.isArray(accessories) ? accessories : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            <ProductsList accessoriesarray={accessoriesArray} category={props.category} />
          </div>
        </div>
      </>
    );
  }
};

export default Product;
