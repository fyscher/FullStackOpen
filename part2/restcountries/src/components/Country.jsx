const Country = ({id, name, handleClick, c, toggle, weather}) => 
{
    return ( 
        <li id={id}>
            {toggle[id]
            ?<div>
                <h3>Country Name: {c.name.common}</h3>
                <p>Capital City: {c.capital[0]}</p>
                <p>Total Area:   {c.area}</p>
                <p>Official Languages: </p>
                <ul>{Object.keys(c.languages).map((l) => <li key={`l_${l}`}>{c.languages[l]}</li>)}</ul>
                <h1>{c.flag}</h1>  
                {weather[id]
                    ?<>
                        <h3>Weather in {c.capital[0]}</h3>
                        <p>Current Temp: {weather[id].main.temp} celsius</p>
                        <p>Feels Like: {weather[id].main.feels_like} celsius</p>
                        <p>Daily High: {weather[id].main.temp_max} celsius</p>
                        <p>Daily Low: {weather[id].main.temp_min} celsius</p>
                        <p>Humidity: {weather[id].main.humidity}%</p>
                        <p>Wind</p>
                        <p>Degrees: {weather[id].wind.deg}</p>
                        <p>Speed: {weather[id].wind.speed}</p>
                    </>
                    :null}
            </div>
            :name}
            <button id={id} value={c.capital[0]} onClick={handleClick}>Toggle Info</button>
        </li>
    )
}

export default Country;
