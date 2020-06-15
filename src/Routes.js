import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Home from './Containers/Home';
import Video from './Containers/Video';
import Dashboard from './Containers/Dashboard';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="Dashboard" component={Dashboard}/>
            <Route path="Video" component={Video}/>
        </Route>
    </Router>
    document.getElementById("root")
);