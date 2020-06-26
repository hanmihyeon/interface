import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'antd/dist/antd.css';
import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Home1 from './Containers/Pages/Home_1';
import Dashboard from './Containers/Pages/Dashboard';
import Chart from './Containers/Pages/Chart';
// import Robot from './Containers/Pages/Robot_1';
//import Sensor from './Containers/Pages/Sensor';
import Video from './Containers/Pages/Video';
import Sound from './Containers/Pages/Sound';
import User from './Containers/Pages/User';
// import Device from './Containers/Pages/Device';
import Tunnel from './Containers/Pages/TunnelCurrentA';
import Tunnel1 from './Containers/Pages/TunnelCurrentB';
import Camera from './Containers/Pages/Camera';

import HeaderBox from './Layout/HeaderBox';
import FooterBox from './Layout/FooterBox';
import ContentBox from './Layout/ContentBox';

const {Content, Footer, Header} = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Layout>
                        <div class="container">
                            <HeaderBox/>
                            <Content
                                style={{
                                    padding: '10px 25px 20px 25px',
                                    minHeight: 'calc(100% - 40px)'
                                }}>
                                <ContentBox/>
                                <Switch>
                                    <Route path="/Home/Home1" component={Home1}/>
                                    <Route path="/Home/Dashboard" component={Dashboard}/>
                                    <Route path="/Home/Chart" component={Chart}/>
                                     {/*<Route path="/Home/Robot" component={Robot}/>
                                   <Route path="/Home/Sensor" component={Sensor}/>*/}
                                    <Route path="/Home/Video" component={Video}/>
                                    <Route path="/Home/Sound" component={Sound}/>
                                    <Route path="/Home/User" component={User}/>
                                    <Route path="/Home/Device" component={Tunnel1}/>
                                    <Route path="/Home/Camera" component={Camera}/>
                                    <Route path="/Home/TunnelCurrent" component={Tunnel}/>
                                </Switch>
                            </Content>
                            <FooterBox/>
                        </div>
                    </Layout>
                </Fragment>
            </Router>
        );
    }
}

export default App;