import React, { useState, useEffect, useRef } from 'react';
import "./Dropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ children, currentValue, label }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
      window.onclick = (e) => {
        if (!dropdownRef.current.contains(e.target)) {
          setOpen(false);
        };
      };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <h2 className="filter-label">{label}</h2>
      <div className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <p>{currentValue}</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={`dropdown ${open ? 'dropdown-opened' : 'dropdown-closed'}`}>
        {children}
      </div>
    </div>
  )
};

const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick ? onClick : undefined}>{children}</div>
  )
};
Dropdown.Item = DropdownItem;

export default Dropdown;