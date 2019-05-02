import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import Table from '../../Components/Tables/table'
import Header from '../../Components/Datapage/header'
class Inventory extends Component{
    constructor(){
        super()
        this.state = { 
            tableData : []

        }
    }

    componentDidMount(){
        fetch('/database/employee/all')
        .then( res =>{ return res.status === 200 ? res.json() : "Invalid"})
        .then( data => {
            
            if (data === 'Invalid') console.log('invalid')
            else{console.log(data.info)
                this.setState({
                    tableData : data.info
                })}
        })
    }

    render(){
            return(
                <div>
                    <div >
                        <Header />
                    </div>
                    <div className="container mt-3" id="view-container" style={{marginBottom: "30px"}}>
                        <div className="row bg-light" style={{borderTopLeftRadius:"10px", padding:"8px", borderTopRightRadius:"10px",borderBottom:"1px solid black"}}>
                            <Navbar 
                                history = {this.props.history}
                                employees = {true}
                            />
                        </div>

                            <div className ="flex-row mt-5" >
                                <div className ='container' id='cont1'>
                                    <Table
                                        tableType='table m-2'
                                        headers = {["address_id", "first_name", "last_name", "location_id", "model_name", "model_number", "room_number"]}
                                        body={this.state.tableData}
                                        rowClick = {null}
                                    />
                                </div>
                            
                            
                            </div>



                     </div>
                 </div>
        )
    }
}

export default Inventory