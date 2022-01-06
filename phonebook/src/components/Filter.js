import React from 'react';

const Filter = ({ handleChangeSearch }) => {
  return (
    <div>
      <label htmlFor="site-search">filter shown with</label>
      <input
        type="search"
        id="site-search"
        name="search"
        aria-label="Search through site content"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default Filter;
