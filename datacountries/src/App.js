import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const CountryList = ({ search, country }) => {
  const filterCountries = country.filter(
    (el) => el.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  if (filterCountries.length > 10 && search.length > 0) {
    return <p>Be more specific, please, too many matches.</p>;
  } else if (search.length === 0 && filterCountries.length > 10) {
    return <p>Where we going today ?</p>;
  } else if (filterCountries.length === 10 || filterCountries.length !== 1) {
    return (
      <ul>
        {filterCountries.map((el) => {
          const id = el.ccn3;
          return <li key={parseInt(id)}>{el.name.common}</li>;
        })}
      </ul>
    );
  } else if (filterCountries.length === 1) {
    return <CountryInfo filterCountries={filterCountries} />;
  } else {
    return <p>No matching</p>;
  }
};

const CountryInfo = ({ filterCountries }) => {
  const theCountry = filterCountries[0];
  const countryLang = Object.values(theCountry.languages);
  console.log(theCountry);
  return (
    <div>
      <h1>{theCountry.name.common}</h1>
      <p>capital {theCountry.capital}</p>
      <p>population {theCountry.population}</p>
      <h3>languages</h3>
      <ul>
        {countryLang.map((el) => {
          return <li key={Math.random()}>{el}</li>;
        })}
      </ul>
      <img style={{ width: '100px' }} src={theCountry.flags.png} />
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      return setCountry(res.data);
    });
  }, []);

  return (
    <div>
      <Filter handleChangeSearch={(e) => setSearch(e.target.value.trim())} />
      {country.length > 0 && <CountryList country={country} search={search} />}
    </div>
  );
};

export default App;
