import React, { Component } from 'react'
import { formError } from '../Errors/errors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit} from '@fortawesome/free-solid-svg-icons'

class InfoModal extends Component {

    constructor(){
        super()

        /** State Variables
         * - cityStateMap: a map obj that will hold the information for the city and state inputs. The map is 
         *      structured as: key = state, values = citys that belong to the state. The map is initally set to empty
         * 
         */
        this.state = {
            cityStateMap: new Map(),
            disabled: true,
            showErrorMessage: false,
            showEditButton: true, 
            first_name: null,
            last_name: null,
            email: null,
            cell_number: null,
            address1: null,
            address2: null,
            state: null,
            city_name: null,
            country: null,
            county: null,
            postal_code: null,
        }

        // Font Awsome Icons
        this.editIcon = <FontAwesomeIcon icon={faEdit} transform="right-5"/>

        // binding functions that will alter the state/ take event as input
        this.changeDisabled = this.changeDisabled.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.checkAddress = this.checkAddress.bind(this)
        
    }

    /**
     * Fetches data from the database and places the data into the appropriate state variables. As follows:
     * - fetch[cities]: Turns the data into a map and then places it into the [cityStateMap] state variable.
     */
    componentDidMount(){
        fetch('/database/cities/all')
        .then( res => { return res.status===200? res.json() : "Invalid"})
        .then( data => {
            const map = new Map(JSON.parse(data.data))
            this.setState({
                cityStateMap: map
            })
        })
    }

    /**
     * Dismisses the Modal
     */
    dismissModal = ()=>{
        this.props.toggle()
    }

    /**
     * When called this function sets all the input fields for the modal to be editable
     * @param {Javascript event} event the event passed with the function call 
     */
    changeDisabled(event){
        event.preventDefault()
        this.setState({
            disabled: false,
            showEditButton: false
        })
    }

