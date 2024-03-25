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
    const result = showCountries.find(c => c.cca3 === event.target.id.split('_')[1])

    console.log('event target id ', event.target.id)
    console.log('getElementByID ', document.getElementById(event.target.id))
    console.log('showcountries', showCountries)
    console.log('split( _ )[1] ', event.target.id.split('_')[1])
    console.log('find', showCountries.find(c => c.cca3 === event.target.id.split('_')[1]))

    return (
      <div id={event.target.id}>
        <h3>Country Name: {result.name.common}</h3>
        <p>Capital City: {result.capital[0]}</p>
        <p>Total Area:   {result.area}</p>
        <p>Official Languages: </p>
        <ul>
          {Object.keys(result.languages).map((l) => {
              console.log('l ',l)
              return <li key={`l_${l}`}>{result.languages[l]}</li>})}
        </ul>
          
        {console.log(result.flag)}
        <h1>{result.flag}</h1>  
      </div>
    )
      
      // setCard(
      //   // Capital city, area, languages spoken, flag
      //   <>
      //     <h3>Country Name: {showCountries[0].name.common}</h3>
      //     <p>Capital City: {showCountries[0].capital[0]}</p>
      //     <p>Total Area: {showCountries[0].area}</p>
      //     <p>Official Languages: </p>
      //     <ul>
      //       {Object.keys(showCountries[0].languages).map((l) => {
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