import React from "react"

/**
 * This fuction creates a table object when given the proper arguements
 * @param {*} props the props are:
 *  - tableName of type string
 *  - description: a string that will be renderd directly under the table
 *  - headers: a steing array that contains all the column headers
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
                    {
                      // map through the column headers and render them
                      props.tableHeaders.map((e,i) => {
                        return(
                          <th key={i} scope="col">{e}</th>
                        )
                      })
                    }
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