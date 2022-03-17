import React from 'react';
import "./DateSelect.css";

const DateSelect = ({ label, onChange }) => {
  return (
    <div>
      <h2 className="filter-label">{label}</h2>
      <input type="date" className="custom-date-input" onChange={onChange ? onChange : undefined} />
    </div>
  )
}

export default DateSelect;