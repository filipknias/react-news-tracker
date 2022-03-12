import React from 'react';
import "./Article.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'

const formatPublishDate = (dateString) => {
  const splittedDate = dateString.split('T').join(' ');
  const date = splittedDate.slice(0, splittedDate.length - 1);
  return date;
};

const Article = ({ photo, title, publishedAt, description, source, author, url }) => {
  return (
    <a href={url} target="_blank" className="article">
      <img src={photo} alt="Article image" className="article-image" />
      <div className="article-content">
        <div>
          <h1 className="article-title">{title}</h1>
          <p className="article-description">{description}</p>
        </div>
        <div className="article-footer">
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faGlobe} className="article-footer-item-icon" />
            <p className="article-footer-item-text">{source}</p>
          </div>
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faCalendar} className="article-footer-item-icon" />
            <p className="article-footer-item-text">{formatPublishDate(publishedAt)}</p>
          </div>
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faUser} className="article-footer-item-icon" />
            <p className="article-footer-item-text">{author ? author : "Unknown"}</p>
          </div>
        </div> 
      </div>
    </a>
  )
}

export default Article;