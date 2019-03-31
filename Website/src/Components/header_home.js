import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Header extends Component {

  constructor(){
    super()
    this.state = {
      menu: false,
      dropdown: false
    }
    this.gitHubIcon = <FontAwesomeIcon icon={faGithub} />
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(event){
    const name = event.currentTarget.name
    console.log(event.currentTarget)
    this.setState({
      [name]: !this.state[name]
    })
  }

  //<img src={logo} className="navbar-brand img-fluid" alt="Responsive image"/>

render(){
  const show = (this.state.menu) ? "show" : ""
  const showDrop = (this.state.dropdown) ? "show" : ""

  return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a className="navbar-brand" style={{color: "white"}}>ABC Corp</a>
        <button className="navbar-toggler" type="button" name="menu" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon" onClick={this.toggleMenu} name="menu"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="https://abc.go.com/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/">Features</a>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={ this.toggleMenu } name="dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className= {"dropdown-menu " + showDrop} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Database</a>
                <a className="dropdown-item" href="#">Server</a>
                <a className="dropdown-item" href="#">Website</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">The Project</a>

              </div>
            </li>
            <a className="nav-item nav-link" href="https://github.com/shu-csas-changgar/final-project-db-final">Github {this.gitHubIcon} <span className="sr-only">(current)</span></a>
          </div>
        </div>
      </nav>
  )
}
}

export default Header
