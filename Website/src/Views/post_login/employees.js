import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'
import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'
import CreateModal from '../../Components/Modals/CreateModals/employeeCreate'
import InfoModal from '../../Components/Modals/employee_info_modal'


class Employee extends Component{
    constructor(){
        super()
        this.state = { 
            tableData: [],
            fullData: [],
            selectedRow: null,
            showCreateModal: false,
            showInfoModal: false,
        }
        this.handler = this.handler.bind(this)
        this.rowClick = this.rowClick.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(){
        this.fetchData()
        
    }


    fetchData(){
        console.log('hersadkflkjdsahe')
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
    createAddModal() {
        return (
            <CreateModal 
                toggle = {() => this.setState({showCreateModal: !this.state.showCreateModal})}
                showModal={this.state.showCreateModal}
                body={this.state.modalBody}
                header={this.state.modalHeader}
            />
        )
    }

    createInfoModal() {
        
        /**
         * Map over the fullData array and get the object whos employee_id key is equal to the selected row state variable.
         * Since no two employees can have the same employee_id this function will always return the proper employee
         */
        let dataToSend
        this.state.fullData.forEach( obj => {
            if(obj.employee_id === this.state.selectedRow) {
                dataToSend = obj
            }
        })
        return(
            <InfoModal 
                toggle = {() => this.setState({showInfoModal: !this.state.showInfoModal})}
                showModal={this.state.showInfoModal}
                bodyData={dataToSend}
                header={"Focused View"}
                updateOccurred = {this.fetchData}
            />
        )
    }

    handler(key) {
        console.log(key)
        this.setState({
            [key]: [!this.state.key]
        })
    }


    rowClick(event){
       const id = parseInt(event.currentTarget.id)
       if(event.target.type === 'checkbox') {
        this.setState({
            selectedRow: id,
        })
       } else {
        this.setState({
            selectedRow: id,
            showInfoModal: true
        })
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
                                    onClick = {this.rowClick}
                                    
                                />
                            </div>
                        </div>
                        <div className={`container ${this.state.showCreateModal ? 'modal-open' :''}`}>
                            {
                                this.state.showCreateModal ? this.createAddModal() : null
                            }
                        </div>
                        <div className={`container ${this.state.showInfoModal ? 'modal-open' :''}`}>
                            {
                                this.state.showInfoModal ? this.createInfoModal() : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee