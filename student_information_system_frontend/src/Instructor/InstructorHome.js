import React, {Component} from 'react';
import logo from "../images/logo.png";
import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
//import {Button} from "reactstrap";
import Insert from './addAssignments';

class InstructorHome extends Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <div className="main">
                    <Router>
                        <div>
                            <div className='btn'>
                                <Link to="/insert">Add Assignments and Exams</Link>
                            </div>
                            {/*<div className='btn'>*/}
                                {/*<Link to="/deadline">Change DeadLine</Link>*/}
                            {/*</div>*/}
                            <Switch>
                                <Route path="/insert" component={Insert}/>
                                {/*<Route path="/deadline" component={}/>*/}
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}



export default InstructorHome
