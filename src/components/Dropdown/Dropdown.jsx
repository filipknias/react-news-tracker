import React, { useState, useEffect, useRef } from 'react';
import "./Dropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ children, currentValue }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    window.onclick = (e) => {
      const dropdownEl = dropdownRef.current;
      if (!dropdownEl.contains(e.target)) {
        setOpen(false);
      };
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <p>{currentValue}</p>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
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