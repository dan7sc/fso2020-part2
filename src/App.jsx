import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const newContact = {
            name: newName
        }
        if (persons.map(person => person.name === newContact.name).includes(true)) {
            setNewName('')
            return alert(`${newContact.name} is already added to phonebook`)
        }
        setPersons(persons.concat(newContact))
        setNewName('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={addPerson}>
            <div>
              name: <input
                      value={newName}
                      onChange={handleNameChange}
                    />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          <div>
            {persons.map(person => <div key={person.name}>{person.name}</div>)}
          </div>
        </div>
    )
}

export default App
