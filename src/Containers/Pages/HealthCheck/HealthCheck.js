import React, { Fragment } from 'react';
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
  
  const trafficStyles1 = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-42px',
    left: '190px'
  }

  const trafficStyles = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-45px',
    left: '170px'
  }

const HealthCheck = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><CheckCircleOutlined />&nbsp;&nbsp;헬스 체크</Breadcrumb.Item>
            </Breadcrumb>
            <div className="health-check contents" style={{ width: '91.6%' }}>
                <Row>
                    <Col span={6} className="health-section-wrap health-1">
                        {/*<Card title="부강->청주" size="small" className="health-1 health"></Card>*/}
                        <h3>부강-&gt;청주</h3>
                        <div className="health-section">
                            <div className="nvr">
                                <h4>NVR</h4>
                                <div className="cctv-optical check-list">
                                    <h5>CCTV Camera</h5>
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
                                    <h5>Robot Camera</h5>
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
                            </div>
                            <div className="gpu-server">
                                <h4>GPU 서버</h4>
                                <div className="check-list">
                                    <div>
                                        <span>GPU</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                    </div>

                                </div>
                            </div>
                            <div className="oper-server">
                                <h4>운영 서버</h4>
                                <div className="check-list">
                                    <div>
                                        <span>DB</span><TrafficLight Size="20" GreenOn className="trafficlight" />
                                    </div>

                                </div>
                            </div>
                            <div className="robot-gw">
                                <h4>로봇 게이트웨이</h4>
                                <div className="robot-device check-list">
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
                            <div className="fbg-gw">
                                <div className="fbgi"></div>
                                <div className="temp-sensor"></div>
                                <div className="sound-sensor"></div>
                            </div>
                            <div className="sagnac-gw">
                                <div className="sagnac-device"></div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6} className="health-2">
                        <Tree content="NVR" type="nvr" open style={treeStyles}><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div>
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
                        <Tree content="GPU" type="gpu" open style={treeStyles}><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div>
                            <Tree content="GPU 서버" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles1} /></div>
                        </Tree>
                        <Tree content="운영 서버" type="OS" open style={treeStyles}><div style={{ position: 'relative' }}><TrafficLight GreenOn Size="20" style={trafficStyles1} /></div>
                            <Tree content="DB" type={<span style={typeStyles}></span>} /> <div style={{ position: 'relative' }}><TrafficLight YellowOn Size="20" style={trafficStyles1} /></div>
                        </Tree>
                    </Col>
                    <Col span={12} className="health-section-wrap health-2">
                        {/*<Card title="청주->부강" size="small" className="health-2 health"></Card>*/}
                        <h4>청주-&gt;부강</h4>
                        <div className="health-section"></div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default HealthCheck;