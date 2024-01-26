import { useState } from 'react'

const inPersons = (persons, nameObject) => {
    const stringPersons = persons.map(p => JSON.stringify(p))
    const stringNameObject = JSON.stringify(nameObject)
    // console.log(stringPersons.includes(stringNameObject))
    return stringPersons.includes(stringNameObject)
  }

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 

  const [newName, setNewName] = useState('')

  
  const addName = (event) =>
  {
    event.preventDefault()
    const nameObject = { name: newName }
    !inPersons(persons, nameObject)
      ? setPersons(persons.concat(nameObject))
      : alert(`${nameObject.name} already exists.`)
    setNewName('');
  }

  const handleNameChange = (event) =>
  {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...b
    </div>
  )
}

export default App