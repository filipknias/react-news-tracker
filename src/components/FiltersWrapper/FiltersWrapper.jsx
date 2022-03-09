import React from 'react';
import "./FiltersWrapper.css";

const FiltersWrapper = ({ children }) => {
  return (
    <div className="filters-wrapper">
      {children}
    </div>
  )
}

export default FiltersWrapper;