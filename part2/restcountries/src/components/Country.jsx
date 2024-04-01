const Country = ({id, name, handleClick, c, toggle, weather}) => 
{   
    return ( 
        <li id={id}>
            {toggle[id]
            ?<div>
                <h3>Country Name: {c.name.common}</h3>
                <p>Capital City: {c.capital[0]}</p>
                <p>Total Area:   {c.area}m²</p>
                <p>Official Languages: </p>
                <ul>{Object.keys(c.languages).map( l => <li key={`l_${l}`}>{c.languages[l]}</li>)}</ul>
                <h1>{c.flag}</h1>  
                {weather[id]
                    ?<>
                        <h3>Weather in {c.capital[0]}</h3>
                        <img src={`https://openweathermap.org/img/wn/${weather[id].weather[0].icon}@2x.png`}/>
                        <p>Current Temp: {weather[id].main.temp}°C</p>
                        <p>Feels Like: {weather[id].main.feels_like}°C</p>
                        <p>Daily High: {weather[id].main.temp_max}°C</p>
                        <p>Daily Low: {weather[id].main.temp_min}°C</p>
                        <p>Humidity: {weather[id].main.humidity}%</p>
                        <p>Windspeed: {weather[id].wind.speed}km/h</p>
                        <p>Direction: {weather[id].wind.deg}°</p>
                    </>
                    :null}
            </div>
            :name}
            <button id={id} value={c.capital[0]} onClick={handleClick}>Toggle Info</button>
        </li>
    )
}

export default Country;
