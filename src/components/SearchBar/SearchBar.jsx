import React from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { setFilters, getValidFilters } from '../../redux/features/articlesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.articles.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchParams({ ...getValidFilters(filters), page: 1 });
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