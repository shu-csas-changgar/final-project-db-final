import React, {Component } from 'react'

class navbar extends Component {
    
    
    render() {

        const link = "#"
        return(
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href={link}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Leases</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Reports</a>
                    </li>
                </ul>
            </div>
        )

    }
}

export default navbar
