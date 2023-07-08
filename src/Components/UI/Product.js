import NormalCard from "./Cards/NormalCard";
import module from "./Product.module.css";
import Filters from "./Filters";

const Product = (props) => {
  const MAX_ITEMS = 42; // Maximum number of items to display
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
            <div className={module.side_filter}>
              <Filters f1="Dell" f2="Hp" f3="Apple" f4="lenovo" />
            </div>
            <div className={module.product__cards}>
              {laptopArray.slice(0, MAX_ITEMS).map((item) => {
                return (
                  <NormalCard
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    original_price={item.originalPrice}
                    current_price={item.price}
                    image={item.productImg}
                    discount={item.discount}
                    category={props.category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (props.category === "mobiles") {
    const mobiles = props.product;

    // Ensure product is an array before using slice
    const mobilesArray = Array.isArray(mobiles) ? mobiles : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            {mobilesArray.slice(0, MAX_ITEMS).map((item) => {
              return (
                <NormalCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  original_price={item.originalPrice}
                  current_price={item.currentPrice}
                  image={item.productImg}
                  discount={item.discount}
                  category={props.category}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }

  if (props.category === "tablets") {
    const tablets = props.tablets;
    let tabletsArray = Array.isArray(tablets) ? tablets : [];
    return (
      <>
        <div className={module.product}>
          <div className={module.product__name}>
            <h1>{props.category}</h1>
          </div>
          <div className={module.product__cards}>
            {tabletsArray.slice(0, MAX_ITEMS).map((item) => {
              return (
                <NormalCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  original_price={item.originalPrice}
                  current_price={item.price}
                  image={item.productImg}
                  discount={item.discount}
                  category={props.category}
                />
              );
            })}
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
            {watchesArray.slice(0, MAX_ITEMS).map((item) => {
              return (
                <NormalCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  original_price={item.originalPrice}
                  current_price={item.price}
                  image={item.productImg}
                  discount={item.discount}
                  category={props.category}
                />
              );
            })}
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
            {accessoriesArray.slice(0, MAX_ITEMS).map((item) => {
              return (
                <NormalCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  original_price={item.originalPrice}
                  current_price={item.price}
                  image={item.productImg}
                  discount={item.discount}
                  category={props.category}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Product;
