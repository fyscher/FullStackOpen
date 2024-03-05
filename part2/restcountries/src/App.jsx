import { useState, useEffect } from 'react'
import   countriesService      from './services/restcountries.js'
import   Search                from './components/Search.jsx'
import   Countries             from './components/Countries.jsx'

const App = () =>
{
  const [countries,       setCountries] = useState([]);
  const [search,             setSearch] = useState('');

  const showCountries = search? countries.filter(c => c.name.common.toLowerCase().match(search.toLowerCase())): countries

  const handleSearch = event => setSearch(event.target.value);

  useEffect(() =>
  {
    countriesService
      .getAll()
      .then( res => setCountries(res))
  }, [])

  console.log('countries: ', countries)
  console.log('showCountries: ', showCountries)
  return(
    <>
      <Search 
        search={search} 
        handleSearch={handleSearch}
      />
      <Countries
        showCountries={showCountries}
      />
    </>
  )
}

export default App;