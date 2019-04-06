import React from "react"

/**
 * This fuction creates a table object for the database page
 * @param {*} props the props are:
 *  - tableName of type string
 *  - data: an array of table data that consistes of the values dataType, key, NN, UQ, AI
 *      an example of this data can be found in table_data.js.
 */
function table(props) {
  // Custom CSS for the table components
  const style1 = {
    fontWeight: "normal"
  }
  // The data prop that is passes to this function
  const data = props.data

    return (
        <div className="container mt-4" id="custom-container-1">
          <h4 className="m-2">{props.tableName}</h4>
          <div className="row justify-content-center">
            <div className="table-responsive m-1">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Column Name</th>
                    <th scope="col">Datatype</th>
                    <th scope="col">PK/FK</th>
                    <th scope="col">NN</th>
                    <th scope="col">UQ</th>
                    <th scope="col">AI/AU</th>
                  </tr>
                </thead>
                <tbody>
                {
                  // Map through the data and add its elements to the table
                  data.map((e,i) => {                    
                    return (
                      <tr key={i}>
                        <th scope="row" style={style1}>{e.colName}</th>
                        <td>{e.datatype}</td>
                        <td>{e.key}</td>
                        <td>{e.NN}</td>
                        <td>{e.UQ}</td>
                        <td>{e.AI}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
              <div>
                <h5 className="ml-3">About</h5>
                <p className="ml-4">{props.description}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default table