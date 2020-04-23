import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ personsToShow, setPersonsToShow ] = useState(persons)

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
        setPersons(persons.concat(newContact))
        setPersonsToShow(persons.concat(newContact))
        setNewName('')
        setNewNumber('')
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
          <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App
