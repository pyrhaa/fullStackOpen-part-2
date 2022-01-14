import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState([]);
  const [show, setShow] = useState(false);

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
