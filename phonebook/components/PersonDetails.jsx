import React from 'react'

const PersonDetails = (props) => {
    const {person} = props

    return (
        <div>{person.name} {person.number}</div>
    )
}

export default PersonDetails
