import React from "react"
import DBImage from "../../Images/database_modle.PNG"
import Tables from "../../table_data"
import "../../CSS/Homepage/database.css"



import Table from "../Tables/database_table"

function databaseInfo() {
  // The array of table objects that will be dynamically rendered
  const arr = Tables.tables

  return(
    <div>
      <div className="container" style={{color: "#ffffff"}}>
        <div className="row justify-content-center mb-4">
          <h1 className="display-1">The Database</h1>
        </div>
        <div className="row justify-content-center">
          <img className="d-block" src={DBImage} alt="Responsive img" />
          <p id="update">Model last updated 3/31/19</p>
        </div>
      </div>

      <div>
      {
        // Map through the object array and create a table componet
        // In this table componet we will pass the table name and its data
        // as props
        arr.map( (table,i) => {
          return (
            <Table
              tableHeaders = {['Column Name','Datatype','PK/FK','NN','UQ','AI/AU']}
              tableName = {table.tableName}
              data = {table.data}
              description = {table.description}
              key = {i}
          />)
        })
      }
      </div>
    </div>
  )
}

export default databaseInfo
