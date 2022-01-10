import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const App = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <Filter handleChangeSearch={(e) => setSearch(e.target.value.trim())} />
    </div>
  );
};

export default App;
