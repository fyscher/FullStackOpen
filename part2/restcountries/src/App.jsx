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

  const handleCard = event => 
  {
    event.preventDefault()
    console.log('clicked')
    // const langKeys = Object.keys(showCountries[0].languages)
    // return (
    //   // Capital city, area, languages spoken, flag
    //   <>
    //     <h2>Country Name: {showCountries[0].name.common}</h2>
    //     <p>Capital City: {showCountries[0].capital[0]}</p>
    //     <p>Total Area: {showCountries[0].area}</p>
    //     <p>Official Languages: </p>
    //     <ul>
    //       {langKeys.map((l) => {
    //           console.log('l ',l)
    //           return <li key={`l_${l}`}>{showCountries[0].languages[l]}</li>})}
    //     </ul>
        
    //     {console.log(showCountries[0].flag)}
    //     <h1>{showCountries[0].flag}</h1>
    //   </> 
    // )
  }

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
        search={search}
        handleCard={handleCard}
      />
    </>
  )
}

export default App;