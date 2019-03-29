import React, { Component } from 'react';
import './CSS/homepage.css'
import Footer from "./Components/footer_home"
import Header from "./Components/header_home"
import Login from "./Components/login_box"
import WelcomeMsg from "./Components/welcomeMessage"

class App extends Component {
  render() {
    return (
        <div>
          <div className="header">
            <Header />
          </div>
          <div className="d-flex justify-content-center">
            <div className="container App">
              <div className="flex-row justify-content-center">
                <WelcomeMsg />
              </div>
              <div className="row justify-content-center" id="logIn">
                <Login/>
              </div>
              <div className="d-flex mt-1 justify-content-center">
                <p style={{fontSize:"12px"}}>Don't have an account? Please contact the IT department to see if you are elegable for one.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        );
  }
}

export default App;
