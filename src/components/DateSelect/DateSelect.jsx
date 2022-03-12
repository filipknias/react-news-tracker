import React from 'react';
import "./DateSelect.css";

const DateSelect = ({ label }) => {
  return (
    <div>
      <h2 className="filter-label">{label}</h2>
      <input type="date" className="custom-date-input" />
    </div>
  )
}

export default DateSelect;