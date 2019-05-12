import React, { Component } from 'react'
import Address from './addressCreate'

class CreateEmployee extends Component {

    constructor(){
        super()

        /** State Variables
         * - addresses: an array that holds the address data that is rendered into the address <select> element.
         *      Initally the array is set to an empty array but is populated after a sucessful server fetch.
         * - selectedAddress: a string that holds the 'address_id' of the address that the user selected from the
         *      address <select> element. Initally set to null.
         * - firstName: a string that holds the value for first name <input> field. Initally set to an empty string.
         * - lastName: a string that holds the value for the last name <input> field. Initally set to an empty string.
         * - email: a string that holds the value for the email <input> field. Initally set to an empty string.
         * - cellNumber: a string that holds the value for the cell phone number <input> field. Initally set to an empty string.
         */
        this.state = {
            addresses: [],
            selectedAddress: null,
            firstName: '',
            lastName: '',
            email: '',
            CellNumber:'',
            address1: null,
            address2: null,
            state: null,
            city: null,
            county: null,
            postal_code: null,
        }
        
        // Bind necessarry functions
        this.handleChange = this.handleChange.bind(this)
        this.handler = this.handler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch('/database/address/all')
        .then( res => { return res.status === 200? res.json() : "Invalid"})
        .then( data => {
            if(data === "Invalid") console.log("No data was returned")
            else {
                console.log(data.info)
                this.setState({addresses: data.info})
            }
        })
        .catch( err => {console.log('Error fetching address data')})
    }

    handleSubmit(event){
        event.preventDefault()
        event.target.className += " was-validated"

        if (this.state.selectedAddress !== null && (this.state.firstName !== null || this.state.firstName !== '') && (this.state.lastName !== null || this.state.lastName !== '') && (this.state.email !== null || this.state.email !== '')) {
            
            // Check if they used an existing address
            if (this.state.selectedAddress === 'new'){
                console.log('here')
            }
            else {
                // Check if employee exists
                let obj = this.employeeCreate('selectId', this.state.selectedAddress)
                this.checkAddress(obj).then (data => {

                    if(data.success === 'true'){
                        //TODO: Add Error message
                        console.log("employee exists")
                    }
                    else{
                        console.log('employee does not exist')
                        let obj2 = this.employeeCreate('insert', this.state.selectedAddress)
                        console.log(obj2)
                        this.sendAndFetch(obj2).then( data => {
                            if(data.success === 'true'){
                                this.dismissModal()
                                this.props.updateOccurred()
        
                            } else {
                                //TODO: Add Error message
                                console.log(data.error) 
                            }
                        })
                    }

                })  
            }
        }
    }

    handleChange(event){
        const value =event.target.value
        const name = event.target.name
        console.log(name)
        console.log(value)
        this.setState({
            [name]: value
        })
    }


    /**
     * Sends a fetch request to the database to check whether the employee the user inputed exists
     * @param {Employee Object} obj 
     */
    checkAddress(obj){
        return fetch('/database/employee/check', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then( res=> res.json())
        .catch( err => {console.log(`There was an error send the data: ${err}`)})
    }

    /**
     * Sends a fetch request to the database to check whether the employee the user inputed exists
     * @param {Employee email} string 
     */
    checkEmployee(string){
        return fetch('/database/employee/name/check', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(string)
        })
        .then( res=> res.json())
        .catch( err => {console.log(`There was an error send the data: ${err}`)})
    }


    /**
     * Sends a fetch request to the database to check whether the city the user inputed exists
     * @param {City Object} obj 
     */
    checkCity(obj) {
        return fetch('/database/cities/check', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then( res=> res.json())
        .catch( err => {console.log(`There was an error send the data: ${err}`)})
    }


    /**
     * When given an array of City, Address, and Employee objects, this function will add the objects to the database.
     * It will throw an error if part of the query could not be completed
     * @param {Array of City, Address, and Employee objects} objArray 
     */
    sendAndFetch(objArray) {
        return fetch('/database/employee/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    employeeCreate(action, address_id) {
        let employeeObj = {
            table: 'employee',
            action: action,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            address_id: address_id
        }

        if(action === 'selectId') {
            employeeObj.selectId = 'employee_id'
        } 

        if (this.state.CellNumber !== null){
            employeeObj.cell_number = this.state.CellNumber
        }

        return employeeObj
    }

    /**
     * Creates a new object that has all the values of the fields that were changed in the address update
     * @returns an Address object that contains the data for the fetch
     */
    addressUpdate(action, dependent, ...other) {
        let addressObj = {
            table: 'address',
            action: action,
            type: 'child',
            address1: this.state.address1,
            address2: this.state.address2,
            county: this.state.county,
            postal_code: this.state.postal_code,
        }

        other.map( obj => {
            if(obj.hasOwnProperty('city_id')) {
                addressObj.id = {city_id: other[0].city_id}
            }  
        })

        if (dependent) {
            addressObj.id = {city_id: '?'}
        }

        if(action === 'selectId') {
            addressObj.selectId = 'address_id'
        } 

        return addressObj
    }

        /**
     * Creates a new object that has all the values of the fields that were changed in the city update
     * @returns a City object that contains the data for the fetch
     */
    cityUpdate(action, dependent) {
        let cityObj = {
            table: 'city',
            action: action,
            type: 'child',
            country_id: 2,
            state: this.state.state,
            city_name: this.state.city
        }

        if(action === 'selectId') {
            cityObj.selectId = 'city_id'
        } 

        return cityObj
    }


    handler(key, value) {
        console.log('called')
        this.setState({
            [key]: value
        })
    }

    /**
     * Dismisses the Modal
     */
    dismissModal = ()=>{
        this.props.toggle()
    }

    render(){
        console.log(this.props.data)
        return(
            <div className={`modal fade WelcomeModal ${this.props.showModal ? 'show' : ''}`} style={{display: `${this.props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)'}} id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Employee</h5>                            
                            <button type="button" className="close" onClick={this.dismissModal} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>                             
                        </div>
                        <small id="required" className="form-text text-muted ml-2">* Required Fields</small>
                        <div className="modal-body">
                            <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">* First Name</label>
                                        <input type="text" name={"firstName"} onChange={this.handleChange} className="form-control" placeholder="John" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">* Last Name</label>
                                        <input type="text" name="lastName" onChange={this.handleChange} className="form-control" placeholder="Smith"required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">* Email</label>
                                        <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Example@abc.com" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Cell Phone Number</label>
                                        <input type="text" name="CellNumber" onChange={this.handleChange} className="form-control" placeholder="1-XXX-XXX-XXXX"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState">* Address</label>
                                        <select onChange={this.handleChange} name="selectedAddress" className="form-control" required>
                                            <option defaultValue value="">Choose...</option>
                                            <option value="new" name="selectedAddress" className="font-weight-bold">New Address</option>
                                            {
                                                this.state.addresses.map( (obj, i) => {
                                                    return(
                                                        <option  key={i} name="selectedAddress" value={obj.address_id}>{`${obj.address1}, ${obj.city_name} ${obj.state}, ${obj.postal_code}`}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                {
                                    this.state.selectedAddress === "new"? <Address data={this.state.addresses} action={this.handler}/> : ""
                                }
                                <button type="submit" className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateEmployee