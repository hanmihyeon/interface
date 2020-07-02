import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, Button} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import {Player} from 'video-react';
import 'video-react/dist/video-react.css';

import './Common.css';

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
import {Joystick} from 'react-joystick-component';

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Robot Control</Breadcrumb.Item>
            </Breadcrumb>
            <div className="robot-control contents">
                <Row gutter={[6, 6]}>
                    <Col span={8}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{
                                width: '100%',
                                height: '100%'
                            }}>
                            <Card
                                bodyStyle={{
                                    border: '5px solid #1890ff',
                                    background: '#e6f7ff',
                                    width: '100%',
                                    height: '100%',
                                    padding : '20px'
                                }}>
                                <div>
                                    <h3>카메라 조정 (확대, 축소)</h3>
                                </div>
                                <div style={{marginTop:'40px'}}>
                                <div
                                    style={{
                                        width:'200px',
                                        height:'200px',
                                        float: 'left',
                                        position:'relative',
                                        margin:'0 0 30px 40px'
                                    }}>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            top: 20,
                                            left: 65
                                        }}>
                                        <Button type="primary">▲</Button>
                                    </div>
                                    <div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position: 'absolute',
                                            top:72,
                                            left:15
                                        }}>
                                        <Button type="primary">◀</Button>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            height: '10%',
                                            float:'left',
                                            position: 'absolute',
                                            top:65,
                                            left:58
                                        }}>
                                        <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position:'absolute',
                                            top:72,
                                            right:66
                                        }}>
                                        <Button type="primary">▶</Button>
                                    </div></div>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            bottom:39,
                                            left:65
                                        }}>
                                        <Button type="primary">▼</Button>
                                    </div>
                                    
                                </div>
                                <div
                                    className="card3-control-button"
                                    style={{
                                        float: 'left',
                                        margin:'15px 0 0 40px'
                                    }}>
                                    <img
                                        style={{
                                            border: '1px solid black',
                                            height: '180px'
                                        }}
                                        src='/scalebar.png'/>
                                </div>

                                <div
                                    className="card3-control-button"
                                    style={{
                                        float: 'left',
                                        margin:'15px 0 0 70px'
                                    }}>
                                    <div>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>자동순찰정지</Button>
                                    </div>
                                    <div
                                        style={{
                                            marginTop: '15px'
                                        }}>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>자동순찰전환</Button>
                                    </div>
                                    <div
                                        style={{
                                            marginTop: '15px'
                                        }}>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>설정 리셋</Button>
                                    </div>
                                </div></div>
                            </Card>
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
                                style={{
                                    marginBottom: '15px'
                                }}>
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
                                        }}>로봇 환경 센서</div>
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
                </Row>
            </div>
        </Fragment>
    );
};

export default RobotControl;