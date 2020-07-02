import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, Tabs} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import './Common.css';
import './Dashboard.css';

import {SagnacChart, SoundChart, TempChart} from './Sensor';
import {
    RobotChart1,
    RobotChart2,
    RobotChart3,
    RobotChart4,
    RobotChart5,
    RobotChart6,
    RobotStateChart
} from './RobotChart';
import {SagnacAvgChart, TempAvgChart, SoundAvgChart} from './SensorAvgChart';
import {TunnelList} from './TunnelCurrentB';
import {NetworkChart} from './NetworkChart';
import './Robot1.css';

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

const Dashboard = () => {
    return (
        <Tabs onChange={callback} type="card">
            <TabPane tab="부강-&gt;청주" key="1">
                <Fragment>
                    <Breadcrumb className="bread">
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="dashboard contents">
                        <Row gutter={[6, 6]}>
                            <Card className="section-title" size="small" title="Sagnac Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SagnacChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div
                                                    className="title"
                                                    style={{
                                                        fontSize: '16px',
                                                        margin: '0 0 0px 32px',
                                                        float: 'left'
                                                    }}>Sagnac AVG</div>
                                                <div
                                                    style={{
                                                        fontSize: '16px',
                                                        float: 'right',
                                                        border: '1px solid #f0faff',
                                                        background: '#e6f7ff',
                                                        color: 'black',
                                                        padding: '5px'
                                                    }}>1분 단위</div>
                                            </div><SagnacAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="FBG Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><TempChart nb_bar={24}/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div
                                                    className="title"
                                                    style={{
                                                        fontSize: '16px',
                                                        margin: '0 0 0px 32px',
                                                        float: 'left'
                                                    }}>FBG Temperature AVG</div>
                                                <div
                                                    style={{
                                                        fontSize: '16px',
                                                        float: 'right',
                                                        border: '1px solid #f0faff',
                                                        background: '#e6f7ff',
                                                        color: 'black',
                                                        padding: '5px'
                                                    }}>1분 단위</div>
                                            </div><TempAvgChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SoundChart nb_bar={24}/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}>
                                            <div>
                                                <div
                                                    className="title"
                                                    style={{
                                                        fontSize: '16px',
                                                        margin: '0 0 0px 32px',
                                                        float: 'left'
                                                    }}>FBG Sound AVG</div>
                                                <div
                                                    style={{
                                                        fontSize: '16px',
                                                        float: 'right',
                                                        border: '1px solid #f0faff',
                                                        background: '#e6f7ff',
                                                        color: 'black',
                                                        padding: '5px'
                                                    }}>1분 단위</div>
                                            </div><SoundAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="Robot Data">
                                <Row gutter={[6, 6]}>
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
                                                        marginBottom: '14px',
                                                        fontSize: '16px'
                                                    }}>
                                                    <div
                                                        style={{
                                                            float: 'left'
                                                        }}>로봇 환경 센서</div>
                                                    <div
                                                        style={{
                                                            float: 'right',
                                                            border: '1px solid #f0faff',
                                                            background: '#e6f7ff',
                                                            color: 'black',
                                                            padding: '5px'
                                                        }}>1분 단위</div>
                                                </Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                        padding:'3px'
                                                    }}><RobotChart1/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart2/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart3/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart4/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart5/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart6/></Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="Tunnel">
                                <Row gutter={[6, 6]}>
                                    <Col span={16}>
                                        <Card
                                            bodyStyle={{
                                                padding: 0,
                                                height: 520
                                            }}>
                                            <div><img
                                                src="/tunnel.png"
                                                alt=""
                                                style={{
                height: '300px',
                width: '80%',
                marginTop: '110px'
            }}/></div>
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 24px',
                                                height: 520
                                            }}>
                                            <div>
                                                <div
                                                    className="title"
                                                    style={{
                                                        fontSize: '16px',
                                                        margin: '0 0 0px 16px',
                                                        float: 'left'
                                                    }}>네트워크 상태</div>
                                                <div
                                                    style={{
                                                        fontSize: '16px',
                                                        float: 'right',
                                                        border: '1px solid #f0faff',
                                                        background: '#e6f7ff',
                                                        color: 'black',
                                                        padding: '5px'
                                                    }}>1분 단위</div>
                                            </div><NetworkChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </div>
                </Fragment>
            </TabPane>
            <TabPane tab="청주-&gt;부강" key="2">
                <Fragment>
                    <Breadcrumb className="bread">
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="dashboard contents">
                        <Row gutter={[6, 6]}>
                            <Card className="section-title" size="small" title="Sagnac Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SagnacChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SagnacAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="FBG Data">
                                <Row gutter={[6, 6]}>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><TempChart nb_bar={24}/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><TempAvgChart/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SoundChart nb_bar={24}/></Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card
                                            bodyStyle={{
                                                padding: '24px 36px 24px 0',
                                                height: 380
                                            }}><SoundAvgChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size="small" className="section-title" title="Robot Data">
                                <Row gutter={[6, 6]}>
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
                                                        }}>환경정보</div>
                                                    <div
                                                        style={{
                                                            float: 'right',
                                                            border: '1px solid #1890ff',
                                                            background: '#e6f7ff',
                                                            color: 'black',
                                                            padding: '5px'
                                                        }}>1분 단위</div>
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
                            </Card>
                            <Card size="small" className="section-title" title="Tunnel">
                                <Row gutter={[6, 6]}>
                                    <Col span={16}>
                                        <Card
                                            bodyStyle={{
                                                padding: 0,
                                                height: 450
                                            }}><TunnelList/></Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            bodyStyle={{
                                                padding: '12px 18px 12px 18px',
                                                height: 450
                                            }}><NetworkChart/></Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </div>
                </Fragment>
            </TabPane>
        </Tabs>

    );
};

export default Dashboard;