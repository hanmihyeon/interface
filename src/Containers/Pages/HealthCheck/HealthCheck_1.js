/*********************** 3가지 버전 ****************************/
import React, { Fragment, useState } from 'react';
import { Breadcrumb, Row, Col, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import TrafficLight from 'react-trafficlight';
import Tree from 'react-animated-tree';

import '../Common.css';
import './HealthCheck.css';
const treeStyles = {
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
}

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
                    <Col span={6} className="health-section-wrap health-1">
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="NVR" type="nvr" open style={treeStyles}>
                            <Tree content="CCTV 카메라" open>
                                <Tree content="CCTV 일반1" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 일반2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 일반3" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 일반4" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 열화상1" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 열화상2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 열화상3" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CCTV 열화상4" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                            </Tree>
                            <Tree content="로봇 카메라" open>
                                <Tree content="로봇 일반1" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 일반2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 일반3" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 일반4" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 열화상1" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 열화상2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 열화상3" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight RedOn Size="20" style={trafficStyles} /></div>
                                <Tree content="로봇 열화상4" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                            </Tree>
                        </Tree>
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="GPU" type="GPU" open style={treeStyles}>
                            <Tree content="GPU서버" open /><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles2} /></div>
                        </Tree>
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="운영 서버" type="OS" open style={treeStyles}>
                            <Tree content="DB" open>
                                <Tree content="테이블1" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles} /></div>
                                <Tree content="테이블2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="테이블3" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="테이블4" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                            </Tree>
                        </Tree>
                    </Col>
                    <Col span={6} className="health-2">
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="로봇 게이트웨이" type="GW" open style={treeStyles}>
                            <Tree content="로봇" open>
                                <Tree content="로봇" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CO" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="CO2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="O2" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="VOC" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="온도" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="습도" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="연기" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="먼지" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="이산화질소" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="황화수소" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="암모니아" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                                <Tree content="고정연기감지기" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles} /></div>
                            </Tree>
                        </Tree>
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="FBG 광센싱 GW" type="GW" open style={treeStyles}>
                            <Tree content="FBGI" open /><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles2} /></div>
                            <Tree content="온도 센서" open /><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles2} /></div>
                            <Tree content="음향 센서" open /><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles2} /></div>
                        </Tree>
                        <div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div><Tree content="Sagnac 광센싱 GW" type="GW" open style={treeStyles}>
                            <Tree content="Sagnac" open /><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles2} /></div>
                        </Tree>
                    </Col>
                    <Col span={12} className="health-section-wrap health-2">
                        {/*<Card title="청주->부강" size="small" className="health-2 health"></Card>*/}
                        <h4>청주-&gt;부강</h4>
                        <div className="health-section">
                            <Row>
                                <Col span={12} className="section section-1">
                                    <Card title="NVR" size="small">
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
                                <Col span={12} className="section section-2">
                                    <Card title="GPU 서버" size="small">
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
                                <Col span={12} className="section section-3">
                                    <Card title="운영 서버" size="small">
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
                                <Col span={12} className="section section-4">
                                    <Card title="로봇 게이트웨이" size="small">
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
                                <Col span={12} className="section section-5">
                                    <Card title="FBG 광센싱 게이트웨이" size="small"></Card>
                                </Col>
                                <Col span={12} className="section section-6">
                                    <Card title="Sagnac 광센싱 게이트웨이" size="small"></Card>
                                </Col>
                            </Row>
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
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default HealthCheck;