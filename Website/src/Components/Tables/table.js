import React from "react"

function table(props){
    return(
        <table className="table m-2">
            <thead>
                <tr className="thead-light">
                    {
                        props.headers.map( (name, i) => {
                            return(<th key={i} scope="col">{name}</th>)
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.body.map( (obj, i) => {
                        return(
                            <tr key={i}>
                                {
                                    Object.keys(obj).map((key, j) => {
                                        return (<td key={j}>{obj[key]}</td>)

                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default table