import { useState } from 'react'
import   Entries    from './components/entries.jsx'
import   Search     from './components/search.jsx'

const searchPersons = (persons, nameObject, ) => persons.find(p => p.name.localeCompare(nameObject, 'en', {sensitivity: 'base'}) === 0)

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
    const person = searchPersons(persons, nameObject.name)

    if (person) 
    {
      alert(`${person.name} already exists`)
      setNewName('')
      setNewNumber('')
    } else 
    {
      setPersons(persons.concat(nameObject))
      alert(`${nameObject.name} added!`)
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <Search persons={persons} inPersons={searchPersons}/>
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