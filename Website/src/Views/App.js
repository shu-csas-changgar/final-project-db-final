import React, { Component } from 'react';
import '../CSS/Homepage/homepage.css'
import Footer from "../Components/AllPages/footer_home"
import Navbar from "../Components/Homepage/navbar"
import Login from "../Components/Homepage/login_box"
import Database from "../Components/Homepage/database"
import Servers from "../Components/Homepage/Server"
import Website from "../Components/Homepage/website"
import Project from "../Components/Homepage/project"
import { withRouter } from 'react-router-dom'

//import WelcomeMsg from "./Components/welcomeMessage"

class App extends Component {

  constructor() {
    super()
    this.state = {
      list: [Login, Database, Servers, Website, Project],
      index: 0,
      newView: false
    }

    this.handler = this.handler.bind(this)
    this.handClick = this.handClick.bind(this)
  }

  /**
   * Used to recive data from the child component navbar.js
   * @param  {[type]} id The id is a string that is a number that will be
   * passed to the state value index. The index is used to determin which child
   * components the page should laod
   * @return none
   */
  handler(id) {
    this.setState({
      index: parseInt(id)
    })

  }

  handClick(event) {
    this.props.history.push('/database')
  }

  render() {

    console.log(this.state.newView)

    // The child component that sould be loaded. The componet is initally set to the login
    // screen. But will change if the handler updates the state value for index
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
          <button type="Log In" onClick={this.handClick} style={{marginBottom:"10px"}} className="btn btn-custom-red">Submit</button>
          <Footer />
        </div>
        );
  }
}
export default App;
