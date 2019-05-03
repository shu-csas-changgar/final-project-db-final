import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import Table from '../../Components/Tables/table'
import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/create'
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
                })
            }
        })
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
                            employees = {true}
                        />
                    </div>
                        <Control />
                    <div className ="flex-row mt-2"  style={{paddingBottom:"10px"}} >
                        <div className ='container' id='cont1'>
                            <Table
                                tableType='table m-2'
                                headers = {["First Name", "Last Name", "Email", "Address", "City", "State", "Cell Number"]}
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