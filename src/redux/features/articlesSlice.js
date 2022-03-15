import { createSlice } from '@reduxjs/toolkit';
import { fetchAllArticles } from '../../api';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  filters: {
    language: null,
    sources: [],
    sortBy: 'relevancy',
    fromDate: null,
    toDate: null,
    keywords: '',
  },
  pagination: {
    pageSize: 8,
    currentPage: 1,
    totalResults: null,
    totalPages: null,
  },
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticles: async (state) => {
      try {
        const { articles, totalResults } = await fetchAllArticles(state.pagination.pageSize);
        state.articles = articles;
        state.pagination = {
          ...state.pagination,
          totalResults,
          totalPages: Math.ceil(totalResults / state.pagination.pageSize),
        };
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { fetchArticles } = articlesSlice.actions;

export default articlesSlice.reducer;