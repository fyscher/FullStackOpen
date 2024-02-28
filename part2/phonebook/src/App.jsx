import { useState, useEffect } from 'react'
import   axios                 from 'axios'
import   AddEntry              from './components/AddEntry.jsx'
import   Filter                from './components/filter.jsx'
import   Entries               from './components/entries.jsx'

const App = () => 
{
  const [newNumber, setNewNumber] = useState('');
  const [newName,     setNewName] = useState('');
  const [filter,       setFilter] = useState('');
  const [persons,     setPersons] = useState([]); 
  
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
      axios
      .post('http://localhost:3001/persons', nameObject)
      .then( res => {
        console.log(res)
        setPersons(persons.concat(nameObject))
        alert(`${nameObject.name} added!`)
        setNewName('')
        setNewNumber('')
        })
    }
        
  }
  
  useEffect(() =>
  {
    axios
      .get('http://localhost:3001/persons')
      .then( response =>{
        setPersons(response.data);
      })
  }, [])

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