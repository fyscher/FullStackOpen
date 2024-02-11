import { useState } from 'react'
import   AddEntry   from './components/addEntry.jsx'
import   Filter     from './components/filter.jsx'
import   Entries    from './components/entries.jsx'

const App = () => 
{
  const [newNumber, setNewNumber] = useState('');
  const [newName,     setNewName] = useState('');
  const [filter,       setFilter] = useState('');
  const [persons,     setPersons] = useState([
    { name: 'Arto Hellas',  number: '867-5309' , id: 1},
    { name: 'Marto Mellas', number: '123-4567' , id: 2},
    { name: 'Farto Fellas', number: '567-8954' , id: 3},
    { name: 'Garto Gellas', number: '426-5698' , id: 4},
    { name: 'Tarto Tellas', number: '741-8523' , id: 5},
  ]) 
  
  const searchPersons = (persons, nameObject ) => persons.find(p => p.name.localeCompare(nameObject, 'en', {sensitivity: 'base'}) === 0)
  
  const showEntries = filter? persons.filter((p) => p.name.toLowerCase().match(filter.toLowerCase())): persons
  
  const nameObject = { 
    name:   newName, 
    number: newNumber,
    id:     persons.length + 1
  };

  const handleNameChange   = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilter       = event => setFilter(event.target.value)
  const handleEntry        = event =>
  {
    event.preventDefault()
    if (searchPersons(persons, newName)) 
    {
      alert(`${newName} already exists`)
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
      <h2>Phonebook</h2>
      <AddEntry 
        newName={newName}
        newNumber={newNumber}
        handleEntry={handleEntry}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Filter
        showEntries={showEntries}
        filter={filter}
        handleFilter={handleFilter}
      />
      <Entries
        showEntries={showEntries}
      />
    </div>
  )
}

export default App