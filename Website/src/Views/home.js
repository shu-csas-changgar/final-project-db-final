import React, { Component } from "react"
import Navbar from '../Components/Datapage/navbar'

class home extends Component {

    render() {
        return(
            <div>
                <div className="flex-row">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default home