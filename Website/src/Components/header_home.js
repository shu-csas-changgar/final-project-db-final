import React, { Component } from "react"
import "../CSS/header_homepage.css"
import logo from "../Images/abcLogo_resize.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Header extends Component {

  constructor(){
    super()
    this.state = {
      menu: false
    }
    this.gitHubIcon = <FontAwesomeIcon icon={faGithub} />
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({
      menu: !this.state.menu
    })
  }

render(){
  const show = (this.state.menu) ? "show" : "";
  return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <img src={logo} className="navbar-brand img-fluid" alt="Responsive image"/>
        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="https://abc.go.com/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/">Features</a>
            <a className="nav-item nav-link" href="/">About</a>
            <a className="nav-item nav-link" href="https://github.com/shu-csas-changgar/final-project-db-final">Github {this.gitHubIcon} <span className="sr-only">(current)</span></a>
          </div>
        </div>
      </nav>
  )
}
}

export default Header
