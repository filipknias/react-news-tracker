import React from 'react';
import "./FiltersButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const FiltersButton = ({ onClick }) => {
  return (
    <button className="filters-button" onClick={onClick}>
      <FontAwesomeIcon icon={faFilter} className="button-icon" />
      <p className="button-text">Filter</p>
    </button>
  )
}

export default FiltersButton;