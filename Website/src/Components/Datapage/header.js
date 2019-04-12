import React, { Component } from "react"

class header extends Component{


    render() {
        return(
            <div className="row">
                <div class="d-inline-flex col">
                    <p className="m-3" style={{fontSize:"30px"}}>ABC Corp</p>
                </div>
                <div class="col">
                    <button className="btn btn-custom-red float-right m-3" type="submit">Button</button>
                </div>
            </div>
        )
    }
}

export default header