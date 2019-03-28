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
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h5 className="d-flex justify-content-center">Log In</h5>
            <hr />
            <div className="form-group">
              <div className="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">{this.userIcon}</span>
                  <input type="email" id="loginInput" className="form-control" placeholder="jsmith@example.com"/>
                </div>
              </div>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">{this.lockIcon}</span>
                  <input type="password" id="loginInput" className="form-control" placeholder="Password"/>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <button type="Log In" className="btn btn-dark ">Submit</button>
            </div>
            </form>
        </div>
    )
  }
}
export default Login
