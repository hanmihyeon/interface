import React, { Fragment } from 'react';
import { 
    Breadcrumb,
    Row, Col, Card,
    Radio, Button, Tabs,
    Slider, Switch,
    Select, Form,
    Popconfirm, message,
    DatePicker, Input } from 'antd';
import { DashboardOutlined, DatabaseOutlined, VideoCameraOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Player } from 'video-react';
import { Joystick } from 'react-joystick-component';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
import moment from 'moment';
import {
    RobotStateChart,
    RobotDataChart1,
    RobotDataChart2,
    RobotDataChart3,
    RobotDataChart4,
    VoltChart,
    CurrentChart,
    Thermom,
    ModeChart
} from '../Chart/RobotChart';

import 'video-react/dist/video-react.css';
import '../Common.css';
import '../cctv/Video.css';
import './RobotControl.css';

const { TabPane } = Tabs;
const { Option } = Select;

TweenOne
    .plugins
    .push(BezierPlugin);

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {

    // const [value, setValue] = useState('1');
    const [form] = Form.useForm();

    const animation = {
        bezier: {
            type: 'soft',
            vars: [
                {
                    x: 0,
                    y: 0
                }, {
                    x: 1000,
                    y: 0
                }
            ]
        },
        repeat: -1,
        yoyo: true,
        duration: 10000
    };

    function confirmSchedule(e) {
        message.success('스케줄이 설정되었습니다!');
    }

    function confirmStation(e) {
        message.success('설정되었습니다!');
    }

    function range(start, end) {
        const result = [];
        for(let i=start; i<end; i++) {
            result.push(i);
        }
        return result;
    }
    
    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }

    function disabledDateTime() {
        return {
            disabledHours : () => range(0,24).splice(4,20),
            disabledMinutes: () => range(30,60),
            disabledSeconds: () => [55,56],
        };
    }

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
                                                <Radio value={1}>자동</Radio>
                                                <Radio value={2}>수동</Radio>
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
                                                <Popconfirm
                                                    title="스테이션을 이동하시겠습니까?"
                                                    onConfirm={confirmStation}
                                                    okText="예"
                                                    cancelText="취소"><Button className="schedule-button" htmlType="설정">
                                                        설정
                                                    </Button>
                                                </Popconfirm>
                                            </Form.Item>
                                        </Form>

                                    </Card>
                                </Card>
                            </Col>
                            <Col span={20}>
                                <Card title="터널 상태" size="small" bodyStyle={{
                                    height: '250px',
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}>
                                    <Col span={20} className="robot-tunnel-current">
                                        <div className="robot-tunnel">
                                            <div className="robot-tunnel-direction"><ArrowRightOutlined /></div>
                                            <div className="robot-tunnel-rail">
                                                <div className="robot-cctv">
                                                    <VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined /><VideoCameraOutlined />
                                                </div>
                                                <TweenOne animation={animation}>
                                                    <div className="robot"></div>
                                                </TweenOne>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col span={4} className="tunnel-current-status">
                                        <div className="tunnel-status">
                                            <h4>현재 터널 상태</h4>
                                            <p>
                                                위치 : 100m<br />
                                                방향 : 전진<br />
                                                속도 : 1.5m/s<br />
                                            </p>
                                        </div>
                                    </Col>

                                </Card>
                            </Col>
                            <Col span={4} className="tunnel-current-schedule">
                                <Card title="스케줄" size="small">
                                    <Form form={form} name="schedule">
                                        <Form.Item name="location" label="위치" >
                                            <Input
                                                className="start-location"
                                                placeholder="시작 위치"
                                                suffix="m" />
                                            {/*<Select
                                                className="start-location"
                                                placeholder="시작 위치"
                                                allowClear>
                                                <Option value="0m" disabled>시작 위치</Option>
                                                <Option value="0m">0m</Option>
                                                <Option value="120m">120m</Option>
                                                <Option value="240m">240m</Option>
                                                <Option value="480m">480m</Option>
                                            </Select>*/}
                                            <Input
                                                className="end-location"
                                                placeholder="종료 위치"
                                                suffix="m" />
                                        </Form.Item>
                                        <Form.Item name="count" label="횟수" >
                                            <Input
                                                suffix="번" />
                                        </Form.Item>
                                        <Form.Item name="speed" label="속도" >
                                            <Select
                                                placeholder="속도"
                                                allowClear>
                                                <Option value="저속">저속</Option>
                                                <Option value="중속">중속</Option>
                                                <Option value="고속">고속</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name="starttime" label="시작 시간" >
                                            <DatePicker
                                                format="YYYY-MM-DD HH:mm:ss"
                                                disabledDate={disabledDate}
                                                disabledTime={disabledDateTime}
                                                showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}/>
                                            {/*<Select
                                                placeholder="시작 시간"
                                                allowClear>
                                                <Option value="0">0</Option>
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                            </Select>*/}
                                            </Form.Item>
                                        <Form.Item>
                                            <Popconfirm
                                                title="스케줄을 설정하시겠습니까?"
                                                onConfirm={confirmSchedule}
                                                okText="예"
                                                cancelText="취소"><Button className="schedule-button" htmlType="설정">
                                                    설정
                                                </Button>
                                            </Popconfirm>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </Col>
                            <Col span={16}>
                                <Card
                                    title="로봇 환경 센서"
                                    size="small"
                                    /*style={{
                                        height: 400
                                    }}*/
                                    bodyStyle={{
                                        padding: '12px 18px 12px 18px',
                                        height: '700px'
                                    }}>
                                    <Row>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                marginBottom: '20px',
                                                fontSize: '16px',
                                                width: '100%'
                                            }}>
                                            {/*<div className="unit-box">1분 단위</div>*/}
                                            <div className="robot-data-chart data-row1 data-1"><RobotDataChart1 /></div>
                                            <div className="robot-data-chart data-row1 data-2"><RobotDataChart2 /></div>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                marginBottom: '20px',
                                                fontSize: '16px',
                                                width: '100%'
                                            }}>
                                            <div className="robot-data-chart data-row2 data-3"><RobotDataChart3 /></div>
                                            <div className="robot-data-chart data-row2 data-4"><RobotDataChart4 /></div>
                                        </div>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    title="로봇 상태"
                                    size="small"
                                    bodyStyle={{
                                        padding: '12px 18px',
                                        height: '700px'
                                    }}>
                                    <Card
                                        
                                        size="small"
                                        style={{
                                            marginBottom: '10px'
                                        }}>
                                        {/*<div className="robot-img">
                                            <img src="/robotcamera.png" alt="" />
                                        </div>*/}
                                        <div className="robot-info">
                                            <VoltChart />
                                            <CurrentChart />
                                            <Thermom />
                                            {/*<p>
                                                전압: 220.{Math.floor(Math.random() * 100)}V<br />
                                            전류: 70.{Math.floor(Math.random() * 100)}A<br />
                                            내부온도: 30.{Math.floor(Math.random() * 10)}도<br />
                                            위치: {Math.floor(Math.random() * 500)}m
                                            </p>*/}
                                        </div>
                                    </Card>
                                    <Card title="레일 로봇 상태 추이" size="small" style={{
                                        marginBottom: '10px'
                                    }}>
                                        <RobotStateChart />
                                    </Card>
                                    <Card title="감시 모드" size="small"><ModeChart/></Card>
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