
const Numbers = ({persons}) =>
{
  return(
    <ul>
      {persons.map((p) =>
      {
        return <Entry key={`entry ${p.name}`} name={p.name} number={p.number}/> 
      })}
    </ul>
  )
}

const Entry = (prop) => {return <li>{prop.name} - {prop.number}</li>}

export default Numbers;