import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import Curriculum from './screens/Curriculum'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'
import Verification from './screens/Verification'

const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/verification" component={Verification} />
                <Route path="/register" component={RegisterPage} /> 
                <Route path="/sign-in" component={LoginPage} /> 
                <Route path="/course/:courseName" component={Curriculum} />
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default App