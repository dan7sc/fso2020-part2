import React from 'react'
import PersonDetails from './PersonDetails'

const Persons = (props) => {
    const {persons, handlePersonDelete} = props

    return (
        <div>
          {persons.map(person => <PersonDetails
                                   key={person.name}
                                   person={person}
                                   handlePersonDelete={handlePersonDelete}
                                 />)}
        </div>
    )
}

export default Persons
