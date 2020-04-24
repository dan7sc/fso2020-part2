import React from 'react'

const SuccessNotification = (props) => {
    const {message} = props

    if (message === null) {
        return null
    }

    return (
        <div className='success'>
          {message}
        </div>
    )
}

export default SuccessNotification
