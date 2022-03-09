import React from 'react';
import "./Article.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'

const Article = () => {
  return (
    <div className="article">
      <img src="https://picsum.photos/500" alt="" className="article-image" />
      <div className="article-content">
        <div>
          <div className="article-label">Latest</div>
          <h1 className="article-title">Test title</h1>
          <p className="article-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt neque consequatur dolorem eius quasi repellat eveniet? Molestiae impedit aperiam perferendis officiis perspiciatis. Debitis ex repudiandae veritatis dignissimos? Nam, quidem? Laudantium, at. Iste quae, commodi, nesciunt eveniet explicabo deleniti voluptate ratione libero et rerum inventore vitae cum sit nostrum error!  
          </p>
        </div>
        <div className="article-footer">
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faGlobe} className="article-footer-item-icon" />
            <p className="article-footer-item-text">Onet.pl</p>
          </div>
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faCalendar} className="article-footer-item-icon" />
            <p className="article-footer-item-text">25.11.2021</p>
          </div>
          <div className="article-footer-item">
            <FontAwesomeIcon icon={faUser} className="article-footer-item-icon" />
            <p className="article-footer-item-text">John Doe</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Article;