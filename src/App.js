import React, { Component } from 'react';
import './homepage.css';
import Footer from "./Components/footer_home"
import Header from "./Components/header_home"
import "./CSS/header_homepage.css"
import Login from "./Components/login_box"

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="App">
          <div className="d-flex justify-content-center">
            <Login/>
          </div>
          <Footer />
        </div>
      </div>
        );
  }
}

export default App;
