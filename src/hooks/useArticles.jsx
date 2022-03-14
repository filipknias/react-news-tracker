import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesProvider';
import { fetchAllArticles } from '../api';

function useArticles() {
  const [state, setState] = useContext(ArticlesContext);

  // Getters
  const getArticles = () => state.articles;
  const getPagination = () => state.pagination;

  // Setters
  const setArticles = (articles) => {
    setState((state) => { return { ...state, articles } });
  };
  const setPagination = (pagination) => {
    setState((state) => { return { ...state, pagination } });
  };

  // Actions
  const fetchArticles = async (filters) => {
    if (filters) {
      // TODO: Fetch articles with given filters
    } else {
      const { articles, totalResults } = await fetchAllArticles();
      setArticles(articles);
      setPagination({
        ...state.pagination,
        totalResults,
      });
    }
  };

  return {
    getArticles,
    getPagination,
    fetchArticles,
  };
}

export default useArticles;