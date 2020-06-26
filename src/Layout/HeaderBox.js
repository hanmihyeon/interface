import React, {Component} from 'react';
import {Avatar, Layout, Menu, Typography} from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    DashboardOutlined,
    HomeOutlined,
    LineChartOutlined,
    DatabaseOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    SafetyOutlined,
    RobotOutlined,
    BarChartOutlined
} from '@ant-design/icons'
import {Link} from 'react-router-dom';

import './HeaderBox.css';

const {SubMenu} = Menu
const {Title} = Typography
const {Header} = Layout

class HeaderBox extends Component {
    state = {
        current: '1'
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.kye});
    };

    render() {
        return (
            <Header className="header">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <div className='brand'>
                        <Typography>
                            <Title
                                level={4}
                                style={{
                                    width: '200px',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0'
                                }}>Title</Title>
                        </Typography>
                    </div>
                    <div
                        style={{
                            paddingLeft: '30px'
                        }}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="1" icon={<HomeOutlined/>}>
                                Home
                                <Link to="/Home/Home1"/>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
                                <Menu.Item key="2" to={'/Dashboard'} icon={<DatabaseOutlined />}>
                                    Data
                                    <Link to="/Home/Dashboard"/>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<LineChartOutlined />}>
                                    statistic
                                    <Link to="/Home/Chart"/>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" icon={<VideoCameraOutlined/>}>
                                Camera
                                <Link to="/Home/Camera"/>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SafetyOutlined/>}>
                                TunnelCurrent
                                <Link to="/Home/TunnelCurrent"/>
                            </Menu.Item>
                            <SubMenu key="sub2" icon={<SettingOutlined/>} title="Settings">
                                <Menu.Item key="6" icon={<UserOutlined/>}>
                                    User
                                    <Link to="/Home/User"/>
                                </Menu.Item>
                                <Menu.Item key="7" icon={<UserOutlined/>}>
                                    Device
                                    <Link to="/Home/Device"/>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<LaptopOutlined />} title="Multimedia">
                                <Menu.Item key="8" icon={<SafetyOutlined/>}>
                                    TunnelTab
                                    <Link to="/Home/Device"/>
                                </Menu.Item>
                                <Menu.Item key="9" icon={<VideoCameraOutlined />}>
                                    Video<Link to="/Home/Video"/>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div
                        className="user-info"
                        style={{
                            float: 'right',
                            position: 'absolute',
                            right: '10px'
                        }}>
                        <div
                            style={{
                                float: 'left',
                                marginLeft: '10px'
                            }}>Login</div>
                        <div
                            style={{
                                float: 'left',
                                marginLeft: '10px'
                            }}>hello</div>
                        <div
                            style={{
                                float: 'left',
                                marginLeft: '10px'
                            }}>
                            <Avatar
                                size={25}
                                style={{
                                    backgroundColor: '#e6f7ff',
                                    color:'#1890ff',
                                    alignItems: 'center'
                                }}
                                icon={<UserOutlined />
                                }
                            />
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}

export default HeaderBox;
