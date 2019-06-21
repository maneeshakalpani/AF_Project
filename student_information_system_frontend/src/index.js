import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import main2 from './main2';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={main2} />
            {/*<Route path='/add' component={Add} />*/}
            {/*<Route path='/register' component={Register} />*/}
            {/*<Route path='/add-train' component={AddTrain} />*/}
        </div>
    </Router>,
    document.getElementById('root')
);