import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../redux/features/articlesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.articles.pagination);
  const articles = useSelector((state) => state.articles);
  
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  
  return (
    <>
      <div className="articles-container">
        {articles.articles.map((article) => (
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