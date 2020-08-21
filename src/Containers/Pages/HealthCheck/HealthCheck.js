import React, { Fragment, useState } from 'react';
import { Breadcrumb, Row, Col, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import TrafficLight from 'react-trafficlight';
// import Tree from 'react-animated-tree';

import '../Common.css';
import './HealthCheck.css';

/*const treeStyles = {
    position: 'relative',
    padding: '4px 10px 0px',
    color: 'white',
    fill: 'white',
    width: '100%'
}

const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
}

const trafficStyles2 = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-42px',
    left: '190px'
}

const trafficStyles1 = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-9px',
    left: '222px'
}

const trafficStyles = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-45px',
    left: '170px'
}*/

const HealthCheck = () => {
    const [conVisible1, setCon1] = useState(false);
    const [conVisible2, setCon2] = useState(false);
    const [conVisible3, setCon3] = useState(false);
    const [conVisible4, setCon4] = useState(false);

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><CheckCircleOutlined />&nbsp;&nbsp;헬스 체크</Breadcrumb.Item>
            </Breadcrumb>
            <div className="health-check contents" style={{ width: '91.6%' }}>
                <Row>
                    <Col span={12} className="health-section-wrap health-1">
                        {/*<Card title="청주->부강" size="small" className="health-2 health"></Card>*/}
                        <Row>
                            <Col span={12} className="section section-1">
                                <Card>
                                    <div onClick={() => setCon1(!conVisible1)} className={conVisible1 ? 'active section-title' : 'section-title'}>
                                        <span>NVR</span>
                                        <TrafficLight Size="35" GreenOn className="trafficlight-title" />
                                    </div>
                                    <div className="nvr check-list">
                                        <h4>NVR</h4>
                                        <div>
                                            <span>NVR</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div onClick={() => setCon1(!conVisible1)} className={conVisible1 ? 'active section-title' : 'section-title'}>
                                        <span>CCTV</span>
                                        <TrafficLight Size="35" GreenOn className="trafficlight-title" />
                                    </div>
                                    <div className="cctv-optical check-list">
                                        <h4>CCTV Camera</h4>
                                        <div>
                                            <span>CCTV 일반 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 2</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 3</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                    <div className="cctv-thermal check-list">
                                        <div>
                                            <span>CCTV 열화상 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 2</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 3</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div onClick={() => setCon1(!conVisible1)} className={conVisible1 ? 'active section-title' : 'section-title'}>
                                        <span>ROBOT</span>
                                        <TrafficLight Size="35" GreenOn className="trafficlight-title" />
                                    </div>
                                    <div className="robot-optical check-list">
                                        <h4>Robot Camera</h4>
                                        <div>
                                            <span>Robot 일반 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 2</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 3</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                    <div className="robot-thermal check-list">
                                        <div>
                                            <span>Robot 열화상 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 2</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 3</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon2(!conVisible2)} className={conVisible2 ? 'active section-title' : 'section-title'}><span>GPU</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="gpu-server">
                                        <h4>GPU 서버</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon3(!conVisible3)} className={conVisible3 ? 'active section-title1' : 'section-title1'}><span>OS</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="oper-server">
                                        <h4>운영 서버</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>DB</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>DB</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon4(!conVisible4)} className={conVisible4 ? 'active section-title1' : 'section-title1'}><span>로봇 GW</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="robot-gw">
                                        <h4>로봇 게이트웨이</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>로봇</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="smoke-sensor check-list">
                                            <div>
                                                <span>연기센서</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="section">
                                <Card></Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card></Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className="health-section-wrap health-2">
                        {/*<Card title="청주->부강" size="small" className="health-2 health"></Card>*/}
                        <Row>
                            <Col span={12} className="section section-1">
                                <Card>
                                    <div onClick={() => setCon1(!conVisible1)} className={conVisible1 ? 'active section-title' : 'section-title'}><span>NVR</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="cctv-optical check-list">
                                        <h4>CCTV Camera</h4>
                                        <div>
                                            <span>CCTV 일반 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 2</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 3</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 일반 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                    <div className="cctv-thermal check-list">
                                        <div>
                                            <span>CCTV 열화상 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 2</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 3</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>CCTV 열화상 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                    <div className="robot-optical check-list">
                                        <h4>Robot Camera</h4>
                                        <div>
                                            <span>Robot 일반 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 2</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 3</span>
                                            <TrafficLight Size="20" YellowOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 일반 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                    <div className="robot-thermal check-list">
                                        <div>
                                            <span>Robot 열화상 1</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 2</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 3</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                        <div>
                                            <span>Robot 열화상 4</span>
                                            <TrafficLight Size="20" GreenOn className="trafficlight" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon2(!conVisible2)} className={conVisible2 ? 'active section-title' : 'section-title'}><span>GPU</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="gpu-server">
                                        <h4>GPU 서버</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon3(!conVisible3)} className={conVisible3 ? 'active section-title1' : 'section-title1'}><span>OS</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="oper-server">
                                        <h4>운영 서버</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>DB</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>DB</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card>
                                    <div onClick={() => setCon4(!conVisible4)} className={conVisible4 ? 'active section-title1' : 'section-title1'}><span>로봇 GW</span><TrafficLight Size="35" GreenOn className="trafficlight-title" /></div>
                                    <div className="robot-gw">
                                        <h4>로봇 게이트웨이</h4>
                                        <div className="check-list">
                                            <div>
                                                <span>로봇</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="smoke-sensor check-list">
                                            <div>
                                                <span>연기센서</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className="section">
                                <Card></Card>
                            </Col>
                            <Col span={12} className="section">
                                <Card></Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment >
    );
};

export default HealthCheck;