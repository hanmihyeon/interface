import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Containers/Login';
import Home from './Containers/Home';
import Home1 from './Containers/Home_1';
import Dashboard from './Containers/Dashboard';
import Chart from './Containers/Chart';
import Video from './Containers/Video';
import Sound from './Containers/Sound';
import User from './Containers/User';
import Device from './Containers/Device';
import Menu from './Layout/Menu';

import HeaderBox from './Layout/HeaderBox';
import FooterBox from './Layout/FooterBox';

const {Content, Header, Footer} = Layout;

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Router>
                        <Layout>
                            <Menu/>
                            <Layout>
                                <HeaderBox/>
                                <Content
                                    style={{
                                        height: 'calc(100% - 62px)',
                                        padding: '24px',
                                        position: 'sticky',
                                        top: '62px'
                                    }}>
                                    <Switch>
                                        <Route exact="exact" path="/" component={Login}/>
                                        <Route path="/Home" component={Home1}/>
                                        <Route path="/Dashboard" component={Dashboard}/>
                                        <Route path="/Chart" component={Chart}/>
                                        <Route path="/Video" component={Video}/>
                                        <Route path="/Sound" component={Sound}/>
                                        <Route path="/User" component={User}/>
                                        <Route path="/Device" component={Device}/>
                                    </Switch>
                                </Content>
                                <Footer
                                    style={{
                                        margin: '0 30px',
                                        background: 'white'
                                    }}><FooterBox/></Footer>
                            </Layout>
                        </Layout>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

export default App;