
// import NormalCard from "../UI/Cards/NormalCard";
// import React, { useState } from "react";
// import Pagination from "./Pagination";

// const ProductsList = (products) => {
//   const MAX_ITEMS_PER_PAGE = 40;

//   let finalArray = [];

//   if (products.category === "accessories") {
//     finalArray = products.accessoriesarray;
//   }
//   if (products.category === "watches") {
//     finalArray = products.watchesarray;
//   }
//   if (products.category === "tablets") {
//     finalArray = products.tabletsarray;
//   }
//   if (products.category === "laptops") {
//     finalArray = products.laptopsarray;
//   }
//   if (products.category === "mobiles") {
//     finalArray = products.mobilesarray;
//   }

//   const totalPages = Math.ceil(finalArray.length / MAX_ITEMS_PER_PAGE);
//   //const totalPages = 10;
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const startIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
//   const endIndex = startIndex + MAX_ITEMS_PER_PAGE;
//   const currentItems = finalArray.slice(startIndex, endIndex);

//   let current_price = 0;

//   return (
//     <>
//       {currentItems.map((item) => {
//         if (products.category === "mobiles") {
//           current_price = item.currentPrice;
//         } else {
//           current_price = item.price;
//         }

//         return (
//           <NormalCard
//             key={item._id}
//             id={item._id}
//             name={item.name}
//             original_price={item.originalPrice}
//             current_price={current_price}
//             image={item.productImg}
//             discount={item.discount}
//             category={products.category}
//           />
//         );
//       })}



//       <div className="container d-flex justify-content-center">
//       <div className="row">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//     </>
//   );
// };

// export default ProductsList;


import React, { useState } from "react";
import NormalCard from "../UI/Cards/NormalCard";
import Pagination from "./Pagination";

const ProductsList = ({ products, category }) => {
  const MAX_ITEMS_PER_PAGE = 40;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  const endIndex = startIndex + MAX_ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, endIndex);

  return (
    <>
      {currentItems.map((item) => {
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
          />
        );
      })}

      <div className="container d-flex justify-content-center">
        <div className="row">
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
