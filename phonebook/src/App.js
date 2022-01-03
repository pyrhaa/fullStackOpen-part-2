import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '070809', id: 1 },
    { name: 'Azul Fella', number: '12345', id: 2 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addName = (e) => {
    e.preventDefault();
    const lastId = persons[persons.length - 1].id;
    const nameObject = { name: newName, number: newPhone, id: lastId + 1 };
    const filterName = persons.find(
      (el) => el.name.toLowerCase() === newName.toLowerCase()
    );

    if (filterName) {
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
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setNewPhone(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handleChangePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((el) => (
          <li key={el.id}>
            {el.name} {el.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
