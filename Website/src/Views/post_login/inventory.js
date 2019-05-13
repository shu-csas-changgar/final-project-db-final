import React, { Component } from "react"
import Navbar from '../../Components/Datapage/navbar'
import CheckedTable from '../../Components/Tables/equipment_table'

import Header from '../../Components/Datapage/header'
import Control from '../../Components/AllPages/controller'
import InventoryCreate from '../../Components/Modals/CreateModals/inventoryCreate'


class Inventory extends Component{

    constructor(){
        super()
        this.state ={
            table1Data:[], 
            table2Data:[],
            fullData: [],
            empData: [],
            checkArray: [],
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

        Promise.all([
            fetch('/database/inventory/all'),
            fetch('/database/inventory/company')
        ])
        .then( (res) => Promise.all(res.map(res => (res.status === 200 ? res.json() : "Invalid"))))
        .then(([r1, r2]) => {

            let table1Data = []
            let table2Data = []
            if(r1 === 'Invalid') console.log('butts')
            else{
                console.log(r1.info)
                table1Data = r1.info.map( obj => {
                    return({
                        model_name: obj.model_name,
                        serial_number: obj.serial_number,
                        first_name: obj.first_name,
                        last_name: obj.last_name                        

                    })
                })
            }
            if (r2 === 'invalid') console.log('invalid')
            else{
                table2Data = r2.info.map( obj =>{
                    return({
                        model_name: obj.model_name,
                        serial_number: obj.serial_number,
                        category: obj.category
                    })
                })
            }

            this.setState({

                table1Data: table1Data,
                table2Data: table2Data,
                empData: r1.info,
                fullData: r2.info


            })
        })
    }

    sendAndFetch(objArray) {
        return fetch('/database/inventory/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objArray)
        })
        .then( res => res.json())
        .catch(err => {console.log(`There was an error send the data: ${err}`)})
    }

    rowClick(event){
        const id = parseInt(event.currentTarget.id)
        if(event.target.type === 'checkbox') {
         const options = this.state.checkArray
         let index
         if (event.target.checked) {
             // add the numerical value of the checkbox to options array
             options.push(id)
             console.log(options)
           } else {
             // or remove the value from the unchecked checkbox from the array
             index = options.indexOf(id)
             options.splice(index, 1)
             console.log(options)
           }

         this.setState({
             selectedRow: id,
             checkArray: options
         })
        } 
     }

     
    inventoryCreate(){
        return(
            <InventoryCreate
            toggle={() => this.setState({showCreateModal: !this.state.showCreateModal})}
            showModal = {this.state.showCreateModal}
            body={this.state.modalBody}
            header ={this.state.modalHeader}
            />
        )
    }

    handler(key){
        this.setState({
            [key]: [!this.state.key]
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
                            inventory = {true}
                        />
                    </div>
                        <Control
                            action={this.handler}
                            create={this.props.showCreateModal}
                            delete={this.state.checkArray}
                            deleteTable = 'equipment'
                            sendAndFetch = {this.sendAndFetch}
                            deleteId = 'equiptment_id'
                            updateOccurred ={this.fetchData}
                        />
                    <hr/>
                    <div className='flex-row mt-3' style={{paddingBottom: '10px'}}>
                        <div className='d-flex justify-content-center'>
                        <h2> <strong>Employee Inventory</strong> </h2>
                        </div>
                    </div>
                    <div className ="flex-row mt-3"  style={{paddingBottom:"10px"}}>
                        <div className ='container' id='cont1'>
                            <div className="table-responsive">
                                <CheckedTable
                                    tableType='table table-hover'
                                    headers = {["","Model Name", "Serial Number", "First Name", "Last Name"]}
                                    fullData ={this.state.empData}
                                    body={this.state.table1Data}
                                    onClick = {this.rowClick}
                                />
                            </div>                            
                        </div>
                    </div>
                    <hr />
                    <div className='flex-row mt-3' style={{paddingBottom: '10px'}}>
                        <div className='d-flex justify-content-center'>
                        <h2> <strong>Company Inventory</strong> </h2>
                        </div>
                    </div>
                    <div className='flex-row mt-3' style={{paddingBottom: '10px'}}>
                        <div className ='container' id='cont2'>
                            <div className= "table-responsive">
                                <CheckedTable
                                    tableType='table table-hover'
                                    headers ={["", "Modal",'Serial Number', 'Category']}
                                    fullData ={this.state.fullData}
                                    body={this.state.table2Data}
                                    onClick = {this.rowClick}
                                />
                            </div>
                        
                        
                        
                        
                         </div>
                    
                    </div>
                        
                        <div className={`container ${this.state.showCreateModal ? 'modal-open' :''}`}>
                            {
                                this.state.showCreateModal ? this.inventoryCreate() : null
                            }
                        </div>
                   
                        </div>   
                    </div>
                    
               
            
        )
                

    }
}

export default Inventory