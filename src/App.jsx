import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const addContact = (event) => {
        event.preventDefault()
        const newContact = {
            name: newName
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
          <form onSubmit={addContact}>
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
