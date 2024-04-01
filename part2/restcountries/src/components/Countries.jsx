import Country from "./Country";

const Countries = ({ showCountries, search, toggle, handleClick, weather }) =>
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

    else
    {
        return (
            <ul>
                {showCountries.map( c =>
                    <Country
                        id={c.cca3}
                        key={c.cca3}
                        name={c.name.common}
                        handleClick={handleClick}
                        c={c}
                        toggle={toggle}
                        weather={weather}
                    />
                )}
            </ul>
        )
    }
}

export default Countries;