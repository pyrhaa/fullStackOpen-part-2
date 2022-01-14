import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryInfo = ({ arrayObject }) => {
  const [weatherInfo, setWeatherInfo] = useState();
  const theCountry = arrayObject[0];
  const countryLang = Object.values(theCountry.languages);

  useEffect(() => {
    const weatherApi = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${theCountry.name.common}&appid=${weatherApi}`
      )
      .then((res) => {
        // return setWeatherInfo(res.data);
        console.log(res);
      });
  }, []);

  // console.log(weatherInfo);

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
