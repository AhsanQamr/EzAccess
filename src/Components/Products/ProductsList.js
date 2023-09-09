import React, { useState } from "react";
import NormalCard from "../UI/Cards/NormalCard";
import Pagination from "./Pagination";

const ProductsList = ({ products, category, activeCategory }) => {
  const MAX_ITEMS_PER_PAGE = 40;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  const endIndex = startIndex + MAX_ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, endIndex);

  const activeDB = activeCategory;
  console.log("activeDB:", activeDB);

  const renderedProdcuts = (item, category, activeCategory) => {
    switch (activeDB) {
      case "Daraz":
        const current_price = category === "mobiles" ? item.currentPrice : item.price;
        return (
          <NormalCard
            key={item._id}
            id={item._id}
            name={item.name}
            original_price={item.originalPrice}
            current_price={current_price}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            activeCategory={activeCategory}
          />
        );
      case "Priceoye":
        console.log("Priceoye");
        console.log("item:", item);
        return(
          <NormalCard
            key={item._id}
            id={item._id}
            name= {item["Product Name"]}
            current_price={item["Current Price"]}
            original_price={item["Original Price"]}
            image={item["Product Image"]}
            discount={item["Discount"]}
            category={item.Category}
            activeCategory={activeCategory}
            />
        );

      case "Symbios":
        console.log("Symbios");
        console.log("item:", item);

        return(
          <NormalCard
            key={item._id}
            id={item._id}
            name= {item.name}
            current_price={item.price_new}
            original_price={item.price_old}
            image={item.img_url}
            discount={item.off}
            category={item.category}
            activeCategory={activeCategory}
            />
        );

    }
  }
    





  return (
    <>
      {currentItems.map((item) => {

        return renderedProdcuts(item, category, activeCategory);

        //const current_price = category === "mobiles" ? item.currentPrice : item.price;

        {/* return (
          <NormalCard
            key={item._id}
            id={item._id}
            name={item.name}
            original_price={item.originalPrice}
            current_price={current_price}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
          />
        ); */}
      })}

      <div className="col-12 mt-4"> {/* Add margin-top (e.g., mt-4) as needed */}
        <div className="d-flex justify-content-start">
          {/* Centered Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / MAX_ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

    </>
  );
};

export default ProductsList;
