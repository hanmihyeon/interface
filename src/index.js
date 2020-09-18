import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Login from './Containers/Pages/Login';

import './Containers/Pages/Login.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={App} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById(
        'root'
    )
);