import React, { useState } from 'react';
import CountryInfo from './CountryInfo';

const CountryList = ({ search, country }) => {
  const [show, setShow] = useState(true);
  const filterCountries = country.filter(
    (el) => el.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  if (filterCountries.length > 10 && search.length > 0) {
    return <p>Be more specific, please, too many matches.</p>;
  } else if (search.length === 0 && filterCountries.length > 10) {
    return <p>Where we going today ?</p>;
  } else if (filterCountries.length === 10 || filterCountries.length !== 1) {
    if (show === true) {
      return (
        <ul>
          {filterCountries.map((el) => {
            const id = el.ccn3;
            return (
              <li key={parseInt(id)}>
                {el.name.common}
                <button
                  onClick={() => {
                    setShow(false);
                  }}>
                  show
                </button>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <h1>hey</h1>;
    }

    // <ul>
    //   {filterCountries.map((el) => {
    //     const id = el.ccn3;
    //     return (
    //       <li key={parseInt(id)}>
    //         {el.name.common}
    //         <button
    //           onClick={() => {
    //             return <p>hey</p>;
    //           }}>
    //           show
    //         </button>
    //       </li>
    //     );
    //   })}
    // </ul>
  } else if (filterCountries.length === 1) {
    return <CountryInfo arrayObject={filterCountries} />;
  } else {
    return <p>No matching</p>;
  }
};

export default CountryList;
