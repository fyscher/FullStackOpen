import { useState, useEffect } from 'react'
import   axios                 from 'axios'
import   AddEntry              from './components/AddEntry.jsx'
import   Filter                from './components/filter.jsx'
import   Entries               from './components/entries.jsx'
import   DelEntry              from './components/DelEntry.jsx'

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
  };

  const baseURL = 'http://localhost:3001/persons'
  
  const handleNameChange   = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilter       = event => setFilter(event.target.value)
  
  const handleDelEntry     = event => 
  {
    event.preventDefault()
    const entry = searchPersons(persons, newName)
    if (entry)
    {
      axios
        .delete(`${baseURL}/${entry.id}`)
        .then( res =>
          {
            console.log('res: ', res)
            console.log('res.data: ', res.data)
            alert(`${newName} was deleted.`)
            const spliced = persons.splice(persons.indexOf(entry))
            setPersons(persons)
            setNewName('')
          }
        )
    } else 
    {
      alert(`Error: cannot delete. Ensure name matches entry exactly.`)
    }
  }

  const handleAddEntry     = event =>
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
      .post(baseURL, nameObject)
      .then( res => {
        console.log('res: ', res)
        console.log('res.data: ', res.data)
        setPersons(persons.concat(res.data))
        alert(`${res.data.name} added!`)
        setNewName('')
        setNewNumber('')
      })
    }
  }
  
  useEffect(() =>
  {
    axios
      .get(baseURL)
      .then( res =>{
        setPersons(res.data);
      })
  }, [])

  return ( 
    <div>
      <h2>Phonebook</h2>
      <AddEntry 
        newName={newName}
        newNumber={newNumber}
        handleAddEntry={handleAddEntry}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <DelEntry 
        handleDelEntry={handleDelEntry}

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