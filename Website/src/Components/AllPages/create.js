import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class Create extends Component {

    constructor() {
        super()
        this.createIcon = <FontAwesomeIcon icon={faPlus} transform="right-5"/>
        this.trashIcon = <FontAwesomeIcon icon={faTrashAlt} transform="right-5"/>
    }

    render() {
        return(
            <div className="row justify-content-center mt-3">
                <div className="col d-flex justify-content-end">
                    <button type="Log In" style={{marginBottom:"10px"}} className="btn btn-primary">Delete
                        <span className="mr-1" aria-hidden="true">{this.trashIcon}</span>
                    </button>
                </div>        
                <div className="flex-col d-flex justify-content-end mr-3">
                    <button type="Log In" style={{marginBottom:"10px"}} className="btn btn-primary">Create
                        <span className="mr-1" aria-hidden="true">{this.createIcon}</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Create