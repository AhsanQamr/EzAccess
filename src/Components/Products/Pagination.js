// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${currentPage === number ? 'active' : ''}`}
//           >
//             <button
//               className="page-link"
//               onClick={() => onPageChange(number)}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;


import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_PAGES_DISPLAY = 5; // The maximum number of pages to display at once

  let pageNumbers = [];

  if (totalPages <= MAX_PAGES_DISPLAY) {
    pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    let leftBoundary = Math.max(1, currentPage - Math.floor(MAX_PAGES_DISPLAY / 2));
    let rightBoundary = Math.min(totalPages, leftBoundary + MAX_PAGES_DISPLAY - 1);

    if (rightBoundary - leftBoundary + 1 < MAX_PAGES_DISPLAY) {
      // Adjust the boundaries to show the desired number of pages
      const diff = MAX_PAGES_DISPLAY - (rightBoundary - leftBoundary + 1);
      if (leftBoundary === 1) {
        rightBoundary = Math.min(totalPages, rightBoundary + diff);
      } else {
        leftBoundary = Math.max(1, leftBoundary - diff);
      }
    }

    pageNumbers = Array.from({ length: rightBoundary - leftBoundary + 1 }, (_, index) => index + leftBoundary);

    // Add ellipsis at the beginning if necessary
    if (leftBoundary > 1) {
      pageNumbers = [1, '...', ...pageNumbers];
    }

    // Add ellipsis at the end if necessary
    if (rightBoundary < totalPages) {
      pageNumbers = [...pageNumbers, '...', totalPages];
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number,index) => (
          <li
            key={index}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => {
                if (typeof number === 'number') {
                  onPageChange(number);
                }
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;

