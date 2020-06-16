import React, {Component} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './Containers/Login';
import Home from './Containers/Home';
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Layout>
                    <Route exact path="/" component={Login}/>
                    <Route path="/Home" component={Home}/>
                </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
