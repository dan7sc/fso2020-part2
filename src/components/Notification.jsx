import React from 'react'

const Notification = (props) => {
    const {message} = props

    if (message === null) {
        return null
    }

    return (
        <div className='confirm'>
          {message}
        </div>
    )
}

export default Notification
