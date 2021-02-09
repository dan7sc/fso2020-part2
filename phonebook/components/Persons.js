import React from 'react'
import PersonDetails from './PersonDetails'

const Persons = (props) => {
    const {persons} = props

    return (
        <div>
          {persons.map(person => <PersonDetails key={person.name} person={person} />)}
        </div>
    )
}

export default Persons
