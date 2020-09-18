import React, { Fragment, useState } from 'react';
import {
    Breadcrumb,
    Row, Col, Card,
    Radio, Button, Tabs,
    Slider, Switch,
    Select, Form,
    Popconfirm, message,
    DatePicker, Input
} from 'antd';
import { RobotOutlined } from '@ant-design/icons';
import { Player } from 'video-react';
import { Joystick } from 'react-joystick-component';
import moment from 'moment';

import {
    RobotStateChart,
    RobotDataColumn,
    VoltChart,
    CurrentChart,
    Thermom
} from '../Chart/RobotChart';
import { TunnelStatus } from '../Tunnel/TunnelStatus';


import '../cctv/Video.css';
import './RobotControl.css';
import '../Tunnel/Tunnel.css';
import 'video-react/dist/video-react.css';
import '../Common.css';

const { TabPane } = Tabs;
const { Option } = Select;

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {

    // const [value, setValue] = useState('1');
    const [form] = Form.useForm();
    const [conVisible, setCon] = useState(false);

    function confirmPop(e) {
        message.success('설정되었습니다!');
    }

    function showConfirm() {
        setCon(true);
    }

    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }

    function disabledDateTime() {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }


    return (<Fragment>
        <Breadcrumb className="bread">
            <Breadcrumb.Item><RobotOutlined />&nbsp; 로봇 제어</Breadcrumb.Item>
        </Breadcrumb>
        <Tabs type="card" style={{ width: '91.6%' }}>
            <TabPane tab="부강-&gt;청주" key="1">
                <div className="robot-control robot-contents">
                    <Row gutter={[6, 6]}>
                        <Col span={8}>
                            <Card className="robot-camera">
                                <Player
                                    fluid={false}
                                    width={555}
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
                                    width={555}
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
                                            <Joystick size={35} baseColor="#396afc" stickColor="black"></Joystick>
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
                                                <Joystick size={30} baseColor="#396afc" stickColor="black"></Joystick>
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
                            {/*<Card className="control-container" bodyStyle={{ padding: '10px' }}>*/}
                            <Card title="컨트롤" size="small" className="robot-control-1">
                                <div className="radio">
                                    <span>감시모드</span>
                                    <Radio.Group defaultValue={1}>
                                        <Popconfirm
                                            title="설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소">
                                            <Radio value={1} conVisible={conVisible} onClick={showConfirm}>자동</Radio>
                                        </Popconfirm>
                                        <Popconfirm
                                            title="설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소">
                                            <Radio value={2} conVisible={conVisible} onClick={showConfirm}>수동</Radio>
                                        </Popconfirm>
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
                        </Col>
                        <Col span={20}>
                            <Card title="터널 상태" size="small" bodyStyle={{
                                height: '250px',
                                padding: 0,
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <Col span={20} className="robot-tunnel-current">
                                    <TunnelStatus />
                                </Col>
                                <Col span={4} className="tunnel-current-status">
                                    <div className="tunnel-status">
                                        <h4>현재 터널 상태</h4>
                                        <p>
                                            로봇 위치 : 100m<br />
                                            방향 : 전진<br />
                                            속도 : 1.5m/s<br />
                                            사고 위치 :
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
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Popconfirm
                                            title="스케줄을 설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소"><Button type="primary" className="schedule-button" htmlType="설정">
                                                설정
                                                </Button>
                                        </Popconfirm>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                        <Col span={15}>
                            <Card
                                title="로봇 환경 센서"
                                size="small"
                                bodyStyle={{
                                    padding: '10px',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        marginBottom: '20px',
                                        width: '100%'
                                    }}>
                                    {/*<div className="unit-box">1분 단위</div>*/}
                                    <div className="robot-data-chart data-1"><RobotDataColumn /></div>
                                </div>

                            </Card>
                        </Col>
                        <Col span={9}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                bodyStyle={{
                                    padding: '12px 18px',
                                }}>
                                <Card
                                    size="small"
                                    style={{
                                        marginBottom: '10px'
                                    }}>
                                    <div className="robot-info">
                                        <VoltChart />
                                        <CurrentChart />
                                        <Thermom />
                                    </div>
                                </Card>
                                <Card title="레일 로봇 상태 추이" size="small" style={{
                                    marginBottom: '10px'
                                }}>
                                    <RobotStateChart />
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </TabPane>
            <TabPane tab="청주-&gt;부강" key="2">
                <div className="robot-control robot-contents">
                    <Row gutter={[6, 6]}>
                        <Col span={8}>
                            <Card className="robot-camera">
                                <Player
                                    fluid={false}
                                    width={555}
                                    height={320}
                                    playsInline="playsInline"
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    autoPlay={true}
                                    muted={true} />
                                <div className="video-info">[청주 -&gt; 부강] 로봇 카메라(일반)</div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="robot-camera">
                                <Player
                                    fluid={false}
                                    width={555}
                                    height={320}
                                    playsInline="playsInline"
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    autoPlay={true}
                                    muted={true} />
                                <div className="video-info">[청주 -&gt; 부강] 로봇 카메라(열화상)</div>
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
                                            <Joystick size={35} baseColor="#396afc" stickColor="black"></Joystick>
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
                                                <Joystick size={30} baseColor="#396afc" stickColor="black"></Joystick>
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
                            {/*<Card className="control-container" bodyStyle={{ padding: '10px' }}>*/}
                            <Card title="컨트롤" size="small" className="robot-control-1">
                                <div className="radio">
                                    <span>감시모드</span>
                                    <Radio.Group defaultValue={1}>
                                        <Popconfirm
                                            title="설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소">
                                            <Radio value={1} conVisible={conVisible} onClick={showConfirm}>자동</Radio>
                                        </Popconfirm>
                                        <Popconfirm
                                            title="설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소">
                                            <Radio value={2} conVisible={conVisible} onClick={showConfirm}>수동</Radio>
                                        </Popconfirm>
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
                        </Col>
                        <Col span={20}>
                            <Card title="터널 상태" size="small" bodyStyle={{
                                height: '250px',
                                padding: 0,
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <Col span={20} className="robot-tunnel-current">
                                    <TunnelStatus />
                                </Col>
                                <Col span={4} className="tunnel-current-status">
                                    <div className="tunnel-status">
                                        <h4>현재 터널 상태</h4>
                                        <p>
                                            로봇 위치 : 100m<br />
                                            방향 : 전진<br />
                                            속도 : 1.5m/s<br />
                                            사고 위치 :
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
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Popconfirm
                                            title="스케줄을 설정하시겠습니까?"
                                            onConfirm={confirmPop}
                                            okText="예"
                                            cancelText="취소"><Button type="primary" className="schedule-button" htmlType="설정">
                                                설정
                                                </Button>
                                        </Popconfirm>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                        <Col span={15}>
                            <Card
                                title="로봇 환경 센서"
                                size="small"
                                bodyStyle={{
                                    padding: '10px',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        marginBottom: '20px',
                                        width: '100%'
                                    }}>
                                    {/*<div className="unit-box">1분 단위</div>*/}
                                    <div className="robot-data-chart data-1"><RobotDataColumn /></div>
                                </div>

                            </Card>
                        </Col>
                        <Col span={9}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                bodyStyle={{
                                    padding: '12px 18px',
                                }}>
                                <Card
                                    size="small"
                                    style={{
                                        marginBottom: '10px'
                                    }}>
                                    <div className="robot-info">
                                        <VoltChart />
                                        <CurrentChart />
                                        <Thermom />
                                    </div>
                                </Card>
                                <Card title="레일 로봇 상태 추이" size="small" style={{
                                    marginBottom: '10px'
                                }}>
                                    <RobotStateChart />
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </TabPane>
        </Tabs>
    </Fragment>
    );
};

export default RobotControl;