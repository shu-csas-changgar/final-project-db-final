import React, { Component } from 'react';
import './CSS/Homepage/homepage.css'
import Footer from "./Components/AllPages/footer_home"
import Navbar from "./Components/Homepage/navbar"
import Login from "./Components/Homepage/login_box"
import Database from "./Components/Homepage/database"
import Servers from "./Components/Homepage/Server"
import Website from "./Components/Homepage/Website"
//import WelcomeMsg from "./Components/welcomeMessage"

class App extends Component {

  constructor() {
    super()
    this.state = {
      list: [Login, Database, Servers, Website],
      index: 0
    }

    this.handler = this.handler.bind(this)
  }

  handler(id) {
    console.log("in handler")
    this.setState({
      index: parseInt(id)
    })

  }

  render() {
    const TagName = this.state.list[this.state.index]
    return (
        <div>
          <div className="header">
            <Navbar action={this.handler} page={this.state.index}/>
          </div>
          <div className="d-flex justify-content-center" id="cMargin">
            <div className="container App">
              <div >
                <TagName/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        );
  }
}
export default App;
