import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './screens/LandingPage'

const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default App