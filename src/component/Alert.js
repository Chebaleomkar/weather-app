import React from 'react'

export const Alert = (props) => {
    return (
        <>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
               {props.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </> 
    )
}
