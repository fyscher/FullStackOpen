
const Entries = ({persons}) =>
{
  return(
    <ul>
      {persons.map((p) =>
      {
        return <Entry key={`entry_${p.name}`} 
                      name={p.name} 
                      number={p.number}/> 
      })}
    </ul>
  )
}

const Entry = (prop) => {return <li>{prop.name} - {prop.number}</li>}

export default Entries;