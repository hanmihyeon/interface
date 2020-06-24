import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home1 from './Containers/Home_1';
import Dashboard from './Containers/Dashboard';
import Chart from './Containers/Chart';
import Robot from './Containers/Robot_1';
import Sensor from './Containers/Sensor';
import Video from './Containers/Video';
import Sound from './Containers/Sound';
import User from './Containers/User';
import Device from './Containers/Device';
import Menu from './Layout/Menu';
import HeaderBox from './Layout/HeaderBox';
import FooterBox from './Layout/FooterBox';
import Tunnel from './Containers/TunnelCurrentA';
import Camera from './Containers/Camera';

const {Content, Footer} = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        <Layout>
                            <Menu/>
                            <Layout>
                                <HeaderBox/>
                                <Content
                                    style={{
                                        height: 'calc(100% - 62px)',
                                        padding: '24px',
                                        position: 'sticky',
                                        top: '62px',
                                        marginBottom: '10px'
                                    }}>
                                    <Switch>
                                        <Route path="/Home/Home1" component={Home1}/>
                                        <Route path="/Home/Dashboard" component={Dashboard}/>
                                        <Route path="/Home/Chart" component={Chart}/>
                                        <Route path="/Home/Robot" component={Robot}/>
                                        <Route path="/Home/Sensor" component={Sensor}/>
                                        <Route path="/Home/Video" component={Video}/>
                                        <Route path="/Home/Sound" component={Sound}/>
                                        <Route path="/Home/User" component={User}/>
                                        <Route path="/Home/Device" component={Device}/>
                                        <Route path="/Home/Camera" component={Camera}/>
                                        <Route path="/Home/TunnelCurrent" component={Tunnel}/>
                                    </Switch>
                                </Content>
                                <Footer
                                    style={{
                                        margin: '20px 30px',
                                        background: 'white'
                                    }}><FooterBox/></Footer>
                            </Layout>
                        </Layout>

                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;