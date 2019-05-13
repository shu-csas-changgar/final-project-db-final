import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'

import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'

class AddPage extends Component{

    constructor(){
        super()
        this.state={

            vendor_name:null,
            vendor_id:null,
            model_name:null,
            serial_number:null,
            company_name:null,
            cost:null,
            begin_date:null,
            end_date:null
        }
    }

    
    render() {

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
                        <div class="form-group">
                             <label for="Vendor Name">Vendor name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="vendor name"/>
                             
                            </div>
                     <div class="form-group">
                        <label for="vendor id">Vendor ID</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Vendor ID"/>
                        </div>
                    <div class="form-check">
                         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">add to vendor?</label>
                        </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <hr/>
                    <h2> <strong> Add to Inventory </strong> </h2>
                    
                    <form>
                        <div class="form-group">
                             <label for="Inventory">Item name</label>
                            <input type="email" class="form-control" id="item name" aria-describedby="emailHelp" placeholder="enter item name"/>
                            </div>
                     <div class="form-group">
                        <label for="Serial Number">Serial Number</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="XXXXXXXX"/>
                        </div>
                    <div class="form-check">
                         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Add to Inventory?</label>
                        </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <hr/>
                    <h2> <strong> Add to Leases </strong> </h2>
                    
                    <form>
                        <div class="form-group">
                             <label for="Inventory">Item name</label>
                            <input type="email" class="form-control" id="item name" aria-describedby="emailHelp" placeholder="enter item name"/>
                            </div>
                     <div class="form-group">
                        <label for="Serial Number">Serial Number</label>
                            <input type="string" class="form-control" id="exampleInputPassword1" placeholder="XXXXXXXX"/>
                        </div>
                     <div class="form-group">
                        <label for="Start Date">Lease Start Date</label>
                            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="MM/DD/YYY"/>
                     </div>
                     <div class="form-group">
                        <label for="End Date">Lease End Date</label>
                            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="MM/DD/YYY"/>
                     </div>
                    <div class="form-check">
                         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Add to Inventory?</label>
                        </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
            
            )
        }
    
}
export default AddPage