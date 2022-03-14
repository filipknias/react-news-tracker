import React, { useState } from 'react';
import "./Pagination.css";

const Pagination = ({ pagesCount, currentPage }) => {
  const [paginationItems] = useState(() => {
    const items = [];
    for (let i=1;i<=pagesCount;i++) {
      items.push(
        <div key={i} className={`pagination-item ${i === currentPage ? 'pagination-item-active' : ''}`}>{i}</div>
      );
    };
    return items;
  }); 
  return (
    <div className="pagination">{paginationItems}</div>
  )
}

export default Pagination;