import React from 'react';
import "./Filters.css";
import Dropdown from '../Dropdown/Dropdown';
import DateSelect from '../DateSelect/DateSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { setFilters } from '../../redux/features/articlesSlice';
import { useSelector, useDispatch } from 'react-redux';

const languages = [
  {
    value: 'ar',
    text: 'Argentina',
    flag: 'https://countryflagsapi.com/svg/ar',
  },
  {
    value: 'de',
    text: 'Germany',
    flag: 'https://countryflagsapi.com/svg/de',
  },
  {
    value: 'en',
    text: 'United Kingdom',
    flag: 'https://countryflagsapi.com/svg/gb',
  },
  {
    value: 'es',
    text: 'Spain',
    flag: 'https://countryflagsapi.com/svg/es',
  },
  {
    value: 'fr',
    text: 'France',
    flag: 'https://countryflagsapi.com/svg/fr',
  },
  {
    value: 'he',
    text: 'Israel',
    flag: 'https://countryflagsapi.com/svg/il',
  },
  {
    value: 'it',
    text: 'Italy',
    flag: 'https://countryflagsapi.com/svg/it',
  },
  {
    value: 'nl',
    text: 'Netherlands',
    flag: 'https://countryflagsapi.com/svg/nl',
  },
  {
    value: 'no',
    text: 'Norway',
    flag: 'https://countryflagsapi.com/svg/no',
  },
  {
    value: 'pt',
    text: 'Portugal',
    flag: 'https://countryflagsapi.com/svg/pt',
  },
  {
    value: 'ru',
    text: 'Russian',
    flag: 'https://countryflagsapi.com/svg/ru',
  },
  {
    value: 'se',
    text: 'Sweden',
    flag: 'https://countryflagsapi.com/svg/se',
  },
  {
    value: 'zh',
    text: 'China',
    flag: 'https://countryflagsapi.com/svg/cn',
  },
];

const countryCodeToText = (countryCode) => {
  return languages.find((lang) => lang.value === countryCode).text;
};

const capitalizeFirstLetter = (string) => {
  const splittedString = string.slice(1);
  return `${string[0].toUpperCase()}${splittedString}`;
};

const Filters = () => {
  const { language, sortBy } = useSelector((state) => state.articles.filters); 
  const dispatch = useDispatch();
  return (
    <div className="filters-wrapper">
      <Dropdown currentValue={language ? countryCodeToText(language) : "All"} label="Language">
        {languages.map(({ text, flag, value }) =>  (
          <Dropdown.Item onClick={() => dispatch(setFilters({ language: value }))} key={value}>
            <img src={flag} alt={`${text} flag`} height="15" />
            {text}
          </Dropdown.Item>
        ))}
      </Dropdown>
      <Dropdown currentValue="Onet.pl" label="Sources">
        <Dropdown.Item>Source #1</Dropdown.Item>
        <Dropdown.Item>Source #2</Dropdown.Item>
        <Dropdown.Item>Source #3</Dropdown.Item>
      </Dropdown>
      <Dropdown currentValue={capitalizeFirstLetter(sortBy)} label="Sort by">
        <Dropdown.Item onClick={() => dispatch(setFilters({ sortBy: "relevancy" }))}>
          <FontAwesomeIcon icon={faArrowDownShortWide} />
          Relevancy
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setFilters({ sortBy: "popularity" }))}>
          <FontAwesomeIcon icon={faArrowDownShortWide} />
          Popularity
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setFilters({ sortBy: "publishedAt" }))}>
          <FontAwesomeIcon icon={faArrowDownShortWide} />
          Date
        </Dropdown.Item>
      </Dropdown>
      <DateSelect label="From date" onChange={(date) => dispatch(setFilters({ fromDate: date }))} />
      <DateSelect label="To date" onChange={(date) => dispatch(setFilters({ toDate: date }))} />
    </div>
  )
}

export default Filters;