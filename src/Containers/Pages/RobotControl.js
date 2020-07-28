import React, { Fragment, useState } from 'react';
import { Breadcrumb, Row, Col, Card, Button, Slider, Tabs, Radio, Switch, Select, Form } from 'antd';
import { DashboardOutlined, DatabaseOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Player } from 'video-react';
import { Joystick } from 'react-joystick-component';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';

import {
    RobotStateChart,
    RobotChart7,
    VoltRadial,
    CurrentRadial,
    TempRadial,
    TempGaugeChart,
    HighGaugeChart,
    SpeedChart
} from './RobotChart';

// import RealtimeLineChart from './RealtimeLineChart';

import 'video-react/dist/video-react.css';
import './Robot1.css';
import './Common.css';
import './Video.css';

const { TabPane } = Tabs;
const { Option } = Select;

TweenOne
    .plugins
    .push(BezierPlugin);

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {

    const [value, setValue] = useState('1');
    const [form] = Form.useForm();

    const animation = {
        bezier: {
            type: 'soft',
            vars: [
                {
                    x: 0,
                    y: 0
                }, {
                    x: 1350,
                    y: 0
                }
            ]
        },
        repeat: -1,
        yoyo: true,
        duration: 10000
    };

    return (
        <Tabs type="card">
            <TabPane tab="부강-&gt;청주" key="1">
                <Fragment>
                    <Breadcrumb className="bread">
                        <Breadcrumb.Item><DashboardOutlined />&nbsp;&nbsp;Event</Breadcrumb.Item>
                        <Breadcrumb.Item><DatabaseOutlined />&nbsp;Robot Control</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="robot-control robot-contents">
                        <Row gutter={[6, 6]}>
                            <Col span={8}>
                                <Card className="robot-camera">
                                    <Player
                                        fluid={false}
                                        height={320}
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true} />
                                    <div className="video-info">[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card className="robot-camera">
                                    <Player
                                        fluid={false}
                                        height={320}
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true} />
                                    <div className="video-info">[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="control-container" bodyStyle={{ padding: '10px' }}>
                                    <Card title="로봇 컨트롤" size="small" className="robot-control">
                                        <div className="robot-control-wrap">
                                            <div className="robot-left-button">
                                                <Button>◀</Button>
                                            </div>
                                            <div className="robot-center-button">
                                                <Joystick size={35} baseColor="#808080" stickColor="black"></Joystick>
                                            </div>
                                            <div className="robot-right-button">
                                                <Button>▶</Button>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card title="로봇 카메라 컨트롤" size="small" className="robot-camera-control">
                                        <div className="robot-camera-control-wrap">
                                            <div className="camera-top-button">
                                                <Button>▲</Button>
                                            </div>
                                            <div className="center-button">
                                                <div className="camera-left-button">
                                                    <Button>◀</Button>
                                                </div>
                                                <div className="camera-center-button">
                                                    <Joystick size={30} baseColor="#808080" stickColor="black"></Joystick>
                                                </div>
                                                <div className="camera-right-button">
                                                    <Button>▶</Button>
                                                </div>
                                            </div>
                                            <div className="camera-bottom-button">
                                                <Button>▼</Button>
                                            </div>
                                        </div>
                                        <div className="zoom-slider-wrap">
                                            <Slider vertical defaultValue={30} className="zoom-slider" />
                                        </div>
                                    </Card>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card className="control-container" bodyStyle={{ padding: '10px' }}>
                                    <Card title="컨트롤" size="small" className="robot-control-1">
                                        <div className="radio">
                                            <span>감시모드</span>
                                            <Radio.Group>
                                                <Radio value={1} onClick={() => setValue('1')}>자동</Radio>
                                                <Radio value={2} onClick={() => setValue('2')}>수동</Radio>
                                            </Radio.Group>
                                        </div>
                                        <div className="toggle">
                                            <div className="light-toggle">
                                                <span>조명</span>
                                                <Switch className="light-toggle-button" checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                                            </div>
                                            <div className="uvlight-toggle">
                                                <span>적외선 조명</span>
                                                <Switch className="uvlight-toggle-button" checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
                                            </div>
                                        </div>

                                    </Card>
                                    <Card title="스테이션 이동" size="small" className="station-move">
                                        <Form form={form} name="control">
                                            <Form.Item name="station" label="station" >
                                                <Select
                                                    placeholder="스테이션 이동"
                                                    allowClear>
                                                    <Option value="Camera1">Camera1</Option>
                                                    <Option value="Camera2">Camera2</Option>
                                                    <Option value="Camera3">Camera3</Option>
                                                    <Option value="Camera4">Camera4</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button className="station-move-button" htmlType="설정">
                                                    설정
                                            </Button>
                                            </Form.Item>
                                        </Form>

                                    </Card>
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card title="터널 상태" size="small" bodyStyle={{
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}>
                                    <div className="tunnel-current">
                                        <div className="tunnel">
                                            <div className="tunnel-direction"><span>&gt;&gt;&gt;</span></div>
                                            <div className="tunnel-rail">
                                                <div className="cctv">
                                                    <VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined />
                                                </div>
                                                <TweenOne animation={animation}>
                                                    <div className="robot"></div>
                                                </TweenOne>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="tunnel-current-status">
                                        <div className="tunnel-status">
                                            <h4>현재 터널 상태</h4>
                                            <p>
                                                위치 : 100m<br />
                                            방향 : 전진<br />
                                            속도 : 1.5m/s<br />
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={16}>
                                <Card
                                    style={{
                                        height: 400
                                    }}
                                    bodyStyle={{
                                        padding: '24px 18px 24px 18px'
                                    }}>
                                    <Row>
                                        <div
                                            span={24}
                                            style={{
                                                marginBottom: '20px',
                                                fontSize: '16px',
                                                width: '100%'
                                            }}>
                                            <div className="robot-chart-title">로봇 환경 센서</div>
                                            <div className="unit-box">1분 단위</div>
                                        </div>
                                        <div className="robot-chart-2 robot-1"><RobotChart7 /></div>
                                        <div className="robot-chart-2"><RobotChart7 /></div>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    bodyStyle={{
                                        height: 400,
                                        padding: '12px 18px'
                                    }}>
                                    <Card
                                        title="로봇 상태"
                                        size="small"
                                        style={{
                                            marginBottom: '10px'
                                        }}>
                                        {/*<div className="robot-img">
                                            <img src="/robotcamera.png" alt="" />
                                        </div>*/}
                                        <div className="robot-info">
                                            <VoltRadial />
                                            <HighGaugeChart/>
                                            <SpeedChart />
                                            {/*<p>
                                                전압: 220.{Math.floor(Math.random() * 100)}V<br />
                                            전류: 70.{Math.floor(Math.random() * 100)}A<br />
                                            내부온도: 30.{Math.floor(Math.random() * 10)}도<br />
                                            위치: {Math.floor(Math.random() * 500)}m
                                            </p>*/}
                                        </div>
                                    </Card>
                                    <Card title="레일 로봇 상태 추이" size="small">
                                        <RobotStateChart />
                                    </Card>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Fragment>
            </TabPane>
            <TabPane tab="청주-&gt;부강" key="2">

            </TabPane>
        </Tabs>
    );
};

export default RobotControl;