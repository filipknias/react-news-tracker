import React from 'react';
import "./Article.css";

const Article = () => {
  return (
    <div className="article">
      <img src="https://picsum.photos/500" alt="" className="article-image" />
      <div className="article-content">
        <div>
          <h1 className="article-title">Test title</h1>
          <p className="article-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt neque consequatur dolorem eius quasi repellat eveniet? Molestiae impedit aperiam perferendis officiis perspiciatis. Debitis ex repudiandae veritatis dignissimos? Nam, quidem? Laudantium, at. Iste quae, commodi, nesciunt eveniet explicabo deleniti voluptate ratione libero et rerum inventore vitae cum sit nostrum error!  
          </p>
        </div>
        <div className="article-footer">
          <div className="article-footer-item">Onet.pl</div>
          <div className="article-footer-item">25.11.2021</div>
          <div className="article-footer-item">John Doe</div>
        </div> 
      </div>
    </div>
  )
}

export default Article;