import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const CountryList = ({ search, display, country }) => {
  return (
    <div>
      <h2>Azul</h2>
      <p>{country}</p>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [display, setDisplay] = useState();

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      return setCountry(res.data[0].name.common);
    });
  }, []);

  return (
    <div>
      <Filter handleChangeSearch={(e) => setSearch(e.target.value.trim())} />
      <CountryList search={search} display={display} country={country} />
    </div>
  );
};

export default App;
