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

    const existPersonName = (name) => persons.map(person => person.name === name).includes(true)

    const existPersonNumber = (number) => persons.map(person => person.number === number).includes(true)

    const getPersonId = (name) => persons.filter(person => person.name === name)[0].id

    const updatePerson = (newContact) => {
        const id = getPersonId(newContact.name)
        personService
            .update(id, newContact)
            .then(returnedPerson => {
                const updatedList = persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson)
                setPersons(updatedList)
                setPersonsToShow(updatedList)
                setNewName('')
                setNewNumber('')
            })
    }

    const createPerson = (newContact) => {
        personService
            .create(newContact)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setPersonsToShow(persons.concat(returnedPerson))
            })
        setNewName('')
        setNewNumber('')
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newContact = {
            name: newName,
            number: newNumber
        }
        if (existPersonName(newContact.name)) {
            const alertMessage = `${newContact.name} is already added to phonebook`
            const confirmMessage = `${newContact.name} is already added to phonebook, replace the old number with a new one?`
            if (existPersonNumber(newContact.number)) {
                return alert(alertMessage)
            } else {
                if (window.confirm(confirmMessage)) return updatePerson(newContact)
            }
        }
        createPerson(newContact)
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

    const handlePersonDelete = (id) => {
        const personToDelete = persons.filter(person => person.id === id)[0]
        if (window.confirm(`Delete ${personToDelete.name}?`)) {
            personService
                .deleteById(id)
            const newPersonsList = persons.filter(person => person.id !== id)
            setPersons(newPersonsList)
            setPersonsToShow(newPersonsList)
        }
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
          <Persons
            persons={personsToShow}
            handlePersonDelete={handlePersonDelete}
          />
        </div>
    )
}

export default App
