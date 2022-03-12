import React, { createContext, useState } from 'react';

export const ArticlesContext = createContext(); 

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
    pageSize: 5,
    currentPage: 1,
    totalResults: null,
  },
};

const ArticlesProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <ArticlesContext.Provider value={[state, setState]}>
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesProvider;