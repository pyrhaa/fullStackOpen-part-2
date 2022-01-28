import React from 'react';
import personService from '../services/persons';

// filter array content based on search criteria case sensitive and indexof return the first index at which a given element can be found in the array, or -1 if it is not present.
const Persons = ({ persons, search, setPersons, setError, setNotif }) => {
  const filterNames = persons.filter(
    (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const deleteName = (e, el) => {
    e.preventDefault();
    const id = el.id;
    const name = el.name;
    if (window.confirm(`Delete ${name}`)) {
      personService
        .deletePost(id)
        .then((res) => {
          setPersons(persons.filter((pers) => pers.id !== id));
        })
        .catch((error) => {
          console.log('Fail to delete', error);
          setError(true);
          setNotif(
            `Information of ${name} has already been removed from server !`
          );
          setTimeout(() => {
            setError(false);
            setNotif(null);
          }, 5000);
        });
      setNotif(`${name} is deleted`);
      setTimeout(() => {
        setNotif(null);
      }, 5000);
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
