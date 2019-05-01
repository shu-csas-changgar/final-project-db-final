import React, {Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

class navbar extends Component {
    constructor(props)
    {
        super(props)
    }
    
    
    render() {

        const link = "#"
        return(
          <Router>
            <div>
                <ul className="nav nav-pills" >
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>{this.props.history.push("/database")}} href={link}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{this.props.history.push("/database/inventory")}} href={link}>Inventory</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{this.props.history.push("/database/reservations")}}  href={link}>Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{this.props.history.push("database/leases")}} href={link}>Leases</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{this.props.history.push("/database/reports")}} href={link}>Reports</a>
                    </li>
                </ul>
            </div>
            </Router>  
        )

    }
}

export default navbar
