import React, { Component } from "react"
import Navbar from '../Components/Datapage/navbar'
import Header from '../Components/Datapage/header'
import '../CSS/Datapage/home.css'

class home extends Component {

    render() {
        return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="container" id="view-container">
                    <div className="row" style={{borderTopLeftRadius:"10px", backgroundColor:"white", borderTopRightRadius:"10px"}}>
                        <Navbar />
                    </div>
                    <div className="d-flex row justify-content-center mt-5">
                        <h1>Welcome Josh</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default home