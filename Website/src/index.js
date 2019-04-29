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
import NotFound from './Views/errors/notFound'

//Redux imports
import { createStore } from 'redux'
import myApp from './Redux/reducers/index'

//Create redux store
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
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

/**
 * This function renders the views and their componetns onto the screen
 */
function render() {
    ReactDOM.render(routing, document.getElementById('root'));
}


store.subscribe(render) // make sure that the render function is called whenever the state  of the application changes
render() // render the view



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
