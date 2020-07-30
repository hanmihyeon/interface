import React, { Fragment, useState } from 'react';
import { Breadcrumb, Row, Col, Card, notification, Alert, Button, Form, Select, Slider, Radio, Switch, Popconfirm, message } from 'antd';
import { LaptopOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Player } from 'video-react';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
import { Joystick } from 'react-joystick-component';

import { TodayStatus, TunnelRadial1, TunnelRadial2, TunnelRadial3, TunnelRadial4, RobotDataChart } from '../Chart/TunnelChart';
// import { TunnelChart } from '../Chart/SensorAvgChart';
import { RobotDataChart1 } from '../Chart/RobotChart';

import 'video-react/dist/video-react.css';
import '../cctv/Video.css';
import './Tunnel.css';
import '../Common.css';

const { Option } = Select;
TweenOne
    .plugins
    .push(BezierPlugin);

//html초입에서 height 설정안해서 적용안됨 세로 퍼센트
const Tunnel = (props) => {

    function confirmStation(e) {
        message.success('설정되었습니다!');
    }

    // const [value, setValue] = useState('1');
    const [form] = Form.useForm();
    //나중에 배열로 camera url마다 지정해야할듯
    const v1 = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';  //분홍구름
    const v2 = 'http://media.w3.org/2010/05/bunny/movie.mp4';         //흰눈

    const [videoUrl, setVideoUrl] = useState(v1);  //rerendering
    //https://media.w3.org/2010/05/sintel/trailer_hd.mp4   // http://media.w3.org/2010/05/bunny/movie.mp4

    ///////////////////////////////// 영상 변환
    const VideoChange = (index) => {
        if (index === 0) setVideoUrl(v2);
        if (index === 1) setVideoUrl(v1);
    }
    ///////////////////////////////// 클릭시 메인 영상 변경 함수 - Hooks can only be called inside of the body of a function component

    const VideoList = ({ vList, index }) => {
        return (
            <>
                <Col span={vList === 1 || vList === 2 ? 12 : 6}
                    style={{ padding: '1px' }} >
                    <Player
                        playsInline="playsInline"
                        src={index === 1 ? v1 : v2}
                        autoPlay={index < 2 ? true : false}
                        muted={true} />
                    <div onClick={() => { VideoChange(index) }} style={{ position: 'absolute', margin: '-50% 0 0 9%', zIndex: 1, width: '80%', height: '70%' }} />
                    <div className="video-info">
                        {vList === 1 ? '로봇카메라:일반' : vList === 2
                            ? '로봇카메라:열화상'
                            : vList}</div>
                </Col>
            </>
        );
    }

    const StatusAlert = () => {

        notification.open({
            message: 'Alert',
            style: {
                backgroundColor: 'red',
                color: 'white'
            },
            description: '터널: 청주 -> 부강 위치: 240m 상태: 화재',
            onClick: () => {
                console.log('notification clicked!');
            },
        });

    };

    const vList = [
        1,
        2,
        '일반카메라: 1번 100m',
        '일반카메라: 2번 200m',
        '일반카메라: 3번 300m',
        '일반카메라: 4번 400m',
        '열화상카메라: 1번 100m',
        '열화상카메라: 2번 200m',
        '열화상카메라: 3번 300m',
        '열화상카메라: 4번 400m'
    ];

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
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><LaptopOutlined />&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                <Breadcrumb.Item><VideoCameraOutlined />&nbsp;Video</Breadcrumb.Item>
            </Breadcrumb>
            <div className="video contents">
                <Row gutter={12} style={{ height: '100%' }}>
                    <Col span={11}>
                        <Card style={{ height: '50%' }}>
                            <Player
                                playsInline="playsInline"
                                src={videoUrl}
                                autoPlay={true}
                                muted={true} />
                            <div className="video-info" onClick={StatusAlert}>[부강 -&gt; 청주] 메인 화면: 로봇 카메라(일반)</div>
                        </Card>
                        <Card style={{ height: '50%' }}>
                            <Row gutter={[8, 0]}>
                                {vList.map((vList, index) => (<VideoList vList={vList} index={index} key={vList.id}></VideoList>))}
                            </Row>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card title="터널 상태" size="small" style={{ height: '20%' }}>
                            <div className="tunnel">
                                <div className="tunnel-rail"></div>
                                <TweenOne animation={animation}>
                                    <div className="robot"></div>
                                </TweenOne>
                            </div>
                        </Card>
                        <Row style={{ height: '30%' }}>
                            <Col span={8} style={{ height: '100%' }}>
                                <Card title="로봇 컨트롤" size="small" className="tunnel-robot-move-control" style={{ height: '100%' }} bodyStyle={{ minHeight: '275px' }}>
                                    <div className="tunnel-robot-move-control-wrap">
                                        <div className="tunnel-robot-left-button">
                                            <Button>◀</Button>
                                        </div>
                                        <div className="tunnel-robot-center-button">
                                            <Joystick size={35} baseColor="#808080" stickColor="black"></Joystick>
                                        </div>
                                        <div className="tunnel-robot-right-button">
                                            <Button>▶</Button>
                                        </div>
                                    </div>
                                    <div className="tunnel-robot-camera-wrap">
                                        <div className="tunnel-robot-camera-control-wrap">
                                            <div className="tunnel-camera-top-button">
                                                <Button>▲</Button>
                                            </div>
                                            <div className="tunnel-center-button">
                                                <div className="tunnel-camera-left-button">
                                                    <Button>◀</Button>
                                                </div>
                                                <div className="tunnel-camera-center-button">
                                                    <Joystick size={30} baseColor="#808080" stickColor="black"></Joystick>
                                                </div>
                                                <div className="tunnel-camera-right-button">
                                                    <Button>▶</Button>
                                                </div>
                                            </div>
                                            <div className="tunnel-camera-bottom-button">
                                                <Button>▼</Button>
                                            </div>
                                        </div>
                                        <div className="tunnel-zoom-slider-wrap">
                                            <Slider vertical defaultValue={30} className="tunnel-zoom-slider" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={8} style={{ height: '100%' }}>
                                <Card title="컨트롤" size="small" className="tunnel-robot-control" style={{ height: '50%' }}>
                                    <div className="radio">
                                        <span>감시모드</span>
                                        <Radio.Group>
                                            <Radio value={1} /*onClick={() => setValue('1')}*/>자동</Radio>
                                            <Radio value={2} /*onClick={() => setValue('2')}*/>수동</Radio>
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
                                <Card title="스테이션 이동" size="small" className="station-move" style={{ height: '50%' }}>
                                    <Form form={form} name="control" className="tunnel-form">
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
                            </Col>
                            <Col span={8} style={{ height: '100%' }}>
                                <Card title="현황" size="small" style={{ height: '100%' }} bodyStyle={{ minHeight: '275px' }}>
                                    <TodayStatus />
                                </Card>
                            </Col>
                        </Row>
                        <Card title="데이터 정보" size="small" className="sensor-status" style={{ height: '50%' }}>
                            <div className="sensor">
                                <Col span={6}><TunnelRadial1 /></Col>
                                <Col span={6}><TunnelRadial2 /></Col>
                                <Col span={6}><TunnelRadial3 /></Col>
                                <Col span={6}><TunnelRadial4 /></Col>
                            </div>
                            <div className="sensor-chart">
                                <Col span={12}><RobotDataChart1 /></Col>
                                <Col span={12}><RobotDataChart /></Col>
                            </div>
                        </Card>
                    </Col>
                    <Col span={2}>
                        <Card title="Alert list" size="small" className="alarm-list-wrap">
                            <div className="alarm-list">
                                <Alert
                                    message="Alert"
                                    description="Warning"
                                    type="error"
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Tunnel;