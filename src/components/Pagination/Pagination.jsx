import React, { useState, useEffect } from 'react';
import "./Pagination.css";

const Pagination = ({ pagesCount, currentPage, onChange }) => {
  const [paginationItems, setPaginationItems] = useState([]); 

  useEffect(() => {
    const items = [];
    for (let page=1; page<=pagesCount; page++) {
      items.push(
        <div
          key={page}
          onClick={page === currentPage ? () => undefined: () => onChange(page)}
          className={`pagination-item ${page == currentPage ? 'pagination-item-active' : ''}`}
        >
          {page}
        </div>
      );
    }
    setPaginationItems(items);
  }, [currentPage]);

  return (
    <div className="pagination">{paginationItems}</div>
  )
}

export default Pagination;