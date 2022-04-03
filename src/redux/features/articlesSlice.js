import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllArticles, fetchQueryArticles } from '../../api';

const initialFilters = {
  language: null,
  sortBy: 'relevancy',
  from: null,
  to: null,
  q: '',
};

const initialState = {
  articles: [],
  loading: false,
  error: null,
  filters: initialFilters,
  pagination: {
    pageSize: 8,
    currentPage: 1,
    totalResults: null,
    totalPages: null,
  },
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (args, { getState, rejectWithValue }) => {
  const { articles } = getState();
  try {
    return await fetchAllArticles(articles.pagination.pageSize, articles.pagination.currentPage);
  } catch (err) {
    return rejectWithValue(err.message);
  }
;});

export const searchArticles = createAsyncThunk('articles/searchArticles', async (queryString, { getState, rejectWithValue }) => {
  const { articles } = getState();
  try {
    return await fetchQueryArticles(queryString, articles.pagination.pageSize);
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const getValidFilters = (filters) => {
  const validFiltersArray = Object.entries(filters).filter(([key, value]) => value !== null && value !== "");
  const validFilters = {};
  validFiltersArray.forEach(([key, value]) => validFilters[key] = value);
  return validFilters;
};

const getTotalPages = (totalResults, pageSize) => {
  return Math.floor(totalResults / pageSize);
};

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
    resetFilters: (state) => {
      state.filters = initialFilters;
      state.pagination.currentPage = 1;
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
        totalPages: getTotalPages(payload.totalResults,state.pagination.pageSize),
      };
      state.loading = false;
    },
    [fetchArticles.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [searchArticles.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [searchArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload.articles;
      state.pagination = {
        ...state.pagination,
        totalResults: payload.totalResults,
        totalPages: getTotalPages(payload.totalResults,state.pagination.pageSize),
      };
      state.loading = false;
    },
    [searchArticles.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setCurrentPage, setFilters, resetFilters } = articlesSlice.actions;

export default articlesSlice.reducer;