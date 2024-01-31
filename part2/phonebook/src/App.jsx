import { useState } from 'react'
import   Numbers    from "./components/numbers.jsx"

const inPersons = (persons, nameObject) =>
{
  const stringNameArr = persons.map( p => JSON.stringify(p.name) )
  const stringObjectName = JSON.stringify(nameObject.name)
  console.log(stringNameArr)
  console.log(stringObjectName)
  return stringNameArr.includes(stringObjectName)
}

const App = () => 
{  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '867-5309' },
  ]) 
  
  const [newName,     setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)


  const addEntry = (event) =>
  {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber};

    console.log(persons.concat(nameObject))

    !inPersons(persons, nameObject)
    ? setPersons(persons.concat(nameObject))
    : alert(`${nameObject.name} already exists.`)

    setNewName('');
    setNewNumber('');
  }


  return (
    <div>
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
      <Numbers persons={persons}/>
    </div>
  )
}

export default App