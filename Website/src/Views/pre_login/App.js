import React, { Component } from 'react';
import '../../CSS/Homepage/homepage.css'
import Footer from "../../Components/AllPages/footer_home"
import Navbar from "../../Components/Homepage/navbar"
import Login from "../../Components/Homepage/login_box"
import Database from "../../Components/Homepage/database"
import Servers from "../../Components/Homepage/Server"
import Website from "../../Components/Homepage/website"
import Project from "../../Components/Homepage/project"

class App extends Component {

  /** State variables:
   * - list: a list containing all the child components for this view. Bases on the states index one of the
   *      components from this list will be dynamiaclly rendered on the screen
   * - index: represents the position in the list. This position will be the item that is rendered on the screen    
   */
  constructor(props) {
    super(props)
    this.state = {
      list: [Login, Database, Servers, Website, Project],
      index: 0,
    }
    this.store = this.props.store;
    this.handler = this.handler.bind(this)

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

  render() {

    // The child component that sould be loaded. The componet is initally set to the login
    // screen. But will change if the handler updates the state value for index
    const TagName = this.state.list[this.state.index]
    return (
        <div>
          <div className="header">
            <Navbar currentPage={this.state.index} action={this.handler} page={this.state.index}/>
          </div>
          <div className="d-flex justify-content-center" id="cMargin">
            <div className="container App">
              <div >
                <TagName
                  store={this.store}
                  history={this.props.history}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        );
  }
}
export default App;
