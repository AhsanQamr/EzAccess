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
        console.log(`daraz in products list : ${item.category}`)
        return (
          <NormalCard
            key={item._id}
            id={item._id}
            name={item.productName}
            original_price={item.originalPrice}
            current_price={item.price}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            source = {item.source}
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
            name= {item.productName}
            current_price={item.price}
            original_price={item.originalPrice}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            source= {item.source}
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
            name= {item.productName}
            current_price={item.price}
            original_price={item.originalPrice}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            source= {item.source}
            activeCategory={activeCategory}
            />
        );
        case "Shophive":
            console.log("Shophive");
            //console.log("item:", item);
          
            const prices = item.prices || [];
          
            let currnt_price = "-";
            let original_price = "-";

            console.log("prices:", prices);
          
            if (prices.length === 1) {
              // If there is only one price in the array, consider it as the original price
              currnt_price = prices[0];
            } else if (prices.length === 2) {
              // If there are two prices, assume the first one is the current price and the second one is the original price
              currnt_price = prices[0];
              original_price = prices[1];
            }

            console.log(`product image of shophive: ${item.productImg}`)
          
            return (
              <NormalCard
                key={item._id}
                id={item._id}
                name={item.productName}
                current_price={currnt_price}
                original_price={original_price}
                image={item.productImg}
                discount=""
                category={item.category}
                source = {item.source}
                activeCategory={activeCategory}
              />
            );

      case "Qmart":
        console.log("Qmart");
        console.log("item:", item);

        const qmartPrices = item.price || [];
        let qcurrnt_price = "-";
        let qoriginal_price = "-";
        console.log("prices:", qmartPrices);
        
        if (qmartPrices.length === 1){
          qcurrnt_price = qmartPrices[0];
        } else{
          qcurrnt_price = qmartPrices[0];
          qoriginal_price = qmartPrices[1];
        }

        return(
          <NormalCard
            key={item._id}
            id={item._id}
            name= {item.productName}
            current_price={qcurrnt_price}
            original_price={qoriginal_price}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            source = {item.source}
            activeCategory={activeCategory}
            />
        );
      default:
        return (
          <NormalCard
            key={item._id}
            id={item._id}
            name={item.productName}
            original_price={item.originalPrice}
            current_price={item.price}
            image={item.productImg}
            discount={item.discount}
            category={item.category}
            source = {item.source}
          
          />
        );
    }
  }
    





  return (
    <>
      {currentItems.map((item) => {
        return renderedProdcuts(item, category, activeCategory);
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




// var name = "";
// if (item.name !== undefined) {
//   name = item.name;
// } else if (item["Product Name"] !== undefined) {
//   name = item["Product Name"];
// } else {
//   name = item.Title;
// }

// var image = "";
// if (item.productImg !== undefined) {
//   image = item.productImg;
// } else if (item["Product Image"] !== undefined) {
//   image = item["Product Image"];
// } else {
//   image = item.Image;
// }

// var all_current_price = "";
// if (item.currentPrice !== undefined) {
//   all_current_price = item.currentPrice;
// } else if (item["Current Price"] !== undefined) {
//   all_current_price = item["Current Price"];
// } else {
//   all_current_price = "-" ;
// }

// var all_original_price = "";
// if (item.originalPrice !== undefined) {
//   all_original_price = item.originalPrice;
// } else if (item["Original Price"] !== undefined) {
//   all_original_price = item["Original Price"];
// } else {
//   all_original_price = "-" ;
// }
