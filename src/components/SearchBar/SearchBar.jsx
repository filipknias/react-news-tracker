import React from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { setFilters, getValidFilters, setCurrentPage, resetFilters, fetchArticles } from '../../redux/features/articlesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.articles.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    setSearchParams({ ...getValidFilters(filters), page: 1 });
  };

  const handleReset = () => {
    setSearchParams({});
    dispatch(resetFilters());
    if (filters.q.length > 0) dispatch(fetchArticles());  
  };  

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <button type="button" className="input-button" title="Reset" onClick={handleReset}>
          <FontAwesomeIcon icon={faClose  } className="button-icon" style={{ fontSize: '30px' }} />
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