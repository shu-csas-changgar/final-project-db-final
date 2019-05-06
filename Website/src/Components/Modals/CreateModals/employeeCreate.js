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
            CellNumber:''
        }
        
        // Bind necessarry functions
        this.handleChange = this.handleChange.bind(this)
        this.handler = this.handler.bind(this)
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

    }

    handleChange(event){
        const value =event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handler(key, value) {
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

    renderAddress(){
        return <Address action={this.handler}/>
    }

    render(){
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
                                        <input type="text" className="form-control" placeholder="John" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">* Last Name</label>
                                        <input type="text" className="form-control" placeholder="Smith"required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">* Email</label>
                                        <input type="email" className="form-control" placeholder="Example@abc.com" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Cell Phone Number</label>
                                        <input type="text" className="form-control" placeholder="1-XXX-XXX-XXXX"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState">* Address</label>
                                        <select onChange={this.handleChange} name="selectedAddress" className="form-control" required>
                                            <option defaultValue value="">Choose...</option>
                                            <option value="new" className="font-weight-bold">New Address</option>
                                            {
                                                this.state.addresses.map( (obj, i) => {
                                                    return(
                                                        <option  key={i} value={i}>{`${obj.address1}, ${obj.city_name} ${obj.state}, ${obj.postal_code}`}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                {
                                    this.state.selectedAddress === "new"? <Address data={this.state.addresses}/> : ""
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