import React, { Component } from "react"
import Header from '../../Components/Datapage/header'
import Table from '../../Components/Tables/table'
import Navbar from '../../Components/Datapage/navbar'
import DateFormatt from './date'
import Popup from '../../Components/Modals/popup'
import '../../CSS/Datapage/home.css'
import './home.css'

class home extends Component {
    constructor(props){
        super(props)

        /** State variables:
         * - show modal: if true then the modal will be shown on screen
         * - modalHeaders: The tile that the modal will display 
         * - modalBody: The body text that the modal will display
         * - firstName: the first name of the logged in employee. Initally set to an empty string
         * - lastname: the last name of the logged in employee. Initally set to an empty string
         * - equipmentTableData: a javascript object literal that holds all the data for the owned equiptment table.
         *    Initally set to an empty array
         * - eventTableData: a javascript object literal that holds all the table data for upcomming company events.
         *    Initally set to an empty array. This object is a shortened wersion of eventTableExtras for table rendering purposes
         * - eventTableExtras: a javascript object literal that holds all the data for the upcomming company events.
         *    Initally set to an empty array. When data is fetched from the server, this array will hold all the data recieved
         */ 
        this.state ={
            showModal: false,
            modalHeader: null,
            modalBody: null,
            firstName: null,
            lastName: null,
            equipmentTableData: [],
            eventTableData: [],
            eventTableExtras:[]
        }
        // Add the redux global variables
        this.store = this.props.store;

        // bind necessary functions
        this.handleTableClick = this.handleTableClick.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    /**
     * This function fetches data from the database before the page fully renders so that the data fetch can be rendered onto the screen
     * There are 3 fetches that are called:
     *  - Type: POST => Fetches employee equiptment based on who is logged in
     *  - Type: POST => Fetches an employee's first and name name when given an id
     *  - Type: GET => Fetches the upcomming corperate events bases on the amount requested
     * All data that is fetch from this function is stored in state variables
     */
    componentDidMount() {
        Promise.all([
            fetch('database/employee/equipment', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: this.store.getState().account_id})
            }),
            fetch('database/employee/name', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: this.store.getState().account_id})
            }),
            fetch('database/events/5')
        ])
        .then( (results) => {return Promise.all(results.map( res => (res.status === 200 ? res.json() : "INVALID")))})
        .then(([r1, r2, r3]) =>{
            let equipmentTableData = []
            let firstName = null
            let lastName = null
            let eventTableData = []

            if (r1 !== "INVALID") equipmentTableData = r1.message
            if (r2 !== "INVALID") {
                firstName = r2.message[0].first_name
                lastName = r2.message[0].lastName
            }
            if (r3 !== "INVALID") {
                eventTableData = r3.message.map( obj => {
                    return{
                        event: obj.event_title,
                        day: this.getDay(obj.start_time),
                        time: this.getTime(obj.start_time, obj.end_time),
                        location: obj.name
                    }
                })
            }
            this.setState({
                equipmentTableData: equipmentTableData,
                firstName: firstName,
                lastName: lastName,
                eventTableData: eventTableData,
                eventTableExtras: r3.message
            })
        })
        .catch( error => {console.log(`Error duing fetches ${error}`)})
    }

    /**
     * Formatts the start and end time into one line
     * @param {MySQL DataTime} start_time the time that an event starts
     * @param {MySQL DateTime} end_time the time that an event ends
     */
    getTime(start_time, end_time) {
        var startDate = new Date(start_time)
        var endDate = new Date(end_time)
        return(DateFormatt.startToEnd(startDate,endDate))
    }

    /**
     * Returns the day of week , month, and day that an event start
     * @param {MySQl DateTime} start_time the time that the event start.
     */
    getDay(start_time) {
        var date = new Date(start_time)
        return(DateFormatt.dayOfWeekAndMonth(date))
    }

    /**
     * Handles the onclick functionality of a table row. More specifically this function
     * is used to show a modal for a specified table row.
     * @param {Synthetic Event} event 
     */
    handleTableClick(event) {
        const index = parseInt(event.currentTarget.getAttribute('data-key'))
        this.setState({
            showModal:true,
            modalBody: this.state.eventTableExtras[index].description,
            modalHeader: this.state.eventTableExtras[index].event_title
        })
    }

    render() {
        const link = '#'
        console.log(this.state.equipmentTableData)
        /**
         * Check if tables to be rendered onto the screen have data. If they do then create the table component
         * If they dont then create a message to be rendered where the table would have been rendered
         */
        let renderInv = null
        let renderEvents = null

        // Equiptment Table conditons
        if(this.state.equipmentTableData.length > 0){
            renderInv = <div className="d-flex row justify-content-center">
                            <Table
                                tableType="table m-2"
                                headers={['Item', 'Location', 'Serial Number', 'Type']}
                                body={this.state.equipmentTableData}
                                rowClick={null}
                            />
                        </div>
        } else{
            renderInv = <div className="d-flex row justify-content-center">
                            <h2 className="text-muted" style={{marginTop:'40px', marginBottom:'40px'}}>You dont own any equipment at this time :(</h2>
                        </div>
        }

        // Event table conditions
        if(this.state.eventTableData.length > 0){
            renderEvents = <div className="table-responsive">
                                <Table
                                    tableType='table table-hover'
                                    headers= {['Event', 'Day', 'Time', 'Location']}
                                    body={this.state.eventTableData}
                                    rowClick={this.handleTableClick}
                                />
                           </div>
        } else {
            renderEvents = <div className="d-flex row justify-content-center">
                                <h4 className="text-muted" style={{marginTop:'40px', marginBottom:'40px'}}>There are no upcomming events</h4>
                            </div>
        }
        
        return(
            <div>
                <div >
                    <Header />
                </div>
                <div className="container mt-3" id="view-container" style={{marginBottom: "30px"}}>
                    <div className="row bg-light" style={{borderTopLeftRadius:"10px", padding:"8px", borderTopRightRadius:"10px",borderBottom:"1px solid #A0A0A0"}}>
                        <Navbar 
                            history = {this.props.history}
                            home = {true}
                        />
                    </div>
                    <div className="d-flex row justify-content-center mt-5">
                        <h1>Welcome {this.state.firstName}</h1>
                    </div>
                    <div className="flex-row mt-5">
                        <div className="container" id="container-1">
                            {
                                renderInv
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
                                    <p className="card-text">Below are the next 5 upcomming corporate events. Please click on an event for more infromation.</p>
                                    <div className="table-responsive">
                                        {
                                            renderEvents
                                        }
                                    </div>
                                    <a href={link}className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className={`container ${this.state.showModal ? 'modal-open' :''}`}>
                            <Popup 
                                toggle = {() => this.setState({showModal: !this.state.showModal})}
                                showModal={this.state.showModal}
                                body={this.state.modalBody}
                                header={this.state.modalHeader}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home