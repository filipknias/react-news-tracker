import React from 'react';
import "./Home.css";
import Article from '../../components/Article/Article';
import FiltersButton from '../../components/FiltersButton/FiltersButton';

const Home = () => {
  return (
    < >
      <FiltersButton />
      <Article />
    </>
  )
}

export default Home