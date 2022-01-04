import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');

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
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setNewPhone(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const displayNames = () => {
    const filterNames = persons.filter(
      (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return filterNames.map((el) => (
      <li key={el.id}>
        {el.name} {el.number}
      </li>
    ));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <label htmlFor="site-search">filter shown with</label>
        <input
          type="search"
          id="site-search"
          name="search"
          aria-label="Search through site content"
          onChange={handleChangeSearch}
        />
      </div>
      <h2>add a new</h2>
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
      <ul>{displayNames()}</ul>
    </div>
  );
};

export default App;
