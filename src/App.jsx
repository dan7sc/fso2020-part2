import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = (props) => {
    const {countries} = props

    return (
        countries.map(country => <div key={country.name}>{country.name}</div>)
    )
}

const CountryDetails = (props) => {
    const {country} = props

    return (
        <div>
          <h1>{country.name}</h1>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
          <h2>languages</h2>
          <ul>
            {country.languages.map(language => {
                return <li key={language.name}>{language.name}</li>})
            }
          </ul>
          <img src={country.flag} height='150px' width='150px'/>
        </div>
    )
}

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ filtered, setFiltered ] = useState([])

    useEffect(() => {
        const receivedCountries = []
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                response.data.forEach(country => {
                    receivedCountries.push(country)
                })
            })
        setCountries(receivedCountries)
        setFiltered(receivedCountries)
    }, [])

    const handleFilterChange = (event) => {
        const filter = event.target.value
        const filtered = countries.filter(country => country.name.toLowerCase().includes(filter))
        setFiltered(filtered)
    }

    return (
        <div>
          <input onChange={handleFilterChange} />
          <div>
            {filtered.length > 10 ?
             'Too many matches, specify another filter' :
             filtered.length > 1 ?
             <Countries countries={filtered} /> :
             filtered.map(country => {
                 return <CountryDetails key={country.name} country={country} />
             })
            }
          </div>
        </div>
    )
}

export default App
