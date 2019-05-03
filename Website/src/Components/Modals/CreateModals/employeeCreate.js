import React, { Component } from 'react'
import Address from './addressCreate'

class CreateEmployee extends Component {

    constructor(){
        super()

        this.state = {
            addresses: [],
            selectedAddress: null
        }
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event){
        const value =event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    /**
     * Dismisses the Modal
     */
    dismissModal = ()=>{
        this.props.toggle()
    }

    renderAddress(){
        return <Address />
    }


    render(){
        console.log(this.state.selectedAddress)
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
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">* First Name</label>
                                        <input type="text" className="form-control" placeholder="John"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">* Last Name</label>
                                        <input type="text" className="form-control" placeholder="Smith"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">* Email</label>
                                        <input type="email" className="form-control" placeholder="Example@abc.com"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Cell Phone Number</label>
                                        <input type="text" className="form-control" placeholder="1-XXX-XXX-XXXX"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState">* Address</label>
                                        <select onChange={this.handleChange} name="selectedAddress" className="form-control">
                                            <option defaultValue>Choose...</option>
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