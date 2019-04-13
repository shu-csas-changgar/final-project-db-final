import React, { Component } from "react"
import Navbar from '../Components/Datapage/navbar'
import Header from '../Components/Datapage/header'
import Footer from '../Components/AllPages/footer_home'
import '../CSS/Datapage/home.css'
import Navbar2 from '../Components/Datapage/navbar2'

class home extends Component {

    render() {
        return(
            <div>
                <div classname="container-fluid">
                    <Header />
                </div>
                <div className="container mt-3" id="view-container">
                    <div className="row bg-light" style={{borderTopLeftRadius:"10px", padding:"8px", borderTopRightRadius:"10px",borderBottom:"1px solid black"}}>
                        <Navbar2 />
                    </div>
                    <div className="d-flex row justify-content-center mt-5">
                        <h1>Welcome Thanos</h1>
                    </div>
                    <div className="flex-row mt-5">
                    <div className="container" id="container-1">
                    <div className="d-flex row justify-content-center">
                        <h4>Currently Owned Items</h4>
                        </div>
                    <div className="d-flex row justify-content-center">
                        <table class="table m-2 table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Location</th>
                                <th scope="col">Status</th>
                                <th scope="col">Time Changed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"> IPhone 6</th>
                                <td>Building 1</td>
                                <td>Owned</td>
                                <td>2038-01-19 03:14:07</td>
                                </tr>
                                <tr>
                                <th scope="row">Infinity Gauntlet</th>
                                <td>Titan</td>
                                <td>Leased</td>
                                <td>20319-01-19 03:33:32</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <h2 className="mt-5">Upcomming Corperate Events</h2>
                    <ul class="d-flex list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    
                </div>
                
                <div style={{marginTop:"90px"}}>
                <Footer />
                </div>
            </div>
        )
    }
}

export default home