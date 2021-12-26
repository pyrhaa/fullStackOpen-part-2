import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Dihya Chawya' }
  ]);
  const [newName, setNewName] = useState('');
  console.log(persons);
  console.log('newName is:' + newName);

  const addName = (e) => {
    e.preventDefault();
    console.log('button clicked', e.target);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
      <div>debug: {newName}</div>
      <ul>
        {persons.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
