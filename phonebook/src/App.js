import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 },
    { name: 'Azul Fella', id: 2 }
  ]);
  const [newName, setNewName] = useState('');

  const addName = (e) => {
    e.preventDefault();
    const lastId = persons[persons.length - 1].id;
    const nameObject = { name: newName, id: lastId + 1 };
    const filterName = persons.find(
      (el) => el.name.toLowerCase() === newName.toLowerCase()
    );

    if (filterName) {
      window.alert(`${newName} is already added to phonebook`);
    } else if (nameObject === false || nameObject.name === '') {
      window.alert("You don't write a name to submit");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
