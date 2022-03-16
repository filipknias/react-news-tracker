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

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (args, { getState }) => {
  const { articles } = getState();
  return await fetchAllArticles(articles.pagination.pageSize, articles.pagination.currentPage);
;});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
  },
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

export const { setCurrentPage } = articlesSlice.actions;

export default articlesSlice.reducer;