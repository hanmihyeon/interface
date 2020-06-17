import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Dashboard from './Dashboard';
import Chart from './Chart';
import Video from './Video';
import Sound from './Sound';
import User from './User';
import Device from './Device';
import Home1 from './Home_1';
import Menu from '../Layout/Menu';

import HeaderBox from '../Layout/HeaderBox';
import FooterBox from '../Layout/FooterBox';

const {Content, Header, Footer} = Layout;

const Home = () => {
    return (
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
                            <Route exact path="/Home_1" component={Home1}/>
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
    );
}

export default Home;
