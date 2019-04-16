import React, {Component } from 'react'

class navbar extends Component {
    
    
    render() {

        const link = "#"
        return(
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href={link}>Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={link}>Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href={link}>Disabled</a>
                    </li>
                </ul>
            </div>
        )

    }
}

export default navbar
