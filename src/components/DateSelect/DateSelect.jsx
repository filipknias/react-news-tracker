import React, { useState, useEffect } from 'react';
import "./DateSelect.css";

const DateSelect = ({ label, onChange }) => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    const numberOfDaysToAdd = 3;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
    const defaultValue = new Date(date).toISOString().split('T')[0];
    return defaultValue;
  });

  useEffect(() => {
    if (onChange) onChange(date);
  }, [date]);

  return (
    <div>
      <h2 className="filter-label">{label}</h2>
      <input type="date" value={date} className="custom-date-input" onChange={(e) => setDate(e.target.value)} />
    </div>
  )
}

export default DateSelect;