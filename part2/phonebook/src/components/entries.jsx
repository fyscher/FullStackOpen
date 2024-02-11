import Entry from './entry.jsx'

const Entries = ({ showEntries }) =>
{
  return (
    <>
      <h3>Entries:</h3>        
      <ul>
        {showEntries.map(person => 
          <Entry 
            key={`E_${person.id}`} 
            name={person.name} 
            number={person.number} />)}
      </ul>
    </>
  )
}

export default Entries;