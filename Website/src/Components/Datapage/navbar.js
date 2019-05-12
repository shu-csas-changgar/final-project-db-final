import React, {Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

class navbar extends Component {

    render() {
        const link = "#"
        console.log(this.props.history)
        return(
          <Router>
            <div>
                <ul className="nav nav-pills" >
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.home? "active" : null}`} onClick={()=>{this.props.history.push("/database")}} href={link}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.inventory? "active" : null}`} onClick={()=>{this.props.history.push("database/inventory")}} href={link}>Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.reservations? "active" : null}`} onClick={()=>{this.props.history.push("database/reservations")}}  href={link}>Addresses</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.employees? "active" : null}`} onClick={()=>{this.props.history.push("database/employees")}} href={link}>Employees</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.leases? "active" : null}`} onClick={()=>{this.props.history.push("database/leases")}} href={link}>Leases</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${this.props.events? "active" : null}`} onClick={()=>{this.props.history.push("database/events")}} href={link}>Events</a>
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
