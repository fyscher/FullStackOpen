import './index.css'
import { useState, useEffect } from 'react'
import   Notification          from './components/notification.jsx'
import   AddEntry              from './components/AddEntry.jsx'
import   Filter                from './components/filter.jsx'
import   Entries               from './components/entries.jsx'
import   DelEntry              from './components/DelEntry.jsx'
import   personsService        from './services/persons.js'

const App = () => 
{
  const [newNumber,         setNewNumber] = useState('');
  const [newName,             setNewName] = useState('');
  const [filter,               setFilter] = useState('');
  const [persons,             setPersons] = useState([]); 
  const [statusMessage, setStatusMessage] = useState(null);
  const [errorStatus,     setErrorStatus] = useState('');

  const searchPersons = (persons, nameObject ) => persons.find(p => p.name.localeCompare(nameObject, 'en', {sensitivity: 'base'}) === 0)
  
  const showEntries = filter? persons.filter((p) => p.name.toLowerCase().match(filter.toLowerCase())): persons

  const notify = (label, message) =>
  {
    setErrorStatus(label);
    setStatusMessage(message);
    setTimeout(() => {setStatusMessage(null)}, 1000);
  }
  
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
            setPersons(persons.filter(p => p.id != entry.id))
            notify('success', `${res.name} was deleted.`)
            setNewName('')
          }
        ).catch(error => 
          {
            console.log(error)
            notify('error', `${entry.name} has already been deleted.`)
            setPersons(persons.filter(p => p.id != entry.id))
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
            notify('success', `${res.name} updated!`)
            setNewName('')
            setNewNumber('')
          }})
          .catch( error => 
          {
            console.log(error)
            notify('error', `${res.name} cannot be updated.`)
          }
        )
      }
    } else 
    {
      personsService
      .create(newObject)
      .then( res => 
        {
          console.log('res: ', res)
          setPersons(persons.concat(res))
          notify('success', `${res.name} has been added!`)
          setNewName('')
          setNewNumber('')
        }
      ).catch( error =>
        {
          console.log(error)
          notify('error', `${res.name} cannot be added.`)
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
      <Notification 
      message={statusMessage}
      errorStatus={errorStatus}
      />
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