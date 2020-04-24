import React, { useState, useEffect } from 'react'
import personService from './services/person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ personsToShow, setPersonsToShow ] = useState(persons)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
                setPersonsToShow(initialPersons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const newContact = {
            name: newName,
            number: newNumber
        }
        if (persons.map(person => person.name === newContact.name).includes(true)) {
            setNewName('')
            setNewNumber('')
            return alert(`${newContact.name} is already added to phonebook`)
        }
        personService
            .create(newContact)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setPersonsToShow(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        const filter = event.target.value
        const personsToFilter = persons.filter(person => person.name.toLowerCase().includes(filter))
        setPersonsToShow(personsToFilter)
    }

    return (
        <div>
          <h2>Phonebook</h2>
          <Filter handleFilterChange={handleFilterChange} />
          <h3>add a new</h3>
          <PersonForm
            newName={newName}
            newNumber={newNumber}
            addPerson={addPerson}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
          />
          <h3>Numbers</h3>
          <Persons persons={personsToShow} />
        </div>
    )
}

export default App
