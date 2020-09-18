import React, { Component } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';

import {
    UserOutlined,
    DashboardOutlined,
    LineChartOutlined,
    DatabaseOutlined,
    VideoCameraOutlined,
    RobotOutlined,
    BulbOutlined,
    ToolOutlined,
    CheckCircleOutlined
} from '@ant-design/icons'


import 'antd/dist/antd.dark.css';
import './HeaderBox.css';

const { SubMenu } = Menu
const { Title } = Typography
const { Header } = Layout

class HeaderBox extends Component {
    state = {
        current: '',
        // thisTime: new Date()
    };

    handleClick = e => {
        this.setState({ current: e.key });
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
                            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                                CCTV 모니터링
                                <Link to="/Home/Video" />
                            </Menu.Item>
                            <Menu.Item key="2" icon={<RobotOutlined />}>
                                로봇 제어
                                    <Link to="/Home/RobotControl" />
                            </Menu.Item>
                            <Menu.Item key="3" icon={<BulbOutlined />}>
                                이벤트 매니저
                                <Link to="/Home/EventManager" />
                            </Menu.Item>
                            <Menu.Item key="4" icon={<LineChartOutlined />}>
                                터널 운영
                                    <Link to="/Home/Tunnel" />
                            </Menu.Item>
                            <Menu.Item key="8" icon={<CheckCircleOutlined />}>
                                헬스 체크
                                    <Link to="/Home/HealthCheck" />
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<DashboardOutlined />} title="대시보드">
                                <Menu.Item key="5" to={'/Dashboard'} icon={<DatabaseOutlined />}>
                                    데이터 대시보드
                                        <Link to="/Home/Dashboard" />
                                </Menu.Item>
                                <Menu.Item key="6" icon={<UserOutlined />}>
                                    User
                                        <Link to="/Home/User" />
                                </Menu.Item>
                                <Menu.Item key="7" icon={<ToolOutlined />}>
                                    Device
                                        <Link to="/Home/Device" />
                                </Menu.Item>
                                <Menu.Item key="9" icon={<ToolOutlined />}>
                                    ddd
                                        <Link to="/Home/Video_1" />
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="user-info">
                        <div style={{ fontWeight: 'bold' }}>
                            <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} />
                        </div>
                        {/*<div>{this.state.thisTime.getHours()}:{this.state.thisTime.getMinutes()}</div>*/}
                        <div>Admin</div>
                        
                    </div>
                </div>
            </Header>
        )
    }
}

export default HeaderBox;
