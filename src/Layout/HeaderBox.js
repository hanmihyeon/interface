import React, {Component} from 'react';
import {Avatar, Layout, Menu, Typography} from 'antd';
import {
    UserOutlined,
    DashboardOutlined,
    HomeOutlined,
    LineChartOutlined,
    DatabaseOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    RobotOutlined,
    DesktopOutlined,
    BulbOutlined,
    ToolOutlined
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
        this.setState({current: e.key});
    };

    render() {
        return (
            <Header className="header">
                <div className="header-container">
                    <div className='brand'>
                        <Typography>
                            <Title className="header-title" level={4}>터널 기반 사고 예방(대응) 플랫폼</Title>
                        </Typography>
                    </div>
                    <div
                        style={{
                            paddingLeft: '130px'
                        }}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="1" icon={<HomeOutlined/>}>
                                홈
                                <Link to="/Home/Home1"/>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<DashboardOutlined />} title="대시보드">
                                <Menu.Item key="2" to={'/Dashboard'} icon={<DatabaseOutlined />}>
                                    데이터 대시보드
                                    <Link to="/Home/Dashboard"/>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<LineChartOutlined />}>
                                    통계
                                    <Link to="/Home/Chart"/>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" icon={<VideoCameraOutlined/>}>
                                CCTV 모니터링
                                <Link to="/Home/Video"/>
                            </Menu.Item>
                            <SubMenu key="sub2" icon={<DesktopOutlined/>} title="이벤트">
                                <Menu.Item key="5" icon={<BulbOutlined/>}>
                                    이벤트 매니저
                                    <Link to="/Home/EventManager"/>
                                </Menu.Item>
                                <Menu.Item key="6" icon={<RobotOutlined/>}>
                                    로봇 제어
                                    <Link to="/Home/RobotControl"/>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<SettingOutlined/>} title="설정">
                                <Menu.Item key="7" icon={<UserOutlined/>}>
                                    User
                                    <Link to="/Home/User"/>
                                </Menu.Item>
                                <Menu.Item key="8" icon={<ToolOutlined/>}>
                                    Device
                                    <Link to="/Home/Device"/>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="user-info">
                        <div>Login</div>
                        <div>hello</div>
                        <div>
                            <Avatar className="user-avatar" size={25} icon={<UserOutlined />
}/>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}

export default HeaderBox;
