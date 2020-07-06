import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
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
                    autoPlay={true}
                    muted={true}/>
                    <div className="video-info">
                        { vList === 1 ? '로봇카메라:일반' : vList === 2
                        ? '로봇카메라:열화상'
                        : vList }</div>
                </Col>
        </>
    );
}

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

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                <Breadcrumb.Item><VideoCameraOutlined/>&nbsp;Video</Breadcrumb.Item>
            </Breadcrumb>
            <div className="video contents">
                <Row gutter={12} className="row-video">
                    <Col span={11}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div className="video-info">[부강 -&gt; 청주] 메인 화면: 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div className="video-info">[청주 -&gt; 부강] 메인 화면: 2번 카메라(일반)</div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={12} className="row-video">
                    <Col span={11}>
                        <Card>
                            <Row gutter={[8, 0]}>
                                {vList.map(vList => (<VideoList vList={vList} key={vList.id}></VideoList>))}
                            </Row>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card>
                            <Row gutter={[8, 0]}>
                                {vList.map(vList => (<VideoList vList={vList} key={vList.id}></VideoList>))}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Video;