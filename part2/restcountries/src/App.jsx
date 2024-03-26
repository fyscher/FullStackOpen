import { useState, useEffect } from 'react'
import   countriesService      from './services/restcountries.js'
import   Search                from './components/Search.jsx'
import   Countries             from './components/Countries.jsx'

const App = () =>
{
  const [countries, setCountries] = useState([]);
  const [search,       setSearch] = useState('');
  const [show,           setShow] = useState(false);
  const [info,           setInfo] = useState(null);

  const showCountries = search? countries.filter(c => c.name.common.toLowerCase().match(search.toLowerCase())): countries
  
  const handleSearch = event => setSearch(event.target.value);
  // const result = showCountries.find(c => c.cca3 === id.split('_')[1])
  
  const handleClick = event => 
  {
    setShow(!show)
    setInfo(showCountries.find(c => c.cca3 === event.target.id.split('_')[1]))
    console.log('event target id ', event.target.id)
    console.log('getElementByID ', document.getElementById(event.target.id))
    console.log('showcountries', showCountries)
    console.log('split( _ )[1] ', event.target.id.split('_')[1])
    console.log('find', showCountries.find(c => c.cca3 === event.target.id.split('_')[1]))
    // console.log(result)
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
        show={show}
        info={info}
        handleClick={handleClick}
      />
    </>
  )
}

export default App;