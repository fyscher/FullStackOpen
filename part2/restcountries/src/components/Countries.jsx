import Country from "./Country";

const Countries = ({ showCountries }) =>
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

export default Countries;