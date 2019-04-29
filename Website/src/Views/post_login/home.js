import React, { Component } from "react"
import Header from '../../Components/Datapage/header'
import Footer from '../../Components/AllPages/footer_home'
import Table from '../../Components/Tables/table'
import Navbar2 from '../../Components/Datapage/navbar2'
import DateFormatt from './date'
import Popup from '../../Components/AllPages/popup'
import '../../CSS/Datapage/home.css'
import './home.css'

class home extends Component {
    constructor(props){
        super(props)

        /** State variables:
         * - show modal: if true then the modal will be shown on screen
         * - firstName: the first name of the logged in employee. Initally set to an empty string
         * - lastname: the last name of the logged in employee. Initally set to an empty string
         * - equipmentTableData: a javascript object literal that holds all the data for the owned equiptment table.
         *    Initally set to an empty array
         * - eventTableData: a javascript object literal that holds all the data for the upcomming company events.
         *    Initally set to an empty array
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
        this.handleClick = this.handleClick.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    /**
     * This function fetches data from the database before the page fully renders so that the data fetch can be rendered onto the screen
     * All data that is fetch from this function is stored in the pages state variable
     */
    componentDidMount() {
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

        // Fetch the upcomming events
        fetch('database/events/5')
        .then( res => res.json())
        .then( data => {
            const newObj = data.message.map( obj => {
                let b = {
                    event: obj.event_title,
                    day: this.getDay(obj.start_time),
                    time: this.getTime(obj.start_time, obj.end_time),
                    location: obj.name
                }
                return b
            })
            this.setState({
                eventTableData: newObj,
                eventTableExtras: data.message
            })
        })
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

    handleClick(event) {
        const index = parseInt(event.currentTarget.getAttribute('data-key'))
        this.setState({
            showModal:true,
            modalBody: this.state.eventTableExtras[index].description,
            modalHeader: this.state.eventTableExtras[index].event_title
        })
    }

    toggleModal = () => this.setState({
        showModal: !this.state.showModal
      })

    render() {
        const link = '#'

        // Render the proper item onto the screen. If there are not any items then we will render a header otherwise we will render a table
        let renderInv = null
        let renderEvents = null
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
        if(this.state.eventTableData.length > 0){
            renderEvents = <div className="table-responsive">
                                <Table
                                    tableType='table table-hover'
                                    headers= {['Event', 'Day', 'Time', 'Location']}
                                    body={this.state.eventTableData}
                                    rowClick={this.handleClick}
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
                                                <tr key='1' value='0' test='6' onClick={this.handleClick}>
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
                                toggle = {this.toggleModal}
                                showModal={this.state.showModal}
                                body={this.state.modalBody}
                                header={this.state.modalHeader}
                            />
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