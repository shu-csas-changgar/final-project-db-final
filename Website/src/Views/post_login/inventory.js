import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'
import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'

class Inventory extends Component{

    constructor(){
        super()
        this.state ={
            tableData:[], fullData: [], 
            selectedRow: null, 
            showCreateModal: false,
            showInfoModal: false
        }

        this.handler = this.handler.bind(this)
        this.rowClick = this.rowClick.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        console.log('eat my ass')
        fetch('/database/inventory/all')
        .then( res => {return res.status === 200 ? res.json() : "Invalid"})
        .then( data => {
            if(data === 'Invalid') console.log('butts')
            else{
                const tableData = data.info.map( obj => {
                    return({
                        model_name: obj.model_name,
                        serial_number: obj.serial_number,
                        employee_id: obj.employee_id,
                        

                    })
                })

                this.setState({
                    tableData: tableData,
                    fullData: data.info
                })
            }
        })
    }

    handler(key){
        console.log(key)
        this.setState({
            [key]: [!this.state.key]
        })
    }

    rowClick(event){
        const id = parseInt(event.currentTarget.id)
        if(event.target.type === 'checkbox'){
            this.setState({
                selectedRow: id,
                showInfoModal: true
            })
        }
        else{
            this.setState({
                selectedRow: id,
                showInfoModal: true
            })
        }
    }

    render(){
        return(
            <div>
                <div >
                    <Header />
                </div>
                <div className="container mt-3" id="view-container" style={{marginBottom: "30px"}}>
                    <div className="row bg-light" style={{borderTopLeftRadius:"10px", padding:"8px", borderTopRightRadius:"10px",borderBottom:"1px solid #A0A0A0"}}>
                        <Navbar 
                            history = {this.props.history}
                            inventory = {true}
                        />
                    </div>
                        <Control
                            action={this.handler}
                            create={this.props.showCreateModal}
                        />

                    <div className ="flex-row mt-3"  style={{paddingBottom:"10px"}}>
                        <div className ='container' id='cont1'>
                            <div className="table-responsive">
                                <CheckedTable
                                    tableType='table table-hover'
                                    headers = {["","Model Name", "Serial Number", "Employee ID"]}
                                    fullData ={this.state.fullData}
                                    body={this.state.tableData}
                                    onClick = {this.rowClick}
                                />
                            </div>                            
                        </div>
                    </div>
                </div>   
            </div>
        )
                

    }
}

export default Inventory