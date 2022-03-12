import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesProvider';
import { fetchAllArticles } from '../api';

function useArticles() {
  const [state, setState] = useContext(ArticlesContext);

  // Getters
  const getArticles = () => state.articles;
  const getFilters = () => state.filters;

  // Setters
  const setFilters = (filters) => {
    setState((state) => { return { ...state, filters: { ...state.filters, ...filters } } });
  };
  const setArticles = (articles) => {
    setState((state) => { return { ...state, articles } });
  };

  // Actions
  const fetchArticles = async (filters) => {
    if (filters) {
      // TODO: Fetch articles with given filters
    } else {
      const { articles } = await fetchAllArticles();
      setArticles(articles);
    }
  };

  return {
    getArticles,
    getFilters,
    setFilters,
    fetchArticles,
  };
}

export default useArticles;