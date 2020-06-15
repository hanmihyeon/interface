import React, {Component} from 'react';
import 'antd/dist/antd.css';


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
    SettingOutlined
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
                            display:'flex',
                            justifyContent:'center'
                        }}>
                        <Title
                            level={2}
                            style={{
                                height:'100%',
                                display:'flex',
                                alignItems:'center',
                                marginBottom:'0'
                            }}>Title</Title>
                    </Typography>
                    <Menu
                        mode="inline"
                        style={{
                            height: '791px'
                        }}
                        defaultSelectedKeys={['1']}>
                        <Menu.Item to={'/'} key="1" icon={<HomeOutlined/>}>Home</Menu.Item>
                        <SubMenu to={'/Dashboard'} key="sub1" icon={<DashboardOutlined />} title="Dashboard">
                            <Menu.Item to={'/Dashboard'}key="2" icon={<DatabaseOutlined />}>Data</Menu.Item>
                            <Menu.Item key="3" icon={<LineChartOutlined />}>Chart</Menu.Item>
                        </SubMenu>
                        <SubMenu to={'/Video'} key="sub2" icon={<LaptopOutlined />} title="Multimedia">
                            <Menu.Item to={'/Video'} key="4" icon={<VideoCameraOutlined />}>Video</Menu.Item>
                            <Menu.Item key="5" icon={<SoundOutlined />}>Sound</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined/>} title="Settings">
                            <Menu.Item key="6" icon={<UserOutlined/>}>User</Menu.Item>
                            <Menu.Item key="7" icon={<UserOutlined/>}>Device</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
        )
    }
}

export default SiderMenu;