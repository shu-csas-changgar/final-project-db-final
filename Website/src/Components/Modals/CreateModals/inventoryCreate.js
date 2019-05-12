import React, { Component } from 'react'


class InventoryCreate extends Component{

    constructor(){
        super()






        this.state = {
            employeeMap: new Map(),
            modelName: '',
            modelNumber: '',
            employeeID: '',
            serialNumber: ''
        }
        this.hendleChange = this.handleChange.bind(this)
       
    }

   componentDidMount(){
       fetch('/database/inventory/all')
       .then(res=>{return res.status ===200? res.json(): 'invalid'})
       .then(data=>{
           const map = new Map(JSON.parse(data.data))
           this.setState({
               employeeIDMap: map
               
           })
       })
   }

   handleChange(event){
       const value =event.target.value
       const name = event.target.name
       this.props.action(name, value)
       this.setState({
           [name]: value
       })
   }

  

   render(){
    console.log(this.props)
    // Constant to hold the states array
    
   
    return(
        <div className={`modal fade WelcomeModal ${this.props.showModal ? 'show' : ''}`} style={{display: `${this.props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)'}} id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div>
             <hr style={{backgroundColor:"#A0A0A0"}}/>
             <h5 className="modal-title mb-2" id="exampleModalLabel">New Inventory Item</h5>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputModelName">* Model Name</label>
                    <input type="text" name='modelName' onChange={this.handleChange} className="form-control"  placeholder="1234 Main St" required/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputSerialNumber">*Serial Number</label>
                    <input type="text" name='serialNumber' onChange={this.handleChange} className="form-control" placeholder="787899721792873" required/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmployee">* Employee</label>
                    <input list="encodings2" type="text" name="Employee" onChange={this.handleChange} className="form-control" placeholder="Emp ID" required/>
                    
                </div>

                
                
                 </div>
            </div>
                            
         </div>
         </div>
        </div>
                
    )
}


}
export default InventoryCreate