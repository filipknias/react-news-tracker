import React, { useState, useEffect } from 'react';
import "./Header.css";
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Header = () => {
  const [today, setToday] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const date = new Date();
    const currentWeekDay = date.getDay();
    let currentDay = date.getDate();  
    if (currentDay < 10) currentDay = "0" + currentDay;
    let currentMonth = date.getMonth();
    if (currentMonth < 10) currentMonth = "0" + currentMonth;
    const currentYear = date.getFullYear();
    setToday(daysOfWeek[currentWeekDay - 1]);
    setDate(`${currentDay}.${currentMonth}.${currentYear}`);
  }, []);

  return (
    <div className="header">
      <div className="header-container">
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
          <span className="date-divider">{today}</span>
          {date}  
        </p>
        <SearchBar />
        <Filters />
      </div>
    </div>
  )
}

export default Header;