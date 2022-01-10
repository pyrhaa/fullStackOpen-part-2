import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const CountryList = ({ search, country }) => {
  console.log(country);

  const filterCountries = country.filter(
    (el) => el.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <div>
      <h2>Azul</h2>
      <p>hey</p>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState([]);
  const [showList, setShowList] = useState(false);

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
