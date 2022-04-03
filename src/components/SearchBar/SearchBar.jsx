import React, { useState, useEffect } from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { setFilters, getValidFilters, resetFilters } from '../../redux/features/articlesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

const Searchbar = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.articles.filters);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchParams({ ...getValidFilters(filters), page: 1 });
    setFormSubmitted(true);
  };

  const handleReset = () => {
    if (searchParams.has('q') || searchParams.has('sources') ) setSearchParams({});
    dispatch(resetFilters());
  };  

  useEffect(() => {
    if (!formSubmitted) return;
    // Change route with search params when form is submitted
    const queryString = searchParams.toString();
    navigate(`/?${queryString}`);
  }, [formSubmitted]);

  useEffect(() => {
    // Reset filters and state when changing route
    setFormSubmitted(false);
    dispatch(resetFilters());
  }, [pathname]);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <button type="button" className="input-button" title="Reset" onClick={handleReset}>
          <FontAwesomeIcon icon={faClose} className="button-icon button-icon-reset" />
        </button>
        <input 
          type="text" 
          className="text-input" 
          placeholder="Type something..."
          required
          value={filters.q}
          onChange={(e) => dispatch(setFilters({ q: e.target.value }))}
        />
        <button type="submit" className="input-button" title="Search">
          <FontAwesomeIcon icon={faSearch} className="button-icon" />
        </button>
      </div>
    </form>
  )
}

export default Searchbar;