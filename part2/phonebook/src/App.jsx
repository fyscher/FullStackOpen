import { useState, useEffect } from 'react'
import   AddEntry              from './components/AddEntry.jsx'
import   Filter                from './components/filter.jsx'
import   Entries               from './components/entries.jsx'
import   DelEntry              from './components/DelEntry.jsx'
import   personsService        from './services/persons.js'

const App = () => 
{
  const [newNumber, setNewNumber] = useState('');
  const [newName,     setNewName] = useState('');
  const [filter,       setFilter] = useState('');
  const [persons,     setPersons] = useState([]); 
  
  const searchPersons = (persons, nameObject ) => persons.find(p => p.name.localeCompare(nameObject, 'en', {sensitivity: 'base'}) === 0)
  
  const showEntries = filter? persons.filter((p) => p.name.toLowerCase().match(filter.toLowerCase())): persons
  
  const newObject = { 
    name:   newName, 
    number: newNumber,
  };
  
  const handleNameChange   = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilter       = event => setFilter(event.target.value)
  
  const handleDelEntry     = event => 
  {
    event.preventDefault()
    const entry = searchPersons(persons, newName)
    if (entry)
    {
      personsService
        .remove(entry.id)
        .then( res =>
          {
            console.log('res: ', res)
            const spliced = persons.splice(persons.indexOf(entry), 1)
            setPersons(persons)
            alert(`${res.name} was deleted.`)
            setNewName('')
          }
        )
    } else 
    {
      alert(`Error: cannot delete. Ensure name matches entry exactly.`)
    }
  }

  const handleAddEntry = event =>
  {
    event.preventDefault()
    const entry = searchPersons(persons, newName)
    if (entry) 
    {
      if (confirm(`${newName} already exists! Would you like to update the number?`))
      {
        personsService
          .update(entry.id, newObject)
          .then(res => 
            {
              if (entry.id === res.id)
              {
                const index = persons.indexOf(entry)
                persons[index].number = res.number;
              }
              setNewName('')
              setNewNumber('')
            })
      }
    } else 
    {
      personsService
        .create(newObject)
        .then( res => 
          {
            console.log('res: ', res)
            setPersons(persons.concat(res))
            setNewName('')
            setNewNumber('')
            alert(`${res.name} added!`)
          }
        )
    }
  }
  
  useEffect(() =>
  {
    personsService
      .getAll()
      .then( res =>{
        setPersons(res);
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