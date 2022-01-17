import React from 'react';
import personService from '../services/persons';

// filter array content based on search criteria case sensitive and indexof return the first index at which a given element can be found in the array, or -1 if it is not present.
const Persons = ({ persons, search, setPersons }) => {
  const filterNames = persons.filter(
    (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const deleteName = (e, el) => {
    e.preventDefault();
    if (window.confirm(`Delete ${el.name}`)) {
      personService
        .deletePost(el.id)
        .then(() =>
          setPersons(
            persons.filter((pers) => pers.id !== Number(e.target.value))
          )
        )
        .catch((error) => console.log('Fail to delete'));
    }
  };

  return (
    <ul>
      {filterNames.map((el) => (
        <li key={el.id}>
          {el.name} {el.number}
          <button value={el.id} onClick={(e) => deleteName(e, el)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
