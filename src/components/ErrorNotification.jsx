import React from 'react'

const ErrorNotification = (props) => {
    const {message} = props

    if (message === null) {
        return null
    }

    return (
        <div className='error'>
          {message}
        </div>
    )
}

export default ErrorNotification
