import React, { Component } from 'react';
import "../../CSS/Homepage/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import WelcomeMsg from "./welcomeMessage"
import { success, emp_update } from '../../Redux/actions/index'

class Login extends Component {

  constructor(props){
    super(props)

    /** State variables:
     * - email: the email for the login credentials. Initally set to empty
     * - password: the password for the login credentials. Initally set to empty
     * - message: a string that tells the user if their log in cradentials were wrong.
     *    Message is initally empty and will only change if the server fails to log the user in
     */     
    this.state = {
      email: "",
      password: "",
      message: ""
    }

    this.store = this.props.store
    //FontAwesome Icons
    this.userIcon = <FontAwesomeIcon icon={faUser} />
    this.lockIcon = <FontAwesomeIcon icon={faLock} />

    // binding functions that will alter the state/ take event as input
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * Handels the changing of state variables
   * @param  {[type]} event the event associated with the listener
   * @return {[type]} none
   */
  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  /**
   * handles the form submission. this function checks if the input fields are
   * valid for the login to continue. If they arent then does not validate the
   * input fields
   * @param  {[type]} event the event associated witht the listener
   * @return {[type]} none
   */
  handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated"
    this.state.email.length > 0 && this.state.password.length > 0 ? this.sendData() : console.log("Fields not complete")
  }


  /**
   * This function sends a post request to the server to decide if the email and passoword
   * are associated with an account. If the promise is false then state.message is set so the user knows
   * to try to login again. If the promise is true then the user will be sent a new view
   */
  sendData = () => {
    fetch('database/employee/credentials', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then( res => res.status === 200? res.json() : "INVALID")
    .then( data => {
      if (data === "INVALID") {
        // Sent the state's message
        this.setState({message: "Username or password is incorrect"})
      }
      else{
        // Set the global state to true
        this.store.dispatch(success())
        this.store.dispatch(emp_update(data.info[0].account_id))
        this.props.history.push('/database')
      } 
    })
    .catch((error) =>{
      console.log("error " + error)
      this.setState({message: "Unable to connect to the server at this time"})
    })
  }

  /**
   * This function sends a request to the server for information. curently this function has no use
   */
  getPass = () =>{
    fetch('login')
    .then(res => res.json())
    .then(response => console.log(response.res))
  }

  render() {

    return(
      <div>
        <div className="flex-row justify-content-center">
          <WelcomeMsg />
        </div>
        <div className="row justify-content-center" >
        <div className="flex-container" id="login_container">
        <div className="row justify-content-center">
          <div className="login m-3">
            <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
              <h5 className="d-flex justify-content-center">Log In</h5>
              <hr />

              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{this.userIcon}</span>
                  </div>
                  <input type="text" name="email" onChange={this.handleChange} className="form-control" autoComplete="on" placeholder="jsmith@example.com" aria-label="Username" aria-describedby="basic-addon1" required/>

                </div>
                <div className="d-flex justify-content-center mb-3">
                  <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{this.lockIcon}</span>
                  </div>
                  <input type="password" onChange={this.handleChange} name="password" className="form-control" autoComplete="off" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <small id="loginErr" className="form-text">{this.state.message}</small>
                </div>
              </div>

              <div className='d-flex justify-content-center mt-4'>
                <button type="Log In" style={{marginBottom:"10px"}} className="btn btn-light">Submit</button>
              </div>
            </form>
          </div>
          </div>
          <div className="row justify-content-center" id="helper-row">
            <p style={{fontSize:"12px"}} id="helper">Don't have an account? Please contact the IT department to see if you are eligible for one.</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default Login
