import React, { Component } from "react"
import Header from '../../Components/Datapage/header'
import Footer from '../../Components/AllPages/footer_home'
import Table from '../../Components/Tables/table'
import Navbar2 from '../../Components/Datapage/navbar2'
import '../../CSS/Datapage/home.css'
import './home.css'

class home extends Component {
    constructor(props){
        super(props)

        /** State variables:
         * - firstName: the first name of the logged in employee. Initally set to an empty string
         * - lastname: the last name of the logged in employee. Initally set to an empty string
         * - equipmentTableData: a javascript object literal that holds all the data for the owned equiptment table.
         *    Initally set to an empty array
         */ 
        this.state ={
            firstName: null,
            lastName: null,
            equipmentTableData: []
        }
        // Add the redux global variables
        this.store = this.props.store;
    }

    /**
     * This function fetches data from the database before the page fully renders so that the data fetch can be rendered onto the screen
     * All data that is fetch from this function is stored in the pages state variable
     */
    componentWillMount() {
        // fetch the employees equipment info
        fetch('database/employee/equipment', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: this.store.getState().account_id})
        })
        .then( res => res.status === 200? res.json() : "INVALID")
        .then( data => {
        if (data === "INVALID") console.log('Invalid id supplied')
        else {
            this.setState({equipmentTableData: data.message})
        } 
        })
        .catch((error) => console.log("error: " + error))

        // Fetch the employees name
        fetch('database/employee/name', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: this.store.getState().account_id})
            })
            .then( res => res.status === 200? res.json() : "INVALID")
            .then( data => {
            if (data === "INVALID") console.log('Invalid id supplied')
            else {
                this.setState({
                    firstName: data.message[0].first_name,
                    lastName: data.message[0].last_name
                })
            } 
            })
            .catch((error) => console.log("error: " + error))
  }

    render() {
        const link = '#'

        // Render the proper item onto the screen. If there are not any items then we will render a header otherwise
        //  we will render a table
        let renderIt = null
        if(this.state.equipmentTableData.length > 0){
            renderIt = <div className="d-flex row justify-content-center">
                            <Table
                                headers= {['Item', 'Location', 'Serial Number', 'Type']}
                                body = {this.state.equipmentTableData}
                            />
                        </div>
        } else{
            renderIt = <div className="d-flex row justify-content-center">
                            <h2 className="text-muted" style={{marginTop:'40px', marginBottom:'40px'}}>You dont own any equipment at this time :(</h2>
                        </div>
        }

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
                        <h1>Welcome {this.state.firstName}</h1>
                    </div>
                    <div className="flex-row mt-5">
                        <div className="container" id="container-1">
                            {
                                renderIt
                            }
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