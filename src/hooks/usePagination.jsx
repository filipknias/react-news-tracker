import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { fetchArticles, setCurrentPage } from '../redux/features/articlesSlice';
import { useDispatch } from 'react-redux';

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPage = searchParams.get('page');
    if (currentPage) {
      dispatch(setCurrentPage(parseInt(currentPage)));
      dispatch(fetchArticles());
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  const goToPage = (page) => {
    setSearchParams({ page });
  };

  return { goToPage };
}

export default usePagination;