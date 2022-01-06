import React from 'react';

// filter array content based on search criteria case sensitive and indexof return the first index at which a given element can be found in the array, or -1 if it is not present.
const Persons = ({ persons, search }) => {
  const filterNames = persons.filter(
    (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  return (
    <ul>
      {filterNames.map((el) => (
        <li key={el.id}>
          {el.name} {el.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
