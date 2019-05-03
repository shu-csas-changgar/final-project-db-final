import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'
import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'
import CreateModal from '../../Components/Modals/CreateModals/employeeCreate'
class Inventory extends Component{
    constructor(){
        super()
        this.state = { 
            tableData: [],
            fullData: [],
            showCreateModal: false
        }
        this.handler = this.handler.bind(this)
    }

    componentDidMount(){
        fetch('/database/employee/all')
        .then( res =>{ return res.status === 200 ? res.json() : "Invalid"})
        .then( data => {  
            if (data === 'Invalid') console.log('invalid')
            else{
                const tableData = data.info.map( obj => {
                    return({
                        first_name: obj.first_name,
                        last_name: obj.last_name,
                        email: obj.email,
                        address1: obj.address1,
                        city_name: obj.city_name,
                        state: obj.state,
                        cell_number: obj.cell_number
                    })
                })

                this.setState({
                    tableData : tableData,
                    fullData: data.info
                })
            }
        })
    }

    
    toggleModal(event){
        console.log(event.currentTarget)
    }

    handler(key) {
        console.log(key)
        this.setState({
            [key]: [!this.state.key]
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
                        <Control
                            action={this.handler}
                            create={this.props.showCreateModal}
                        />
                    <div className ="flex-row mt-3"  style={{paddingBottom:"10px"}} >
                        <div className ='container' id='cont1'>
                            <div className="table-responsive">
                                <CheckedTable
                                    tableType='table table-hover'
                                    headers = {["","First Name", "Last Name", "Email", "Address", "City", "State", "Cell Number"]}
                                    fullData ={this.state.fullData}
                                    body={this.state.tableData}
                                    rowClick = {this.rowClick}
                                />
                            </div>
                        </div>
                        <div className={`container ${this.state.showCreateModal ? 'modal-open' :''}`}>
                            <CreateModal 
                                toggle = {() => this.setState({showCreateModal: !this.state.showCreateModal})}
                                showModal={this.state.showCreateModal}
                                body={this.state.modalBody}
                                header={this.state.modalHeader}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory