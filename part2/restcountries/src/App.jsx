import { useState, useEffect } from 'react'
import   countriesService      from './services/restcountries.js'
import   Search                from './components/Search.jsx'
import   Countries             from './components/Countries.jsx'

const App = () =>
{
  const [countries, setCountries] = useState([]);
  const [search,       setSearch] = useState('');

  const handleSearch = event => setSearch(event.target.value);

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
        countries={countries}
      />
    </>
  )
}

export default App;