import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    axios.get('http://localhost:3001/persons').then((res) => {
      setPersons(res.data);
    });
  }, []);

  //function add a person from the form when you submit, message to alert if the field is not well write and reinitialize the form when submitting.
  const addName = (e) => {
    e.preventDefault();
    const lastId = persons[persons.length - 1].id;
    const nameObject = { name: newName, number: newPhone, id: lastId + 1 };
    const findName = persons.find(
      (el) => el.name.toLowerCase() === newName.toLowerCase()
    );

    if (findName) {
      window.alert(`${newName} is already added to phonebook`);
    } else if (
      nameObject === false ||
      nameObject.name === '' ||
      nameObject.number === ''
    ) {
      window.alert("You don't write a name and the phone number to submit");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewPhone('');
    }

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then((res) => console.log(res));
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
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
