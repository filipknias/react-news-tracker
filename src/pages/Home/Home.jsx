import React, { useEffect } from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, searchArticles, setCurrentPage, getValidFilters, setFilters } from '../../redux/features/articlesSlice';
import LoadingCard from '../../components/Card/LoadingCard';
import ErrorCard from '../../components/Card/ErrorCard';
import EmptyResultsCard from '../../components/Card/EmptyResultsCard';
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useSelector((state) => state.articles.pagination);
  const articles = useSelector((state) => state.articles);
  const loading  = useSelector((state) => state.articles.loading);
  const error  = useSelector((state) => state.articles.error);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const paramsCount = () => {
    let counter = 0;
    searchParams.forEach(() => counter++);
    return counter;
  };

  useEffect(() => {
    const page = searchParams.get('page') || 1;
    // Set page in state
    dispatch(setCurrentPage(parseInt(page)));
    let promise;

    if (paramsCount() === 1 && searchParams.has('page') || paramsCount() === 0) {
      // Fetch request
      promise = dispatch(fetchArticles());
      // Scroll to top
      window.scrollTo(0, 0);
    } else if (paramsCount() >= 1) {
      // Set filters state
      searchParams.forEach((value, key) => {
        if (key !== 'sources') dispatch(setFilters({ [key]: value }));
      });
      // Fetch queried articles
      const queryString = searchParams.toString();
      promise = dispatch(searchArticles(queryString));
    }

    return () => {
      promise.abort();
    };
  }, [searchParams]);

  const handlePageChange = (page) => {
    // Set current page in state
    dispatch(setCurrentPage(parseInt(page)));
    // Set all params to search params state
    const queryParams = {};
    searchParams.forEach((value, key) => queryParams[key] = value);
    setSearchParams({ ...queryParams, page });
  };

  return (
    <>
      {loading ? (
        <LoadingCard 
          loadingText="Loading articles..." 
          loadingDescription="Your articles are loading. Please wait" 
        />
      ) : (
        <>
          {error ?  <ErrorCard message={error} /> : (
            <div className="articles-container">
              <>
                {articles.articles.length > 0 ? (
                  <>
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
                  </>
                ) : <EmptyResultsCard />}
              </>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Home