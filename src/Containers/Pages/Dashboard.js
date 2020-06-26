import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import './Common.css';

import {FOS, SoundChart, TempChart} from './Sensor';
import {
    RobotChart1,
    RobotChart2,
    RobotChart3,
    RobotChart4,
    RobotChart5,
    RobotChart6,
    RobotStateChart
} from './RobotChart';

import './Robot1.css';

const Dashboard = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dashboard contents">
                <Row gutter={[6, 6]}>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 0',
                                height: 380
                            }}><FOS/></Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 0',
                                height: 380
                            }}><TempChart nb_bar={24}/></Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 0',
                                height: 380
                            }}><SoundChart nb_bar={24}/></Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                    <Col span={16}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 36px',
                                height: 520
                            }}>
                            <Row>
                                <Col
                                    span={24}
                                    style={{
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                    }}>
                                    <div
                                        style={{
                                            float: 'left'
                                        }}>환경정보</div>
                                    <div
                                        style={{
                                            float: 'right'
                                        }}>Update every minutes</div>
                                </Col>
                                <Col span={8}><RobotChart1/></Col>
                                <Col span={8}><RobotChart2/></Col>
                                <Col span={8}><RobotChart3/></Col>
                                <Col span={8}><RobotChart4/></Col>
                                <Col span={8}><RobotChart5/></Col>
                                <Col span={8}><RobotChart6/></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                height: 520
                            }}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                style={{marginBottom:'15px'}}
                                >
                                <div className="robot-img">
                                    <img
                                        src="/robotcamera.png"
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}/>
                                </div>
                                <div className="robot-info">
                                    <p>
                                        전압: 220V<br/>
                                        전류: 70A<br/>
                                        내부온도: 30도<br/>
                                        위치: 300m
                                    </p>
                                </div>
                            </Card>
                            <Card title="레일 로봇 상태 추이" size="small">
                                <RobotStateChart/>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                padding: 0,
                                height: 380
                            }}></Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Dashboard;