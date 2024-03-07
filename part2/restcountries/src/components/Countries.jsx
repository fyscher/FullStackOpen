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
        return <p>SUCCESSSSSS</p>
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