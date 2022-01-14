import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryInfo = ({ arrayObject }) => {
  const [weatherInfo, setWeatherInfo] = useState();
  const theCountry = arrayObject[0];
  const countryLang = Object.values(theCountry.languages);
  const weatherApi = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${weatherApi}&query=${theCountry.name.common}`
      )
      .then((res) => {
        return setWeatherInfo(res.data);
      });
  }, []);

  if (weatherInfo !== undefined) {
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
        <h3>Weather in {theCountry.name.common}</h3>
        <p>temperature: {weatherInfo.current.temperature} Celsius</p>
        <img
          style={{ width: '50px' }}
          src={weatherInfo.current.weather_icons[0]}
        />
        <p>
          wind: {weatherInfo.current.wind_speed} mph direction{' '}
          {weatherInfo.current.wind_dir}
        </p>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
};

export default CountryInfo;