    /**
     * handles all changes in the input fields. These changes are used to update the react state variables
     * @param {Javascipt event} event the event passed with the function call 
     */
    handleChange(event){
        let value =event.target.value
        if(value === "") value = null
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    
    
    /**
     * Handles the submission of the modal. Will construct the approperate queries for the server based on the
     * modal fields that were filled in
     * @param {Javascript event} event 
     */
    handleSubmit(event){
        event.preventDefault()
        
        // If no changes were made send a message to the user
        if(this.state.first_name === null && this.state.last_name === null && this.state.email === null && this.state.cell_number === null &&
             this.address1 === null && this.address2 === null && this.country === null && this.state.postal_code === null) {
            this.setState({
                showErrorMessage: true
            })
        }
        // create the data to send to the server
        else{

            let fetchArray = []

            // Check if the city or state field was updated
            if (this.state.city_name !== null || this.state.state !== null) {

                const citydata = this.cityUpdate('selectId', false)
                // Check if the city already exists
                this.checkCity(citydata).then (data => {

                    // It exists
                    if(data.success === 'true') {
                   
                        //Check address
                        this.checkAddress(this.addressUpdate("selectId", false, data.info[0])).then (data2 => {
                            // if the address exists
                            if(data2.success === 'true'){
                                fetchArray.push(this.employeeUpdate('update', false, data2.info[0]))
                                this.sendAndFetch(fetchArray).then(data => {
                                    if(data2.success === 'true'){
                                        this.dismissModal()
                                        this.props.updateOccurred()
                                    } else {
                                        console.log(data2.error)
                                    }
                                })
                            }

                            // Address doesnt exist
                            else {
                                fetchArray.push(this.employeeUpdate('update', true))
                                fetchArray.push(this.addressUpdate('insert', false, data.info[0]))
                                this.sendAndFetch(fetchArray).then(data => {
                                    if(data.success === 'true'){
                                        this.dismissModal()
                                        this.props.updateOccurred()
                                    } else {
                                        console.log(data.error)
                                    }
                                })
                            } 
                        })
                    }

                    // City doesnt exist
                    else {
                        fetchArray.push(this.employeeUpdate('update', true))
                        fetchArray.push(this.addressUpdate('insert', true))
                        fetchArray.push(this.cityUpdate('insert'))
                        
                        this.sendAndFetch2(fetchArray).then(data => {
                            if(data.success === 'true'){
                                this.dismissModal()
                                this.props.updateOccurred()
                            } else {
                                console.log(data.error)
                            }
                        })
                    }
                })
                .catch( (err => {console.log(err)}))
            }
            
            else if (this.state.address1 !== null || this.state.address2 !== null || this.state.country !== null || this.state.postal_code !== null) {
                
                const data = this.addressUpdate('selectId', false)
                this.checkAddress(data).then( data => {

                    // Address already exists.
                    // we will just update the employee address id to the existing one
                    if(data.success === 'true'){
                        fetchArray.push(this.employeeUpdate('update', false, data.info[0]))
                        this.sendAndFetch(fetchArray).then(data => {
                            if(data.success === 'true'){
                                this.dismissModal()
                                this.props.updateOccurred()
                            } else {
                                console.log(data.error)
                            }
                        })
                    }

                    // Address doesnt exist
                    else {
                        // If employee fields were also filed in we will have to update the address and the employee
                        if (this.state.first_name !== null || this.state.last_name !== null || this.state.email !== null || this.state.cell_number !== null){
                            const query1 = this.employeeUpdate('update', true)
                            fetchArray.push(query1)
                            const query2 = this.addressUpdate('insert', false)
                            fetchArray.push(query2)

                            this.sendAndFetch(fetchArray).then(data => {
                                if(data.success === 'true'){
                                    this.dismissModal()
                                    this.props.updateOccurred()
                
                                } else {
                                    console.log('error') 
                                }
                            })
                        }

                        // Just address field was updated so we need to update the address and then the employees address id on the newly created address
                        else {
                            const query2 = this.employeeUpdate('update', true)
                            fetchArray.push(query2)
                            const query1 = this.addressUpdate('insert', false)
                            fetchArray.push(query1)
                         

                            this.sendAndFetch(fetchArray).then(data => {
                                if(data.success === 'true'){
                                    this.dismissModal()
                                    this.props.updateOccurred()
                
                                } else {
                                    console.log(data.error) 
                                }
                            })
                        }
                    }
                })
                .catch (err => {console.log(`There was an error send the data: ${err}`)})  
            }
            else if (this.state.first_name !== null || this.state.last_name !== null || this.state.email !== null || this.state.cell_number !== null) {
                fetchArray.push(this.employeeUpdate('update'))
                this.sendAndFetch(fetchArray).then(data => {
                    if(data.success === 'true'){
                        this.dismissModal()
                        this.props.updateOccurred()
    
                    } else {
                        console.log(data.error) 
                    }
                })
            }
            else {
                this.setState({
                    showErrorMessage: true
                })
            }  
        }
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
     * Sends a fetch request to the database to check whether the address the user inputed exists
     * @param {Address Object} obj 
     */
    checkAddress(obj){
        return fetch('/database/employee/address/check', {
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

    /**
     * When given an array of City, Address, and Employee objects, this function will add the objects to the database.
     * It will throw an error if part of the query could not be completed
     * @param {Array of City, Address, and Employee objects} objArray 
     */
    sendAndFetch2(objArray) {
        return fetch('/database/employee/all', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    /**
     * Creates a new object that has all the values of the fields that were changed in the employee update
     * @returns an Employee object that contains the data for the fetch
     */
    employeeUpdate(action, dependent, ...other) {
        let employeeObj = {
            table: 'employee',
            action: action,
            where: {employee_id: this.props.bodyData.employee_id},
        }

        other.map( obj => {
            if(obj.hasOwnProperty('address_id')) {
                employeeObj.id = {address_id: other[0].address_id}
            }  
        })

        if (dependent) {
            employeeObj.id = {address_id: '?'}
        }

        if (this.state.first_name !== null){
            employeeObj.first_name = this.state.first_name
        }
        if (this.state.last_name !== null){
            employeeObj.last_name = this.state.last_name
        }   
        if (this.state.cell_number !== null){
            employeeObj.cell_number = this.state.cell_number
        }
        if(this.state.email !== null) {
            employeeObj.email = this.state.email
        }
        return employeeObj
    }

    /**
     * Creates a new object that has all the values of the fields that were changed in the address update
     * @returns an Address object that contains the data for the fetch
     */
    addressUpdate(action, dependent, ...other) {
        const data = this.props.bodyData

        let addressObj = {
            table: 'address',
            action: action,
            type: 'child'
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
        
        this.state.address1 !== null ? addressObj.address1 = this.state.address1 : addressObj.address1 = data.address1

        this.state.address2 !== null ? addressObj.address2 = this.state.address2 : addressObj.address2 = data.address2
        
        this.state.county !== null ? addressObj.county = this.state.county : addressObj.county = data.county

        this.state.postal_code !== null ? addressObj.postal_code = this.state.postal_code : addressObj.postal_code = data.postal_code

        this.state.city_name !== null ? console.log("hellow world") : addressObj.city_id = data.city_id

        return addressObj
    }

    /**
     * Creates a new object that has all the values of the fields that were changed in the city update
     * @returns a City object that contains the data for the fetch
     */
    cityUpdate(action, dependent) {
        const data = this.props.bodyData
        let cityObj = {
            table: 'city',
            action: action,
            type: 'child',
            country_id: 2
        }

        if(action === 'selectId') {
            cityObj.selectId = 'city_id'
        } 

        this.state.city_name !== null ? cityObj.city_name = this.state.city_name : cityObj.city_name = data.city_name

        this.state.state !== null ? cityObj.state = this.state.state : cityObj.state = data.state

        return cityObj
    }

    /**
     * Error message to be rendered at bottom of modal if something is wrong
     */
    renderErrorMessage(){
        return(
            <formError />
        )
    }

    /**
     * Returns all the keys of a given map into an array.
     * @param {Javascript Map Object} aMap A map to extract the key names from.
     */
    renderStates(aMap){
        let rows = []
        for (var key of aMap.keys()) {
            rows.push(key)
        }
        return rows
    }

    /**
     * Returns all of the values that are associated with an key. Data is returned as an array. 
     * @param {Javascript Map Object} aMap A map to extract the values from.
     */
    renderCities(aMap) {
        let values = aMap.get(this.state.state)
        return values == null ? [] : values
    }

    render() {
        // Constate that holds all of the prop data
        const data = this.props.bodyData
        // Constant to hold the states array
        const s = this.renderStates(this.state.cityStateMap)
        // Constant to hold the cities array
        const c = this.renderCities(this.state.cityStateMap)

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
                                        <label htmlFor="inputCity">Address</label>
                                        <input type="text" name='address1' onChange={this.handleChange} className="form-control"  defaultValue={data.address1} disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputCity">Address 2</label>
                                        <input type="text" name='address2' onChange={this.handleChange} className="form-control" defaultValue={data.address2} disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputState">State/Province</label>
                                        <input list="encodings2" type="text" name="state" onChange={this.handleChange} className="form-control" defaultValue={data.state} autoComplete='new-password' disabled={this.state.disabled}/>
                                        <datalist id="encodings2">
                                            {
                                                s.map( (item, i) =>{
                                                    return <option key={i} value={item}>{item}</option>
                                                })
                                            }
                                        </datalist>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputState">City</label>
                                        <input list="encodings" type="text" name='city_name' onChange={this.handleChange} className="form-control" defaultValue={data.city_name} autoComplete='new-password' disabled={this.state.disabled}/>
                                        <datalist id="encodings">
                                            {
                                                c.map( (city, i) => {
                                                    return <option key={i} value={city}>{city}</option>
                                                })
                                            }
                                        </datalist>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">County</label>
                                        <input type="text" name="county" onChange={this.handleChange}  className="form-control" defaultValue={data.county} id="inputZip" disabled={this.state.disabled}/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" name="postal_code" onChange={this.handleChange}  className="form-control" id="inputZip" defaultValue={data.postal_code} disabled={this.state.disabled}/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputState">Country</label>
                                    <   input type="text" name='country' onChange={this.handleChange} className="form-control" defaultValue={data.country_name} autoComplete='new-password' disabled={this.state.disabled}/>
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