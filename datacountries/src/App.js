import React, { useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const App = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Filter handleChangeSearch={(e) => setSearch(e.target.value.trim())} />
    </div>
  );
};

export default App;
