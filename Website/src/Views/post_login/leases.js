import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/employeeTable'
import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'
import CreateModal from '../../Components/Modals/CreateModals/employeeCreate'
import DateFormatt from './date'

class Leases extends Component{

    constructor(){
        super()
        this.state={
            tableData: [], 
            fullData: [],
            selectedRow:null,
            showCreateModal:false,
            showInfoModal:false
        }

        this.handler = this.handler.bind(this)
        this.rowClick = this.rowClick.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(){
        console.log('eat my ass josh')

        this.fetchData()
    }

    handler(key){
        console.log(key)
        this.setState({
            [key]: [!this.state.key]
        })
    }
    createAddModal(){
        return(
            <CreateModal
            toggle={() => this.setState({showCreateModal: !this.state.showCreateModal})}
            showModal = {this.state.showCreateModal}
            body={this.state.modalBody}
            header ={this.state.modalHeader}
            />
        )
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
    /**
     * Formatts the start and end time into one line
     * @param {MySQL DataTime} start_time the time that an event starts
     * @param {MySQL DateTime} end_time the time that an event ends
     */
    getTime(start_time, end_time) {
        var startDate = new Date(start_time)
        var endDate = new Date(end_time)
        return(DateFormatt.startToEnd(startDate,endDate))
    }

    /**
     * Returns the day of week , month, and day that an event start
     * @param {MySQl DateTime} start_time the time that the event start.
     */
    getDay(start_time) {
        var date = new Date(start_time)
        return(DateFormatt.dayOfWeekAndMonth(date))
    }
    fetchData(){

        console.log('fethcy')
        fetch('/database/leases/all')
        .then(res=> {return res.status === 200? res.json(): 'invalid'})
        .then(data => {
            if(data === 'invalid') console.log('butts')
            else{
                const tableData = data.info.map( obj => {
                    return({
                        company_name: obj.company_name,
                        model_number: obj.model_number,
                        cost : obj.cost,
                        begin_date: this.getDay(obj.begin_date),
                        end_date: this.getDay(obj.end_date),


                    })
                })
                
                this.setState({
                    tableData: tableData,
                    fullData: data.info
                })
            }
        })
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
                            leases = {true}
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
                                    headers = {["","Vendor Name", "Serial Number", "Cost", "Lease Begin Date", "Lease end Date"]}
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

export default Leases