import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesProvider';

function useArticles() {
  const [state, setState] = useContext(ArticlesContext);

  const getArticles = () => state.articles;
  const getFilters = () => state.filters;

  const updateFilters = (filters) => {
    setState((state) => { return { ...state, filters: { ...state.filters, ...filters } } });
  };

  return {
    getArticles,
    getFilters,
    updateFilters,
  };
}

export default useArticles;