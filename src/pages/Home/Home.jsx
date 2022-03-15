import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import useArticles from '../../hooks/useArticles';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
  const { fetchArticles, getArticles, getPagination } = useArticles();
  const pagination = getPagination();
  
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
        {pagination.totalPages && <Pagination pagesCount={pagination.totalPages} currentPage={pagination.currentPage} />}
      </div>
    </>
  )
}

export default Home