import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const CountryList = ({ search, country }) => {
  const filterCountries = country.filter(
    (el) => el.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  console.log(filterCountries);

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

const CountryInfo = ({ search, country, filterCountries }) => {
  return <p>Azul</p>;
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
      <CountryList search={search} country={country} />
    </div>
  );
};

export default App;
