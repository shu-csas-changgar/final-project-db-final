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
  }

  handleSubmit() {

  }
  render() {
    return(
        <div className="login bg-secondary">
          <form onSubmit={this.handleSubmit}>
            <h5 className="d-flex justify-content-center">Log In</h5>
            <hr />

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">{this.userIcon}</span>
                </div>
                <input type="text" className="form-control" placeholder="jsmith@example.com" aria-label="Username" aria-describedby="basic-addon1"/>
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
                <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
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
