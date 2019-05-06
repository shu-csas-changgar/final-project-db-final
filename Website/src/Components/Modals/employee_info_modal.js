import React, { Component } from 'react'
import { formError } from '../Errors/errors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit} from '@fortawesome/free-solid-svg-icons'

class InfoModal extends Component {

    constructor(){
        super()

        this.state ={
            disabled: true,
            showErrorMessage: false,
            showEditButton: true, 
            first_name: null,
            last_name: null,
            email: null,
            cell_number: null
        }

        // Font Awsome Icons
        this.editIcon = <FontAwesomeIcon icon={faEdit} transform="right-5"/>

        // binding functions that will alter the state/ take event as input
        this.changeDisabled = this.changeDisabled.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Dismisses the Modal
     */
    dismissModal = ()=>{
        this.props.toggle()
    }

    changeDisabled(event){
        event.preventDefault()
        this.setState({
            disabled: false,
            showEditButton: false
        })
    }

    handleChange(event){
        let value =event.target.value
        if(value === "") value = null
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event){
        event.preventDefault()
        
        // Check if the user entered data
        if(this.state.first_name === null && this.state.last_name === null && this.state.email === null && this.state.cell_number === null){
            this.setState({
                showErrorMessage: true
            })
        }
        // create the data to send to the server
        else{
             let fetchObject = this.createFetchObj()
             this.sendAndFetch(fetchObject)
        }

    }

    sendAndFetch(obj) {
        fetch('/database/employee/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then( res => res.json())
        .then( data => {
            if(data.success === 'true'){
                console.log('Success')
            } else {
                console.log('error')
            }
        })
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    /**
     * Creates a new object that has all the values of the fields that were changed in the employee update
     * This function returns an array of objects
     */
    createFetchObj() {
        let obj2Send = []
        let newObj = {
            table: 'employee',
            where: {employee_id: this.props.bodyData.employee_id}
        }
        if (this.state.first_name !== null){
            newObj.first_name = this.state.first_name
        }
        if (this.state.last_name !== null){
            newObj.last_name = this.state.last_name
        }
            
        if (this.state.cell_number !== null){
            newObj.cell_number = this.state.cell_number
        }
        if(this.state.email !== null) {
            newObj.email = this.state.email
        }
        obj2Send.push(newObj)
        return obj2Send
    }

    renderErrorMessage(){
        return(
            <formError />
        )
    }

    render() {
        const data = this.props.bodyData
        console.log(data)

        return (
            <div className={`modal fade WelcomeModal ${this.props.showModal ? 'show' : ''}`} style={{display: `${this.props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)'}} id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.header}</h5>
                        <button type="button" className="close" onClick={this.dismissModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>                             
                    </div>
                    <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">First Name</label>
                                        <input type="text" className="form-control"name="first_name" defaultValue={data.first_name} onChange={this.handleChange} disabled={this.state.disabled}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Last Name</label>
                                        <input type="text" className="form-control" name="last_name" defaultValue={data.last_name} onChange={this.handleChange} disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" name="email" defaultValue={data.email} onChange={this.handleChange} disabled={this.state.disabled}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Cell Phone Number</label>
                                        <input type="text" className="form-control" name="cell_number" defaultValue={data.cell_number} onChange={this.handleChange} disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState">* Address</label>
                                        <select onChange={this.handleChange} name="selectedAddress" className="form-control"  disabled={this.state.disabled}>
                                            <option defaultValue value="">Choose...</option>
                                            <option value="new" className="font-weight-bold">New Address</option>
                                        </select>
                                    </div>
                                </div>
                                {
                                    this.state.showErrorMessage ? formError('Add data Fool!') : null
                                }
                                {
                                    this.state.showEditButton ? <button type='button' onClick={this.changeDisabled} className="btn btn-primary">Edit<span className="mr-1" aria-hidden="true">{this.editIcon}</span></button> : <button type='submit' className="btn btn-success">Submit</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoModal