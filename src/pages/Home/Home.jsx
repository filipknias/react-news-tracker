import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, searchArticles, setCurrentPage, getValidFilters } from '../../redux/features/articlesSlice';
import LoadingCard from '../../components/Card/LoadingCard';
import ErrorCard from '../../components/Card/ErrorCard';
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector((state) => state.articles.pagination);
  const articles = useSelector((state) => state.articles);
  const loading  = useSelector((state) => state.articles.loading);
  const isError  = useSelector((state) => state.articles.isError);
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector((state) => state.articles.filters);
  
  useEffect(() => {
    const paramsArray = [];
    searchParams.forEach((value, param) => paramsArray.push(param));

    if (paramsArray.length === 1 && paramsArray[0] === 'page' || paramsArray.length === 0) {
      // Fetch top trending articles with given page
      const page = searchParams.get('page');
      // Set page in state
      dispatch(setCurrentPage(parseInt(page)));
      // Fetch request
      dispatch(fetchArticles());
      window.scrollTo(0, 0);
    } else if (paramsArray.length > 1) {
      // Fetch queried articles
      const queryString = searchParams.toString();
      dispatch(searchArticles(queryString));
    }
  }, [searchParams]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    setSearchParams({ ...getValidFilters(filters), page });
  };

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
              {totalPages && 
                <Pagination 
                  pagesCount={totalPages} 
                  currentPage={currentPage} 
                  onChange={(page) => handlePageChange(page)} 
                />
              }
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Home