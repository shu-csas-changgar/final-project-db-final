import React, { Component } from 'react'
import CheckRow from './TableComponents/checkRow'

class CheckedTable extends Component{
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    render(){
        return(
            <table className={this.props.tableType}>
                <thead>
                    <tr className="thead-light">
                        {
                            this.props.headers.map( (name, i) => {
                                return(<th key={i} scope="col">{name}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.fullData.map( (obj, i) => {
                            return(
                                <CheckRow 
                                    id={obj.employee_id}
                                    key={i}
                                    obj={this.props.body[i]}
                                    onClick={this.props.rowClick}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default CheckedTable