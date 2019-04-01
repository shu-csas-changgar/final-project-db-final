import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import DBImage from "../../Images/database_modle.PNG"



function databaseInfo() {

  //"http://via.placeholder.com/640x400"
  // Custom style to make 1st ele in table row to now be bold
  const style1 = {
    fontWeight: "normal"
  }

  const checkmark = <FontAwesomeIcon icon={faCheck} />

  return(
    <div>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <h1 className="display-1">The Database</h1>
        </div>
        <div className="row justify-content-center">
          <img className="d-block" src={DBImage} alt="Responsive img" />
          <p style={{fontSize: "12px"}}>Model last updated 3/31/19</p>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="mb-3">Table Views:</h3>
        <div className="container" id="custom-container-1">
          <h4 className="m-2">Inventory</h4>
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
                    <th scope="col">AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={style1}>inventory_id</th>
                    <td>INT</td>
                    <td>PK</td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>location_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>owner_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>equipment_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>employee_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>last_update</th>
                    <td>DATETIME</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="container mt-4" id="custom-container-1">
          <h4 className="m-2">Employee</h4>
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
                    <th scope="col">AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={style1}>employee_id</th>
                    <td>INT</td>
                    <td>PK</td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>first_name</th>
                    <td>VARCHAR(45)</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>last_name</th>
                    <td>VARCHAR(45)</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>email</th>
                    <td>VARCHAR(45)</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td>{checkmark}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>location_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>account_id</th>
                    <td>INT</td>
                    <td>FK</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>cell_number</th>
                    <td>INT</td>
                    <td></td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row" style={style1}>last_update</th>
                    <td>DATETIME</td>
                    <td></td>
                    <td>{checkmark}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default databaseInfo
