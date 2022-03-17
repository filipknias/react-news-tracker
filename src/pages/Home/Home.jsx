import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../redux/features/articlesSlice';
import usePagination from '../../hooks/usePagination';
import LoadingCard from '../../components/Card/LoadingCard';
import ErrorCard from '../../components/Card/ErrorCard';

const Home = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector((state) => state.articles.pagination);
  const articles = useSelector((state) => state.articles);
  const loading  = useSelector((state) => state.articles.loading);
  const isError  = useSelector((state) => state.articles.isError);
  const { goToPage } = usePagination();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  
  return (
    <>
      {loading ? <LoadingCard /> : (
        <>
          {isError ?  <ErrorCard /> : (
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
              {totalPages && <Pagination pagesCount={totalPages} currentPage={currentPage} onChange={goToPage} />}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Home