import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, Button} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';
import {Player} from 'video-react';
import {Joystick} from 'react-joystick-component';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

import {
   // RobotChart1,
  //  RobotChart2,
  //  RobotChart3,
 //   RobotChart4,
  //  RobotChart5,
  //  RobotChart6,
    RobotStateChart,
    RobotChart7,
  //  RobotChart8,
} from './RobotChart';

// import RealtimeLineChart from './RealtimeLineChart';

import 'video-react/dist/video-react.css';
import './Robot1.css';
import './Common.css';
import './Video.css';

TweenOne
    .plugins
    .push(BezierPlugin);

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {

    const animation = {
        bezier: {
            type: 'soft',
            vars: [
                {
                    x: 375,
                    y: -7
                }, {
                    x: 375,
                    y: -7
                }
            ]
        },
        repeat: -1,
        yoyo: true,
        duration: 10000
    };

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Robot Control</Breadcrumb.Item>
            </Breadcrumb>
            <div className="robot-control contents">
                <Row gutter={[6, 6]}>
                    <Col span={8}>
                        <Card className="robot-camera">
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div className="video-info">[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="robot-camera">
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div className="video-info">[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="control-container" bodyStyle={{padding:'10px'}}>
                            <Card className="control-wrap"bodyStyle={{padding:0}}>
                                <div>
                                    <h3>카메라 조정 (확대, 축소)</h3>
                                </div>
                                <div
                                    style={{
                                        marginTop: '15px'
                                    }}>
                                    <div className="robot-move">
                                        <div className="robot-top-button">
                                            <Button type="primary">▲</Button>
                                        </div>
                                        <div className="robot-center-button">
                                            <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                        </div>
                                        <div className="robot-bottom-button">
                                            <Button type="primary">▼</Button>
                                        </div>
                                        <div className="sub-title-1">
                                            로봇이동
                                        </div>
                                    </div>
                                    <div className="camera-move">
                                        <div className="camera-top-button">
                                            <Button type="primary">▲</Button>
                                        </div>
                                        <div>
                                            <div className="camera-left-button">
                                                <Button type="primary">◀</Button>
                                            </div>
                                            <div className="camera-center-button">
                                                <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                            </div>
                                            <div className="camera-right-button">
                                                <Button type="primary">▶</Button>
                                            </div>
                                        </div>
                                        <div className="camera-bottom-button">
                                            <Button type="primary">▼</Button>
                                        </div>
                                        <img className="scale-bar" alt="" src='/scalebar.png'/>
                                        <div className="sub-title-2">
                                            카메라 조절
                                        </div>
                                    </div>
                                    <div className="card3-control-button">
                                        <div>
                                            <Button type="primary">자동순찰정지</Button>
                                        </div>
                                        <div>
                                            <Button type="primary">자동순찰전환</Button>
                                        </div>
                                        <div>
                                            <Button type="primary">설정 리셋</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className="tunnel-current">
                                <TweenOne animation={animation}>
                                    <div className="robot"></div>
                                </TweenOne>
                                <img className="robot-tunnel-img" src="/tunnel_5.png" alt=""/>
                            </div>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card
                            style={{
                                marginTop: '-90px',
                                height: 610
                            }}
                            bodyStyle={{
                                padding: '24px 36px 24px 36px'
                            }}>
                            <Row>
                                <Col
                                    span={24}
                                    style={{
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                    }}>
                                    <div className="robot-chart-title">로봇 환경 센서</div>
                                    <div className="unit-box">1분 단위</div>
                                </Col>
                                {/*<Col span={8} className="robot-chart robot-first"><RobotChart1/></Col>
                                <Col span={8} className="robot-chart "><RobotChart2/></Col>
                                <Col span={8} className="robot-chart "><RobotChart3/></Col>
                                <Col span={8} className="robot-chart "><RobotChart4/></Col>
                                <Col span={8} className="robot-chart "><RobotChart5/></Col>
                                <Col span={8} className="robot-chart "><RobotChart6/></Col>*/}
                                <Col className="robot-chart-2"><RobotChart7/></Col>
                                <Col className="robot-chart-2"><RobotChart7/></Col>
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
                                style={{
                                    marginBottom: '15px'
                                }}>
                                <div className="robot-img">
                                    <img src="/robotcamera.png" alt=""/>
                                </div>
                                <div className="robot-info">
                                    <p>
                                        전압: 220.{Math.floor(Math.random() * 100)}V<br/>
                                        전류: 70.{Math.floor(Math.random() * 100)}A<br/>
                                        내부온도: 30.{Math.floor(Math.random() * 10)}도<br/>
                                        위치: {Math.floor(Math.random() * 500)}m
                                    </p>
                                </div>
                            </Card>
                            <Card title="레일 로봇 상태 추이" size="small">
                                <RobotStateChart/>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default RobotControl;