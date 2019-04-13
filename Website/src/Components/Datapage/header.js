import React, { Component } from "react"
import '../../CSS/Datapage/Components/header.css'
import '../../CSS/Datapage/Items/buttons.css'
class header extends Component{


    render() {
        return(
            <div className="row justify-content-between no-gutters" id="header-row">
                <div class="col-4">
                    <p id="c-p" className="m-3">ABC Corp</p>
                </div>
                <div class="col-4">
                    <a href="http://localhost:3000/" id="a-custom" class="expand float-right m-4">logout</a>
                </div>
            </div>
        )
    }
}

export default header