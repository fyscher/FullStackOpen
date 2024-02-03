import { useState } from "react";
    

const Search = ({persons, inPersons}) =>
{
    const [searchName, setSearchName] = useState('');
    const [result,         setResult] = useState('');
    
    const handleSearchField = event => setSearchName(event.target.value)
    
    //Submit search
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        console.log('persons: ', persons)
        console.log('searchName: ', searchName)
        console.log('inPersons:', inPersons(persons, searchName))
        const person = inPersons(persons, searchName)
        console.log(result.number)
        if (!person)
        {   
            alert(`${searchName} not found`)
            setSearchName('')
        }
        setResult(person);
        setSearchName('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <h3>Search</h3>
                    <div>
                    Name: <input
                        value={searchName}
                        onChange={handleSearchField} />
                    </div>
                <button type="submit">Search</button>
            </form>
            <h3>Result: {result.name} = {result.number}</h3>
        </>
    )
}

export default Search;