import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, notification, Modal, Alert} from 'antd';
import {LaptopOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Player} from 'video-react';

import 'video-react/dist/video-react.css';
import './Video.css';

const VideoList = ({vList}) => {
    return (
        <>
            <Col span = { vList === 1 || vList === 2 ? 12 : 6 }
                style = {{padding:'1px'}} >
                <Player
                    playsInline="playsInline"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    autoPlay={false}
                    muted={true}/>
                    <div className="video-info">
                        { vList === 1 ? '로봇카메라:일반' : vList === 2
                        ? '로봇카메라:열화상'
                        : vList }</div>
                </Col>
        </>
    );
}



const StatusAlert = () => {

    const modal = Modal.error({
        title:'Alert!',
        content: 'Warning'
    })

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


//html초입에서 height 설정안해서 적용안됨 세로 퍼센트
const Video = (props) => {
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

    const eventlocation = 2;

    return (
        
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                <Breadcrumb.Item><VideoCameraOutlined/>&nbsp;Video</Breadcrumb.Item>
            </Breadcrumb>
            <div className="video contents">
                <Row gutter={12} style={{height:'100%'}}>
                    <Col span={11} style={{height:'100%'}}>
                        <Card style={{height:'100%'}}>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={false}
                                muted={true}/>
                            <div className="video-info" onClick={StatusAlert}>[부강 -&gt; 청주] 메인 화면: 로봇 카메라(일반)</div>
                        </Card>
                        <Card>
                            <Row gutter={[8, 0]}>
                                {vList.map(vList => (<VideoList vList={vList} key={vList.id}></VideoList>))}
                            </Row>
                        </Card>
                        <Card>
                            <div>
                                <div className="robot-location-bar"></div>
                            </div>
                            <div className="event">
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={false}
                                muted={true}/>
                            <div className="video-info">[청주 -&gt; 부강] 메인 화면: 2번 카메라(일반)</div>
                        </Card>
                        <Card>
                            <Row gutter={[8, 0]}>
                                {vList.map(vList => (<VideoList vList={vList} key={vList.id}></VideoList>))}
                            </Row>
                        </Card>
                        <Card>
                            <div>
                                <div className="robot-location-bar"></div>
                            </div>
                            <div className="event">
                            <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==2 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
                                <div className={eventlocation==1 ? 'event-section-red' : 'event-section' }></div>
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

export default Video;