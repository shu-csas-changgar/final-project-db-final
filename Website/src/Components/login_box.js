import React, { Component } from 'react';
import "../CSS/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {

  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }

    this.userIcon = <FontAwesomeIcon icon={faUser} />
    this.lockIcon = <FontAwesomeIcon icon={faLock} />
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated"
    this.state.email.length > 0 && this.state.password.length > 0 ? console.log("Ready to continue") : console.log("Fields not complete")
    /*
    const e = this.state.email
    console.log(e.length)
    e.length > 0 ? event.target.className += " was-validated" : console.log("bad")
*/
  }

  render() {
    return(
        <div className="login bg-secondary">
          <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>
            <h5 className="d-flex justify-content-center">Log In</h5>
            <hr />

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">{this.userIcon}</span>
                </div>
                <input type="text" name="email" onChange={this.handleChange} className="form-control" placeholder="jsmith@example.com" aria-label="Username" aria-describedby="basic-addon1" required/>

              </div>
              <div className="d-flex justify-content-center mb-3">
                <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">{this.lockIcon}</span>
                </div>
                <input type="password" onChange={this.handleChange} name="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required/>
              </div>
            </div>

            <div className='d-flex justify-content-center mt-4'>
              <button type="Log In" style={{marginBottom:"10px"}} className="btn btn-light ">Submit</button>
            </div>
          </form>
        </div>
    )
  }
}
export default Login
