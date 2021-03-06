import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class Create extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.createDelete = this.createDelete.bind(this)
        
        this.createIcon = <FontAwesomeIcon icon={faPlus} transform="right-5"/>
        this.trashIcon = <FontAwesomeIcon icon={faTrashAlt} transform="right-5"/>
    }

    handleClick(event){
        const value = event.target.value
        this.props.action(value)
    }

    handleDelete(event){

        if(this.props.delete.length > 0) {
            let obj = this.createDelete(this.props.delete)

            this.props.sendAndFetch(obj).then( data => {
                if(data.success === 'true') {
                    console.log('success')
                    this.props.updateOccurred()
                } else {
                    console.log('NOOOOOOOOOOOOOOOOOOO')
                }
            })
        }
    }

    createDelete(dataArray) {
        console.log(this.props.deleteTable)
        let deleteObj = {
            table: this.props.deleteTable,
            action: 'delete',
            deleteId: this.props.deleteId,           
            dataArray
        }
        return deleteObj
    }

    /**
     * When given an array of City, Address, and Employee objects, this function will add the objects to the database.
     * It will throw an error if part of the query could not be completed
     * @param {An array of items to delete} objArray 
     */
    sendAndFetch(objArray) {
        return fetch('/database/employee/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    render() {
        return(
            <div className="row justify-content-center mt-3">  
                <div className="col d-flex justify-content-end">
                    <button type="Log In" style={{marginBottom:"10px"}} onClick={this.handleDelete} className="btn btn-primary">Delete
                        <span className="mr-1" aria-hidden="true">{this.trashIcon}</span>
                    </button>
                </div>    
                <div className="flex-col d-flex justify-content-end mr-3">
                    <button type="Log In" style={{marginBottom:"10px"}} onClick={this.handleClick} value="showCreateModal" className="btn btn-primary">Create
                        <span className="mr-1" aria-hidden="true">{this.createIcon}</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Create