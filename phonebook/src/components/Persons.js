import React from 'react';

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
