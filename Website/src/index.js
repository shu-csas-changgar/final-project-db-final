import React from 'react';
//import "bootstrap/dist/css/bootstrap.css";
import './scss/custom.scss'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { ProtectedRoute } from "./protectedRoute"
// View imports below
import App from './Views/App';
import Home from './Views/home'
import NotFound from './Views/notfound'


//                <Route path="/database" component={Home} />


const routing =(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <ProtectedRoute
                    exact path = "/database"
                    component={Home}
                />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
