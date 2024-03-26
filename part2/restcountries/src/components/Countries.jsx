import Country from "./Country";

const Countries = ({ showCountries, search, show, info, handleClick }) =>
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
        console.log('showCountries', showCountries)
        return (
            <ul>
                {showCountries.map( c =>
                    <Country
                        id={`id_${c.cca3}`}
                        key={`k_${c.cca3}`}
                        name={c.name.common}
                        show={show}
                        info={info}
                        handleClick={handleClick}
                    />
                )}
            </ul>
        )
    }
}

export default Countries;