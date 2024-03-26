const Country = ({id, name, info, show, handleClick}) => 
{
    return ( 
        <li id={id}>
            {show
                ?<div>
                    <h3>Country Name:{info.name.common}</h3>
                    <p>Capital City: {info.capital[0]}</p>
                    <p>Total Area:   {info.area}</p>
                    <p>Official Languages: </p>
                    <ul>
                    {Object.keys(info.languages).map((l) => {
                        console.log('l ',l)
                        return <li key={`l_${l}`}>{info.languages[l]}</li>})}
                    </ul>
                    
                    {console.log(info.flag)}
                    <h1>{info.flag}</h1>  
                </div>
                :name}
            <button id={id} onClick={handleClick}>Show</button>
        </li>
    )
}

export default Country;
