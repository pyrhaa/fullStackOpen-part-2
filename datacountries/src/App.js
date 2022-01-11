import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const CountryList = ({ search, country }) => {
  const filterCountries = country.filter(
    (el) => el.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  console.log(country);

  if (filterCountries.length > 10 && search.length > 0) {
    return <p>Be more specific, please, too many matches.</p>;
  } else if (search.length === 0 && filterCountries.length > 10) {
    return <p>Where we going today ?</p>;
  } else if (filterCountries.length === 10) {
    return (
      <ul>
        {filterCountries.map((el) => {
          const id = el.ccn3;
          return <li key={parseInt(id)}>{el.name.common}</li>;
        })}
      </ul>
    );
  } else {
    return (
      <CountryInfo
        search={search}
        country={country}
        filterCountries={filterCountries}
      />
    );
  }
};

const CountryInfo = ({ country, search, filterCountries }) => {
  const countryLang = Object.values(filterCountries[0].languages);
  console.log(countryLang);
  return (
    <div>
      {/* <h1>{pays.name.common}</h1>
      <p>capital {pays.capital}</p>
      <p>population {pays.population}</p> */}
      <h3>languages</h3>
      {/* <ul>
        {paysLang.map((el, i) => {
          return <li key={el[i]}>{el}</li>;
        })}
      </ul>
      <img style={{ width: '100px' }} src={pays.flags.png} /> */}
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
