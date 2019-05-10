import React from 'react'

export const formError = (msg) => {
    return(
        <div className="form-row">
                <div className="form-group col-md-12">
                    <label style={{color:"red"}} htmlFor="inputState">{msg}</label>
                </div>
        </div>
    )
}

export const labelError = () => {
    return(
        <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputState">Add Data Fool!</label>
                </div>
        </div>
    )
}