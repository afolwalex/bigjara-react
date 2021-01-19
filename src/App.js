import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import Curriculum from './screens/Curriculum'

const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/course/:courseName" component={Curriculum} />
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default App