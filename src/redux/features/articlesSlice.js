import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllArticles, fetchQueryArticles } from '../../api';

const initialState = {
  articles: [],
  loading: false,
  isError: false,
  filters: {
    language: null,
    sortBy: 'relevancy',
    from: null,
    to: null,
    q: '',
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

export const searchArticles = createAsyncThunk('articles/searchArticles', async (args, { getState }) => {
  const { articles: { pagination, filters } } = getState();
  return await fetchQueryArticles(filters, pagination.pageSize, pagination.currentPage);
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.articles = [];
      state.isError = false;
      state.loading = true;
    },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload.articles;
      state.pagination = {
        ...state.pagination,
        totalResults: payload.totalResults,
        totalPages: Math.ceil(payload.totalResults / state.pagination.pageSize),
      };
      state.loading = false;
    },
    [fetchArticles.rejected]: (state) => {
      state.loading = false;
      state.isError = true;
    },
    [searchArticles.pending]: (state) => {
      state.articles = [];
      state.isError = false;
      state.loading = true;
    },
    [searchArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload.articles;
      state.pagination = {
        ...state.pagination,
        totalResults: payload.totalResults,
        totalPages: Math.ceil(payload.totalResults / state.pagination.pageSize),
      };
      state.loading = false;
    },
    [searchArticles.rejected]: (state) => {
      state.loading = false;
      state.isError = true;
    },
  },
});

export const { setCurrentPage, setFilters } = articlesSlice.actions;

export default articlesSlice.reducer;