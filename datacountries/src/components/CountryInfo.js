import React from 'react';

const CountryInfo = ({ arrayObject }) => {
  const theCountry = arrayObject[0];
  const countryLang = Object.values(theCountry.languages);

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

export default CountryInfo;
