import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/**
 * The Header class creates the navbar that is at the top of the homepage.
 * This class handles all user actions on the navbar and passes the current
 * select navbar item to its parent component (App.js)
 * @extends Component
 */
class Navbar extends Component {

  constructor(){
    super()
    // State variables:
    //  - menu controls the navbar when the screen size is below
    //    bootstrap-sm attribute.
    //  - dropdown controls the About dropdown bar
    //  - selectValue is the id associated with one of the dropdown bars elements
    this.state = {
      menu: false,
      dropdown: false,
      selectValue: ""
    }
    // font awsome logo
    this.gitHubIcon = <FontAwesomeIcon icon={faGithub} />

    // binding functions that will alter the state/ take event as input
    this.toggleMenu = this.toggleMenu.bind(this)
    this.checkDropDown = this.checkDropDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  /**
   * Handles all navbar hide/show effects
   * @param  {[type]} event the event associated witht the listener
   * @return none
   */
  toggleMenu(event){
    const name = event.currentTarget.name
    this.setState({
      [name]: !this.state[name]
    })
  }

  /**
   * [checkDropDown description]
   * @return {[type]} [description]
   */
  checkDropDown(){
    if(this.state.dropdown) {
      this.setState({dropdown: false})
    }
  }

  /**
   * handes the hide effect for the onBlur listener for the dropdown menu
   * this function is needed so that the drop down is properly hidden
   * @param  {[type]} event the event associated witht the listener
   * @return none
   */
  handleChange(event) {
    const page = event.target.id
    this.props.action(page)
    }

  //<img src={logo} className="navbar-brand img-fluid" alt="Responsive image"/>

render(){
  const show = (this.state.menu) ? "show" : ""
  const showDrop = (this.state.dropdown) ? "show" : ""
  const link = "#"
  return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a className="navbar-brand" href={link} style={{color: "white"}}>ABC Corp</a>
        <button className="navbar-toggler" type="button" name="menu" onClick={ this.toggleMenu }>
          <span className="navbar-toggler-icon" onClick={this.toggleMenu} name="menu"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav">
            <a className={ this.props.page === 0 ? "nav-item nav-link active disabled": "nav-item nav-link"} href={link} onClick={ this.handleChange} id="0">Login <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/">Features</a>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" value={this.state.selectValue} onClick={ this.toggleMenu }  onBlur ={this.checkDropDown} tabIndex="-1" name="dropdown" href={link} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className={"dropdown-menu " + showDrop} value={this.state.selectValue} onMouseDown={ this.handleChange} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" name="hi" id="1" href={link}>Database</a>
                <a className="dropdown-item" id="2" href={link}>Server</a>
                <a className="dropdown-item" id="3" href={link}>Website</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" value="#" href={link}>The Project</a>
              </div>
            </li>
            <a className="nav-item nav-link" href="https://github.com/shu-csas-changgar/final-project-db-final">Github {this.gitHubIcon} <span className="sr-only">(current)</span></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
