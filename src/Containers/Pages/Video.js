import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col} from 'antd';
import {LaptopOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Player} from 'video-react';
import 'video-react/dist/video-react.css';
// import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import './Video.css';
const Video = (props) => {
    return (
        <Fragment>
            <div>
                <Breadcrumb style={{
                            marginBottom: '20px'
                        }}>
                    <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                    <Breadcrumb.Item><VideoCameraOutlined/>&nbsp;Video</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <Row gutter={12}>
                        <Col span={16}>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}
                                ></Player>
                        </Col>
                        <Col span={8}>
                            <Row>
                                <Col span={12}>
                                    <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}
                                        />
                                </Col>
                                <Col span={12}>
                                    <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}/>
                                </Col>
                            </Row>
                            <Row gutter={[0,8]}>
                                <Col span={12}>
                                    <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}/>
                                </Col>
                                <Col span={12}>
                                    <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Player
                                        playsInline="playsInline"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={true}
                                        muted={true}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>
        </Fragment>
    );
};

export default Video;