import React, { useState } from 'react'

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
          <div>
            filter shown with
            <input
              onChange={handleFilterChange}
            />
          </div>
          <h2>add a new</h2>
          <form onSubmit={addPerson}>
            <div>
              name: <input
                      value={newName}
                      onChange={handleNameChange}
                    />
            </div>
            <div>
              number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                      />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          <div>
            {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
          </div>
        </div>
    )
}

export default App
