import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import useArticles from '../../hooks/useArticles';

const Home = () => {
  const { fetchArticles, getArticles } = useArticles();
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="articles-container">
        {getArticles().map((article) => (
          <Article 
            key={article.title}
            title={article.title}
            description={article.description}
            photo={article.urlToImage}
            author={article.author}
            publishedAt={article.publishedAt}
            source={article.source.name}
            url={article.url}
          />
        ))}
      </div>
    </>
  )
}

export default Home