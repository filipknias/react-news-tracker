import React from 'react';
import "./FiltersWrapper.css";
import Dropdown from '../Dropdown/Dropdown';

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

const FiltersWrapper = () => {
  return (
    <div className="filters-wrapper">
      <Dropdown currentValue="Germany" label="Language">
        {languages.map(({ text, flag, value }) =>  (
          <Dropdown.Item onClick={() => console.log(value)} key={value}>
            <img src={flag} alt={`${text} flag`} height="15" />
            {text}
          </Dropdown.Item>
        ))}
      </Dropdown>
      <div>
        <h2 className="filter-label">From date</h2>
        <input type="date" className="custom-date-input" />
      </div>
      <div>
        <h2 className="filter-label">To date</h2>
        <input type="date" className="custom-date-input" />
      </div>
    </div>
  )
}

export default FiltersWrapper;