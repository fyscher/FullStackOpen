import Country from "./Country";

const Countries = ({ countries }) =>
{
    return ( 
        <ul>
            {countries.map( c =>
                <Country
                    key={`C_${c.name.common}`}
                    name={c.name.common}
                />
            )}
        </ul>
    )
}

export default Countries;