import React, { Component } from 'react'

class CheckRow extends Component {

    constructor(props){
        super(props)
        this.state ={
            active: false
        }
        this.handleCheckClick = this.handleCheckClick.bind(this)
    }

    handleCheckClick(event) {
        this.setState({active: !this.state.active})
    }

    render(){
        return(
            <tr className={this.state.active? "table-active" : ""} key={this.props.i} id={this.props.id} onClick={this.props.rowClick}>
                <td>
                    <input className="position-static" id={this.props.i} type="checkbox" onClick={this.handleCheckClick}/>
                </td>
                    {
                        Object.keys(this.props.obj).map((key, j) => {
                            return (<td key={j}>{this.props.obj[key]}</td>)
                        })
                    }
            </tr>
        )
    }
}

export default CheckRow