import React, { Component } from "react"

class navbar extends Component {

    render() {
      const link = '#'
        return(
          <nav className="navbar navbar-expand-sm  navbar-light bg-light" id="custom-nav">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <a className="nav-link" href={link}>Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href={link}>Inventory</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href={link}>Leases</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href={link}>Reservations</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href={link}>Reports</a>
                  </li>
              </ul>
          </div>
      </nav>
        )

    }
}

export default navbar