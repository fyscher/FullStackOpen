const Country = ({id, name, handleClick, c, toggle}) => 
{
    return ( 
        <li id={id}>
            {toggle[id]
            ?<div>
                <h3>Country Name: {c.name.common}</h3>
                <p>Capital City: {c.capital[0]}</p>
                <p>Total Area:   {c.area}</p>
                <p>Official Languages: </p>
                <ul>
                {Object.keys(c.languages).map((l) => {
                    console.log('l ',l)
                    return <li key={`l_${l}`}>{c.languages[l]}</li>})}
                </ul>
                
                {console.log(c.flag)}
                <h1>{c.flag}</h1>  
            </div>
            :name}
            <button id={id} onClick={handleClick}>Toggle Info</button>
        </li>
    )
}

export default Country;
