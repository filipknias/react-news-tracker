import React from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchArticles, setFilters } from '../../redux/features/articlesSlice';
import { useDispatch } from 'react-redux';

const Searchbar = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchArticles());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <button type="submit" className="submit-button">
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