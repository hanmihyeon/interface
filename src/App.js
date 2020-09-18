import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home1 from './Containers/Pages/Home_1';
// import Dashboard from './Containers/Pages/Other/Dashboard';
import Tunnel from './Containers/Pages/Tunnel/Tunnel';
import Video from './Containers/Pages/cctv/Video';
import Video1 from './Containers/Pages/cctv/Video_1';
import EventManager from './Containers/Pages/Event/EventManager';
import RobotControl from './Containers/Pages/Robot/RobotControl';
import HealthCheck from './Containers/Pages/HealthCheck/HealthCheck';
import Dashboard from './Containers/Pages/HealthCheck/HealthCheck_1';
// import User from './Containers/Pages/Other/User';
import Device from './Containers/Pages/Other/Device';
import RobotControl1 from './Containers/Pages/Robot/RobotControl_1';
import HeaderBox from './Layout/HeaderBox';
// import FooterBox from './Layout/FooterBox';
import ContentBox from './Layout/ContentBox';
import Alarm from './Layout/Alarm';

import 'antd/dist/antd.dark.css';
import './App.css';

const { Content } = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Layout>
                        <div className="container">
                            <HeaderBox />
                            <Content
                                style={{
                                    padding: '0',
                                    width: '100%',
                                    minHeight: 'calc(100% - 70px)'
                                }}>
                                <ContentBox />
                                <Switch>
                                    <Route path="/Home/Home1" component={Home1} />
                                    <Route path="/Home/Dashboard" component={Dashboard} />
                                    <Route path="/Home/Tunnel" component={Tunnel} />
                                    <Route path="/Home/Video" component={Video} />
                                    <Route path="/Home/EventManager" component={EventManager} />
                                    <Route path="/Home/RobotControl" component={RobotControl} />
                                    <Route path="/Home/HealthCheck" component={HealthCheck} />
                                    <Route path="/Home/User" component={RobotControl1} />
                                    <Route path="/Home/Device" component={Device} />
                                    <Route path="/Home/Video_1" component={Video1} />
                                </Switch>
                                <Alarm />
                            </Content>
                        </div>
                    </Layout>
                </Fragment>
            </Router>
        );
    }
}

export default App;