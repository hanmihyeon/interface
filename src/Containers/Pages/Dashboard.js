import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, Tabs} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import {SagnacChart, SoundChart, TempChart} from './Chart/SensorChart';
import {SagnacAvgChart, TempAvgChart, SoundAvgChart} from './Chart/SensorAvgChart';

import {NetworkChart} from './Chart/NetworkChart';

import 'antd/dist/antd.dark.css';
import './Common.css';
import './Dashboard.css';
import './Robot1.css';

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

const Dashboard = () => {
    return (
        <Tabs onChange={callback} type="card">
            <TabPane tab="부강-&gt;청주" key="1">
                <Fragment>
                    <Breadcrumb className="bread">
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="dashboard contents">
                        <Row gutter={[6, 6]}>
                            <Card className="section-title" size="small" title="Sagnac Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SagnacChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">Sagnac AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><SagnacAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="FBG Data">
                                <Row gutter={[6, 6]}>
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
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">FBG Temperature AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><TempAvgChart/></Card>
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
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">FBG Sound AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><SoundAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="Tunnel">
                                <Row gutter={[6, 6]}>
                                    <Col span={16}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 24px',
                                                height: 520
                                            }}>
                                            <div className="tunnel-title">터널 상태</div>
                                            <img src="/tunnel_4.png" alt="" className="tunnel-img"/>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 24px',
                                                height: 520
                                            }}>
                                            <div>
                                                <div className="tunnel-title">네트워크 상태</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><NetworkChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </div>
                </Fragment>
            </TabPane>
            <TabPane tab="청주-&gt;부강" key="2">
                <Fragment>
                    <Breadcrumb className="bread">
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="dashboard contents">
                        <Row gutter={[6, 6]}>
                            <Card className="section-title" size="small" title="Sagnac Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SagnacChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">Sagnac AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><SagnacAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="FBG Data">
                                <Row gutter={[6, 6]}>
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
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">FBG Temperature AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><TempAvgChart/></Card>
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
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div className="chart-title">FBG Sound AVG</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><SoundAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="Tunnel">
                                <Row gutter={[6, 6]}>
                                    <Col span={16}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 24px',
                                                height: 520
                                            }}>
                                            <div className="tunnel-title">터널 상태</div>
                                            <img className="tunnel-img" src="/tunnel_4.png" alt=""/>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 24px',
                                                height: 520
                                            }}>
                                            <div>
                                                <div className="tunnel-title">네트워크 상태</div>
                                                <div className="unit-box">1분 단위</div>
                                            </div><NetworkChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </div>
                </Fragment>
            </TabPane>
        </Tabs>

    );
};

export default Dashboard;