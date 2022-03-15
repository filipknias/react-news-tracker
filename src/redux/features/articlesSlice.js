import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (obj, { getState }) => {
  const { articles } = getState();
  return await fetchAllArticles(articles.pagination.pageSize);
;});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload.articles;
      state.pagination = {
        ...state.pagination,
        totalResults: payload.totalResults,
        totalPages: Math.ceil(payload.totalResults / state.pagination.pageSize),
      };
    },
    [fetchArticles.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { } = articlesSlice.actions;

export default articlesSlice.reducer;