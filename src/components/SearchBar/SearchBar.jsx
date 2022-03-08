import React from 'react';
import "./SearchBar.css";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="input-container">
        <input 
          type="text" 
          className="text-input" 
          placeholder="Type something..."
        />
      </div>
    </div>
  )
}

export default Searchbar