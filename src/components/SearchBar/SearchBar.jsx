import React from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { setFilters } from '../../redux/features/articlesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.articles.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  const getValidFilters = () => {
    const validFiltersArray = Object.entries(filters).filter(([key, value]) => value !== null);
    const validFilters = {};
    validFiltersArray.forEach(([key, value]) => validFilters[key] = value);
    return validFilters;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchParams({ ...getValidFilters(), page: 1 });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <button type="submit" className="submit-button" title="Search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
        <input 
          type="text" 
          className="text-input" 
          placeholder="Type something..."
          required
          onChange={(e) => dispatch(setFilters({ q: e.target.value }))}
        />
      </div>
    </form>
  )
}

export default Searchbar;