import React, { Component } from "react"
//import Navbar from '../Components/Datapage/navbar'
import Header from '../../Components/Datapage/header'
import Footer from '../../Components/AllPages/footer_home'
import '../../CSS/Datapage/home.css'
import Navbar2 from '../../Components/Datapage/navbar2'
//import Navbar from '../../Components/Datapage/navbar'
class home extends Component {

    componentDidMount() {
        
    }


    render() {
        const link = '#'
        return(
            <div>
                <div >
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
                                <table className="table m-2 table-striped">
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

                    <div className="row" style={{marginTop:"40px", paddingBottom:"10px"}}>
                    <div className="col-md-6">
                            <div className="card border-secondary">
                                <h5 className="card-header">Upcoming Reservations</h5>
                                <div className="card-body">
                                    <p className="card-text">Below are your upcoming reservations for the week.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-light" >
                                                <tr>
                                                <th scope="col">Item</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">item 1</th>
                                                <td>Monday</td>
                                                <td>9:20am - 2:00pm</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">item 2</th>
                                                <td>Wednesday</td>
                                                <td>2:30pm - 4:45pm</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">itme 3</th>
                                                <td>Friday</td>
                                                <td>10:30am - 2:00pm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href={link} className="btn btn-primary">View all</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-secondary">
                                <h5 className="card-header">Upcoming Events</h5>
                                <div className="card-body">
                                    <p className="card-text">Below are the next 5 upcomming corporate events.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-light" >
                                                <tr>
                                                <th scope="col">Event</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Time</th>
                                                <th scope='col'>Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">Bob's Birthday Celebration</th>
                                                <td>Monday</td>
                                                <td>9:20am - 2:00pm</td>
                                                <td>Lounge</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">BBQ</th>
                                                <td>Wednesday</td>
                                                <td>12:30am - 3:45pm</td>
                                                <td>Boss's house</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Quarterly Staff Meeting</th>
                                                <td>Friday</td>
                                                <td>10:30am - 12:00pm</td>
                                                <td>Meeting Room 2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href={link}className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{marginTop:"90px"}}>
                <Footer />
                </div>
            </div>
        )
    }
}

export default home