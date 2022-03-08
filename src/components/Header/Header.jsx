import React from 'react';
import "./Header.css";
import SearchBar from '../SearchBar/Searchbar';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="navbar-header">News Tracker</h1>  
        <ul className="navbar-nav">
          <li className="nav-item active">News</li>
          <li className="nav-item">Trending</li>
          <li className="nav-item">Sources</li>
        </ul>  
      </nav>
      <h1 className="header-text">Search for news</h1>
      <p className="current-date-text">
        <span className="date-divider">Monday</span>
        07.03.2022  
      </p>
      <SearchBar /> 
    </div>
  )
}

export default Header;