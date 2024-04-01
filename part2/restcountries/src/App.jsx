import { useState, useEffect } from 'react'
import   countriesService      from './services/restcountries.js'
import   Search                from './components/Search.jsx'
import   Countries             from './components/Countries.jsx'
import   openweather           from './services/openweather.js'

const App = () =>
{
  const [countries, setCountries] = useState([]);
  const [search,       setSearch] = useState('');
  const [toggle,       setToggle] = useState({});
  const [weather,     setWeather] = useState({});

  const showCountries = search? countries.filter(c => c.name.common.toLowerCase().match(search.toLowerCase())): countries;
  
  const handleSearch = event => setSearch(event.target.value);
  const handleClick  = event => 
  {
    handleToggle(event.target.id);
    handleWeather(event.target.id, event.target.value);
  }

  const handleToggle = id => 
  {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  
  const handleWeather = (id, city) =>
  {
    openweather
      .getWeather(city)
      .then(res => 
        {
          setWeather({
            ...weather,
            [id]: res
          });
        }
      )
  }
  
  useEffect(() =>
  {
    countriesService
      .getAll()
      .then( res => setCountries(res))
  }, [])


  return(
    <>
      <Search 
        search={search} 
        handleSearch={handleSearch}
      />
      <Countries
        showCountries={showCountries}
        search={search}
        handleClick={handleClick}
        toggle={toggle}
        weather={weather}
      />
    </>
  )
}

export default App;
