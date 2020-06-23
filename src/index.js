import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './Containers/Login';
import './Containers/Login.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Home" component={App}/>
                
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById(
        'root'
    )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA