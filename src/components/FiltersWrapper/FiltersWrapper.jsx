import React from 'react';
import "./FiltersWrapper.css";
import Dropdown from '../Dropdown/Dropdown';

const FiltersWrapper = () => {
  return (
    <div className="filters-wrapper">
      <Dropdown currentValue="Onet.pl">
        <Dropdown.Item>Interia.pl</Dropdown.Item>
        <Dropdown.Item>Interia.pl</Dropdown.Item>
        <Dropdown.Item>Interia.pl</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default FiltersWrapper;