import Country from "./Country";

const Countries = ({ showCountries, search }) =>
{
    if (!search)
    {
        return null;
    }

    if (showCountries.length > 10)
    {
        return <p>Too many entries, you GOTTA BE MORE SPECIFIC.</p>
    }
    
    if (showCountries.length === 0)
    {
        return<p>OH NOOOO THERE'S NOTHING HERE.</p>
    }

    if (showCountries.length === 1)
    {
        const langKeys = Object.keys(showCountries[0].languages)
        return (
            // Capital city, area, languages spoken, flag
            <>
                <p>Capital City: {showCountries[0].capital[0]}</p>
                <p>Total Area: {showCountries[0].area}</p>
                <p>Official Languages: </p>
                <ul>
                    {langKeys.map((l) => {
                        console.log('l ',l)
                        return <li>{showCountries[0].languages[l]}</li>})}
                </ul>
                {console.log(showCountries[0].flag)}
                <h1>{showCountries[0].flag}</h1>
            </> 
        )
    }

    if (showCountries.length < 10)
    {
        return (
            <ul>
                {showCountries.map( c =>
                    <Country
                        key={`C_${c.name.common}`}
                        name={c.name.common}
                    />
                )}
            </ul>
        )
    }
}

export default Countries;