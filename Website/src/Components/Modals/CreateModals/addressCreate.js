import React, { Component } from 'react'

class Address extends Component{

    constructor(props){
        super(props)

        /** State variables:
         * - cityStateMap: a map obj that will hold the information for the city and state inputs. The map is 
         *      structured as: key = state, values = citys that belong to the state. The map is initally set to empty
         * - address: a stirng that holds the value for the address <input> field. Initally set to an empty string.
         * - address2: a stirng that holds the value for the address2 <input> field. Initally set to an empty string.
         * - city: a string that holds the value for the city <input> field. Initally set to an empty string.
         * - county: a string that holds the value for the county <input> field. Initally set to an empty string.
         * - state: a string that holds the value for the state <input> field. Initally set to an empty string.
         * - country: a string that holds the value for the country <input> fields. Initally set to 'United States'.
         * - postal: a string that holds the value for the postal <input> field. Initally set to an empty string.
         */
        this.state= {
            cityStateMap: new Map(),
            address: '',
            address2: '',
            city: "",
            county: "",
            state: "",
            country: "United States",
            postal: ""
        }
        // Bind necessarry functions
        this.handleChange = this.handleChange.bind(this)
        this.renderStates = this.renderStates.bind(this)
    }
    
    /**
     * Fetches data from the database and places the data into the appropriate state variables. As follows:
     * - fetch[cities]: Turns the data into a map and then places it into the [cityStateMap] state variable.
     */
    componentDidMount(){
        fetch('/database/cities/all')
        .then( res => { return res.status===200? res.json() : "Invalid"})
        .then( data => {
            const map = new Map(JSON.parse(data.data))
            this.setState({
                cityStateMap: map
            })
        })
    }

    /**
     * Handles all of the input fields onChange attributes. When called will place the input fields data into the
     * appropriate state varibales.
     * @param {Javascript event} event the event associated witht the listener
     */
    handleChange(event){
        const value =event.target.value
        const name = event.target.name
        this.props.action(name, value)
        this.setState({
            [name]: value
        })
    }


    /**
     * Returns all the keys of a given map into an array.
     * @param {Javascript Map Object} aMap A map to extract the key names from.
     */
    renderStates(aMap){
        let rows = []
        for (var key of aMap.keys()) {
            rows.push(key)
        }
        return rows
    }

    /**
     * Returns all of the values that are associated with an key. Data is returned as an array. 
     * @param {Javascript Map Object} aMap A map to extract the values from.
     */
    renderCities(aMap) {
        let values = aMap.get(this.state.state)
        return values == null ? [] : values
    }

    render(){
        console.log(this.props)
        // Constant to hold the states array
        const s = this.renderStates(this.state.cityStateMap)
        // Constant to hold the cities array
        const c = this.renderCities(this.state.cityStateMap)
        return(
            <div>
                 <hr style={{backgroundColor:"#A0A0A0"}}/>
                 <h5 className="modal-title mb-2" id="exampleModalLabel">New Address</h5>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputCity">* Address</label>
                        <input type="text" name='address1' onChange={this.handleChange} className="form-control"  placeholder="1234 Main St" required/>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputCity">Address 2</label>
                        <input type="text" name='address2' onChange={this.handleChange} className="form-control" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">* State/Province</label>
                        <input list="encodings2" type="text" name="state" onChange={this.handleChange} className="form-control" placeholder="State/Province" autoComplete='new-password' required/>
                        <datalist id="encodings2">
                            {
                                s.map( (item, i) =>{
                                    return <option key={i} value={item}>{item}</option>
                                })
                            }
                        </datalist>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">* City</label>
                        <input list="encodings" type="text" name='city' onChange={this.handleChange} disabled={this.state.state !== "" ? false : true} className="form-control" placeholder="City" autoComplete='new-password' required/>
                        <datalist id="encodings">
                            {
                                c.map( (city, i) => {
                                    return <option key={i} value={city}>{city}</option>
                                })
                            }
                        </datalist>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">County</label>
                        <input type="text" name="county" onChange={this.handleChange} disabled={this.state.state !== "" ? false : true} className="form-control" id="inputZip"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">* Zip</label>
                        <input type="text" name="postal_code" onChange={this.handleChange} disabled={this.state.state !== "" ? false : true} className="form-control" id="inputZip" required/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">* Country</label>
                        <input type="text" name='country' onChange={this.handleChange} value={this.state.country} disabled={this.state.state !== "" ? false : true} className="form-control" autoComplete='new-password'required/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address 