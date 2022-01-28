import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');
  const [notif, setNotif] = useState(null);
  const [error, setError] = useState(false);

  //fetch data from db.json that is the persons list
  useEffect(() => {
    personService
      .getAll()
      .then((res) => {
        setPersons(res);
      })
      .catch((error) => console.log('Fail to fetch data from server', error));
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

        personService
          .update(id, changedNumber)
          .then((res) =>
            setPersons(
              persons
                .filter((pers) => pers.id !== id)
                .concat(res)
                .sort((a, b) => a.id - b.id)
            )
          )
          .catch((error) => {
            console.log('Fail to update', error.response.data);
            setError(true);
            setNotif(error.response.data.error);
            setTimeout(() => {
              setNotif(null);
              setError(false);
            }, 5000);
          });
        setNotif(
          `${changedNumber.name} changed his number for ${changedNumber.number}`
        );
        setTimeout(() => {
          setNotif(null);
        }, 5000);
      }
    } else if (
      nameObject === false ||
      nameObject.name === '' ||
      nameObject.number === ''
    ) {
      window.alert("You don't write a name and the phone number to submit");
    } else {
      personService
        .create(nameObject)
        .then((res) => {
          setPersons(persons.concat(res));
          setNewName('');
          setNewPhone('');
        })
        .catch((error) => {
          console.log('Fail to add', error.response.data);
          setError(true);
          setNotif(error.response.data.error);
          setTimeout(() => {
            setNotif(null);
            setError(false);
          }, 5000);
        });
      setNotif(`Added ${nameObject.name}`);
      setTimeout(() => {
        setNotif(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notif={notif} error={error} />
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
      <Persons
        persons={persons}
        search={search}
        setPersons={setPersons}
        setError={setError}
        setNotif={setNotif}
      />
    </div>
  );
};

export default App;
