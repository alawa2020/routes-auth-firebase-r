import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch, 
} from 'react-router-dom'

import Menu from './Menu'
import Home from './Home';
import Admin from './Admin';
import Login from './Login';
const RouterProject = () => {
    return (
        <div>
            <Router>
                <Menu></Menu>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
            
        </div>
    )
}

export default RouterProject
