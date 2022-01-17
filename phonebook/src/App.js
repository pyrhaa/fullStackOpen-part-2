import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');

  //fetch data from db.json that is the persons list
  useEffect(() => {
    personService.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);

  //function add a person from the form when you submit, message to alert if the field is not well write and reinitialize the form when submitting.
  const addName = (e) => {
    e.preventDefault();
    const nameObject = { name: newName, number: newPhone };
    const findName = persons.find(
      (el) => el.name.toLowerCase() === newName.toLowerCase()
    );

    if (findName) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with this one ?`
        )
      ) {
        const id = findName.id;
        const changedNumber = { ...findName, number: newPhone };

        personService.update(id, changedNumber).then((res) =>
          setPersons(
            persons
              .filter((pers) => pers.id !== id)
              .concat(res.data)
              .sort((a, b) => a.id - b.id)
          )
        );
      }
    } else if (
      nameObject === false ||
      nameObject.name === '' ||
      nameObject.number === ''
    ) {
      window.alert("You don't write a name and the phone number to submit");
    } else {
      personService.create(nameObject).then((res) => {
        setPersons(persons.concat(res.data));
        setNewName('');
        setNewPhone('');
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeSearch={(e) => setSearch(e.target.value.trim())} />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        newPhone={newPhone}
        handleChangeName={(e) => setNewName(e.target.value)}
        handleChangePhone={(e) => setNewPhone(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} setPersons={setPersons} />
    </div>
  );
};

export default App;
