import React from 'react'

const PersonDetails = (props) => {
    const {person, handlePersonDelete} = props

    return (
        <div>
          <span>{person.name} {person.number} </span>
          <button onClick={() => handlePersonDelete(person.id)}>delete</button>
        </div>
    )
}

export default PersonDetails
