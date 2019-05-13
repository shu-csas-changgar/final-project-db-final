import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'

import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'

class AddPage extends Component{

    constructor(){
        super()
        this.state={

            
            vendor_id:null,
            model_name:null,
            serial_number:null,
            company_name:null,
            cost:null,
            begin_date:null,
            end_date:null,
            addresses:[],
            purchase_date:null,
            leaseData:[],
            selectedAddress:null,
            selectedLease:null

        }

        this.handleChange = this.handleChange.bind(this)
        this.submitVendor = this.submitVendor.bind(this)
        this.vendorUpdate = this.vendorUpdate.bind(this)
        this.submitLease = this.submitLease.bind(this)
        this.leaseUpdate = this.leaseUpdate.bind(this)
    }

    componentDidMount(){

        Promise.all([
            fetch('/database/address/all'),
            fetch('/database/leases/form')
        ])
        
        
        .then((res)=> Promise.all(res.map(res=>(res.status===200? res.json(): 'invalid'))))
        .then(([r1, r2])=>{
            let leaseData = []
             let stateData = []
            if(r1 === 'invalid') console.log('invalid')
            else{
                stateData = r1.info
            }

            if(r2==='invalid') console.log('invalid')
            else{
                console.log(r2.data)
                leaseData = r2.info.map( obj=>{
                    return({
                        vendor_id : obj.vendor_id,
                        company_name : obj.company_name
                    })
                    
                })

            }

            this.setState({
                leaseData: leaseData,
                addresses: stateData
            })
            
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


    submitVendor(event) {
        event.preventDefault()

        if(this.state.company_name !== null && this.state.selectedAddress !== null){
            const obj = this.vendorUpdate('insert', false)

            console.log(obj)
            this.sendAndFetch(obj)
            .then(data => {
                if(data.success === 'true'){
                    console.log(data)
                }
            })


        }else {
            //TODO: ADD message
            console.log("Data not filled in")
        }
    }

    sendAndFetch(objArray) {
        return fetch('/database/vendor/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    sendAndFetchAgain(objArray) {
        return fetch('/database/leases/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }
    vendorUpdate(action, dependent) {
        let venderObj = {
            table: 'vendor',
            action: action,
            type: 'child',
            company_name: this.state.company_name,
            address_id: this.state.selectedAddress
        }

        return venderObj
    }

    leaseUpdate(action, dependent){
        let leaseObj ={
            table: 'transaction',
            action: action,
            type: 'child',
            cost: this.state.cost,
            purchase_date: this.state.purchase_date,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            vendor_id:this.state.selectedLease

        }
        return leaseObj
    }
    submitLease(event) {
        event.preventDefault()

        if(this.state.cost !== null && this.state.purchase_date !== null && this.state.start_date !== null && this.state.end_date !== null && this.state.vendor_id !== null){
            const obj = this.leaseUpdate('insert', false)

            console.log(obj)
            this.sendAndFetchAgain(obj)
            .then(data => {
                if(data.success === 'true'){
                    console.log(data)
                }
            })


        }else {
            //TODO: ADD message
            console.log("Data not filled in")
        }
    }

    render() {
        console.log(this.state.cost)
        console.log(this.state.purchase_date)
        console.log(this.state.start_date)
        console.log(this.state.end_date)
        console.log(this.vendor_id)

        return(
            <div>
                <div >
                    <Header />
                </div>
                <div className="container mt-3" id="view-container" style={{marginBottom: "30px"}}>
                    <div className="row bg-light" style={{borderTopLeftRadius:"10px", padding:"8px", borderTopRightRadius:"10px",borderBottom:"1px solid #A0A0A0"}}>
                        <Navbar 
                            history = {this.props.history}
                            addpage = {true}
                        />
                    </div>
                    
                    <form>
                    <h2><strong> Add to Vendors </strong> </h2>
                        <div className="form-group">
                             <label htmlFor="Vendor Name">Vendor name</label>
                            <input type="name" className="form-control" aria-describedby="emailHelp" name="company_name" id="name" defaultValue = {this.company_name} onChange = {this.handleChange} placeholder="vendor name"/>
                             
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
                    
                    <button type="submit" onClick={this.submitVendor} className="btn btn-primary">Submit</button>
                    </form>
                    <hr/>
                    <h2> <strong> Add to Inventory </strong> </h2>
                    
                    <form>
                        <div className="form-group">
                             <label htmlFor="Inventory">Item name</label>
                            <input type="email" className="form-control" id="item name" defaultValue = {this.model_name} onChange = {this.handleChange} aria-describedby="emailHelp" placeholder="enter item name"/>
                            </div>
                     <div className="form-group">
                        <label htmlFor="Serial Number">Serial Number</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="XXXXXXXX"/>
                        </div>
                    <div className="form-check">
                         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Add to Inventory?</label>
                        </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <hr/>
                    <h2> <strong> Add to Transactions </strong> </h2>
                    
                    <form>
                        <div className="form-group">
                             <label htmlFor="Inventory">cost</label>
                            <input type="name" className="form-control" name="cost" id="item name" defaultValue ={this.cost} onChange = {this.handleChange} aria-describedby="emailHelp" placeholder="enter item name"/>
                            </div>
                     <div className="form-group">
                        <label htmlFor="Serial Number">Purchase Date</label>
                            <input type="string" className="form-control" id="exampleInputPassword1" name="purchase_date" defaultValue ={this.purchase_date} onChange = {this.handleChange} placeholder="XXXXXXXX"/>
                        </div>
                     <div className="form-group">
                        <label htmlFor="Start Date">Lease Start Date</label>
                            <input type="string" className="form-control" id="exampleInputPassword1" name="start_date" defaultValue ={this.start_date} onChange={this.handleChange} placeholder="MM/DD/YYY"/>
                     </div>
                     <div className="form-group">
                        <label htmlFor="End Date">Lease End Date</label>
                            <input type="string" className="form-control" id="exampleInputPassword1" name= "end_date"defaultValue ={this.end_date} onChange={this.handleChange} placeholder="MM/DD/YYY"/>
                     </div>
                     <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputState">* Vendors</label>
                                        <select onChange={this.handleChange} name="selectedLease" className="form-control" required>
                                            <option defaultValue value="">Choose...</option>
                                            <option value="new" name="selectedLease" className="font-weight-bold">New Vendor</option>
                                            {
                                                this.state.leaseData.map( (obj, i) => {
                                                    return(
                                                        <option  key={i} name="selectedLease" value={obj.vendor_id}>{`${obj.company_name}`}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                         </div>
                    <div className="form-check">
                         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Add to Inventory?</label>
                        </div>
                    <button type="submit" onClick={this.submitLease} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
            
            )
        }
    
}
export default AddPage