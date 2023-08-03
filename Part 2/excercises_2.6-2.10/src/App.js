import React, { useState } from 'react';
import SearchFilter from './Components/searchFilter.jsx';
import PersonForm from './Components/PersonForm.jsx';
import PersonList from './Components/PersonList.jsx';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phoneNumber: '123-456-7890' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const addPerson = () => {
    if (newName.trim() !== '' && newPhoneNumber.trim() !== '') {
      const nameExists = persons.some(person => person.name === newName);

      if (nameExists) {
        alert(`${newName} is already in the phonebook.`);
      } else {
        const newPerson = {
          id: persons.length + 1,
          name: newName,
          phoneNumber: newPhoneNumber
        };

        setPersons([...persons, newPerson]);
        setNewName('');
        setNewPhoneNumber('');
      }
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchTerm={searchTerm} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        addPerson={addPerson}
      />
      <PersonList persons={filteredPersons} />
    </div>
  );
};

export default App;
