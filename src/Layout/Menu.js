import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import './Menu.css'

import {Layout, Menu, Avatar, Typography} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    LaptopOutlined,
    DashboardOutlined,
    SoundOutlined,
    HomeOutlined,
    LineChartOutlined,
    DatabaseOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    SafetyOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu
const {Sider} = Layout
const {Title} = Typography

class SiderMenu extends Component {

    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
                <Sider
                    width={250}
                    collapsible="collapsible"
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <Typography
                        style={{
                            backgroundColor: 'white',
                            height: '62px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <Title
                            level={2}
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0'
                            }}>Title</Title>
                    </Typography>
                    <Menu
                        mode="inline"
                        style={{
                            height: '793px'
                        }}
                        defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined/>}>Home
                            <Link to="/Home_1"/></Menu.Item>
                        <SubMenu
                            key="sub1"
                            icon={<DashboardOutlined />}
                            title="Dashboard">
                                <Link to="/Dashboard"/>
                            <Menu.Item key="2" to={'/Dashboard'} icon={<DatabaseOutlined />}>Data
                                <Link to="/Dashboard"/></Menu.Item>
                            <Menu.Item key="3" icon={<LineChartOutlined />}>Chart
                            <Link to="/Chart"/></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Multimedia">
                        <Link to="/Video"/>
                            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                                <Link to="/Video"/>Video</Menu.Item>
                            <Menu.Item key="5" icon={<SoundOutlined />}>Sound
                            <Link to="/Sound"/></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined/>} title="Settings">
                        <Link to="/User"/>
                            <Menu.Item key="6" icon={<UserOutlined/>}>User
                            <Link to="/User"/></Menu.Item>
                            <Menu.Item key="7" icon={<SafetyOutlined/>}>Device
                            <Link to="/Device"/></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
  
        )
    }
}

export default SiderMenu;