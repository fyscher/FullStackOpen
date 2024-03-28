import { useState, useEffect } from 'react'
import   countriesService      from './services/restcountries.js'
import   Search                from './components/Search.jsx'
import   Countries             from './components/Countries.jsx'

const App = () =>
{
  const [countries, setCountries] = useState([]);
  const [search,       setSearch] = useState('');
  const [toggle,       setToggle] = useState({});

  const showCountries = search? countries.filter(c => c.name.common.toLowerCase().match(search.toLowerCase())): countries
  
  const handleSearch = event => setSearch(event.target.value);
  const handleClick  = event => handleToggle(event.target.id);

  const handleToggle = id => {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
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
      />
    </>
  )
}

export default App;