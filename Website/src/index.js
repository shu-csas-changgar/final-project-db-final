import React from 'react';
//import "bootstrap/dist/css/bootstrap.css";
import './scss/custom.scss'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { ProtectedRoute } from "./protectedRoute"

// View imports below
import App from './Views/pre_login/App'
import Home from './Views/post_login/home'
import Inventory from './Views/post_login/inventory'
import Events from './Views/post_login/events'
import Reservations from './Views/post_login/reservations'
import Leases from './Views/post_login/leases'
import Employees from './Views/post_login/employees'
import NotFound from './Views/errors/notFound'
import AddPage from './Views/post_login/addPage'

//Redux imports
import { createStore } from 'redux'
import myApp from './Redux/reducers/index'
//import StateLoader from './stateLoader'

// create a stateloader that will save the redux state on refresh
//const stateLoader = new StateLoader();
// Create redux store
//let store = createStore(myApp, stateLoader.loadState())
let store = createStore(myApp)

// Create the routing scheme
const routing =(
    <Router>
        <div>
            <Switch>
                <Route 
                    exact path="/" 
                    render={(props) =><App {...props} store={store}/>}
                />
                <ProtectedRoute
                    exact path = "/database"
                    store = {store}
                    component={Home}
                />
                <ProtectedRoute
                    exact path = "/employees"
                    store = {store}
                    component={Employees}
                />
                <ProtectedRoute
                    exact path = "/inventory"
                    store = {store}
                    component={Inventory}
                />
                <ProtectedRoute
                    exact path = "/reservations"
                    store = {store}
                    component={Reservations}
                />
                <ProtectedRoute
                    exact path = "/events"
                    store = {store}
                    component={Events}
                />
                <ProtectedRoute
                    exact path = "/leases"
                    store = {store}
                    component={Leases}
                />
                <ProtectedRoute
                    exact path = "/addpage"
                    store ={store}
                    component={AddPage}
                 />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

/**
 * This function renders the views and their componetns onto the screen
 */
function render() {
    ReactDOM.render(routing, document.getElementById('root'))
}

// was render
// store.subscribe(() =>{stateLoader.saveState(store.getState())})
store.subscribe(render)
render() // render the view



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
