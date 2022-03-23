import React from 'react';
import "./Pagination.css";

const Pagination = ({ pagesCount, currentPage, onChange }) => {
  return (
    <div className="pagination">
      {currentPage > 2 && <div className="pagination-item" onClick={() => onChange(currentPage - 2)}>{currentPage - 2}</div>}
      {currentPage > 1 && <div className="pagination-item" onClick={() => onChange(currentPage - 1)}>{currentPage - 1}</div>}
      <div className="pagination-item pagination-item-active" onClick={() => onChange(currentPage)}>{currentPage}</div>
      {currentPage + 1 <= pagesCount && <div className="pagination-item" onClick={() => onChange(currentPage + 1)}>{currentPage + 1}</div>}
      {currentPage + 2 <+ pagesCount && <div className="pagination-item" onClick={() => onChange(currentPage + 2)}>{currentPage + 2}</div>}
    </div>
  )
}

export default Pagination;