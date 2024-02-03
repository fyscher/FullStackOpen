import { useState } from 'react'
import   Entries    from './components/entries.jsx'
import   Search     from './components/search.jsx'

const inPersons = (persons, nameObject, ) => {

  const person = persons.find(p => p.name.localeCompare(nameObject, 'en', {sensitivity: 'base'}) === 0)
  return person
}

const App = () => 
{  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '867-5309' },
    { name: 'Marto Mellas', number: '123-4567' },
    { name: 'Farto Fellas', number: '567-8954' },
    { name: 'Garto Gellas', number: '426-5698' },
    { name: 'Tarto Tellas', number: '741-8523' },
  ]) 
  
  const [newName,       setNewName] = useState('');
  const [newNumber,   setNewNumber] = useState('');
  
  
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)


  const addEntry = (event) =>
  {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber};
    console.log(inPersons(persons, nameObject))
    console.log(nameObject.name)
    // if (persons.name ===)
    // !inPersons(persons, nameObject)
    // ? setPersons(persons.concat(nameObject))
    // : alert(`${nameObject.name} already exists.`)

    // setNewName('');
    // setNewNumber('');
  }

  return (
    <div>
      <Search persons={persons} inPersons={inPersons}/>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Entries persons={persons}/>
    </div>
  )
}

export default App