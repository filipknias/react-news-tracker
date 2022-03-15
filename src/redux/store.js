import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './features/articlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;