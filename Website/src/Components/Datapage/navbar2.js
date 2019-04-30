import React, {Component } from 'react'

class navbar extends Component {
    
    
    render() {

        const link = "#"
        return(
            <div>
                <ul className="nav nav-pills" >
                    <li className="nav-item">
                        <a className="nav-link active" onClick={()=>{console.log('Clicked Home')}} href={link}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{console.log('Clicked Inventory')}} href={link}>Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{console.log('Clicked Reservations')}}  href={link}>Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{console.log('Clicked Leases')}} href={link}>Leases</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{console.log('Clicked Reports')}} href={link}>Reports</a>
                    </li>
                </ul>
            </div>
        )

    }
}

export default navbar
