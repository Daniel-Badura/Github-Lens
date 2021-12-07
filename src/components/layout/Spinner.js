import React from 'react'

function Spinner() {
    return (

        <div className="spinner-border" role="status" style={{
            margin: 'auto'
        }}>
            <span className="sr-only">Loading...</span>
        </div>

    )
}

export default Spinner
